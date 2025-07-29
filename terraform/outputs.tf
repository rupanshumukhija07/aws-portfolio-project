output "ec2_public_ip" {
  value = aws_instance.portfolio_ec2.public_ip
}

output "vpc_id" {
  value = aws_vpc.main_vpc.id
}

output "subnet_id" {
  value = aws_subnet.public_subnet.id
}

