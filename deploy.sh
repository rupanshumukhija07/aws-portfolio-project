#!/bin/bash

set -e

echo "🛠 Running Terraform..."

cd terraform
terraform init
terraform apply -auto-approve

echo "📦 Extracting EC2 Public IP..."
EC2_PUBLIC_IP=$(terraform output -raw ec2_public_ip)
cd ..

echo "🌐 EC2 Public IP: $EC2_PUBLIC_IP"

echo "📁 Updating Ansible inventory..."
echo "[portfolio]" > ansible/inventory.ini
echo "$EC2_PUBLIC_IP ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/aws-portfolio-key" >> ansible/inventory.ini

echo "🚀 Running Ansible Playbook..."
ansible-playbook -i ansible/inventory.ini ansible/playbook.yml

