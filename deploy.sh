name: Terraform Deployment

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    env:
      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

    steps:
    - name: Checkout repo
      uses: actions/checkout@v3

    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v2
      with:
        terraform_version: 1.6.0

    - name: Terraform Init
      working-directory: terraform
      run: terraform init

    - name: Terraform Apply
      working-directory: terraform
      run: terraform apply -auto-approve

    - name: Get EC2 Public IP
      working-directory: terraform
      id: ip
      run: |
        echo "EC2_IP=$(terraform output -raw ec2_public_ip)" >> $GITHUB_ENV

    - name: Setup SSH Key
      run: |
        mkdir -p ~/.ssh
        echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa

    - name: Install Ansible
      run: |
        sudo apt-get update
        sudo apt-get install -y ansible

    - name: Run Ansible Playbook
      run: |
        echo "[portfolio]" > inventory.ini
        echo "$EC2_IP ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa" >> inventory.ini
        ansible-playbook -i inventory.ini ansible/playbook.yml
