const vpcBody = `resource "aws_vpc" "main_vpc" {
  cidr_block           = "\${var.cidr-block-prefix}.0.\${cidr-block-suffix}"
  instance_tenancy     = var.instanceTenancy 
  enable_dns_support   = var.dnsSupport 
  enable_dns_hostnames = var.dnsHostNames
  tags = tomap({
    "Name"                                      = "tf-eks-demo-node",
    "kubernetes.io/cluster/\${var.cluster-name}" = "shared",
  })
}
resource "aws_eip" "nateIP" {
  vpc   = true
}

resource "aws_subnet" "public_subnets" {
  count                   = var.subnet-size

  availability_zone       = data.aws_availability_zones.available.names[0]
  cidr_block              = "\${var.cidr-block-prefix}.\${count.index}.\${cidr-block-24suffix}"
  map_public_ip_on_launch = true
  vpc_id                  = aws_vpc.demo.id
  availability_zone       = data.aws_availability_zones.available.names[0]
  tags = tomap({
    "Name"                                      = "tf-eks-demo-node",
    "kubernetes.io/cluster/\${var.cluster-name}" = "shared",
  })
}
resource "aws_subnet" "private_subnets" {
  count                   = var.subnet-size
  availability_zone       = data.aws_availability_zones.available.names[1]
  cidr_block              = "\${var.cidr-block-prefix}.\${count.index+100}.\${cidr-block-24suffix}"
  map_public_ip_on_launch = false
  vpc_id                  = aws_vpc.demo.id
  tags = tomap({
    "Name"                                      = "tf-eks-demo-node",
    "kubernetes.io/cluster/\${var.cluster-name}" = "shared",
  })
}
resource "aws_internet_gateway" "demo_IGW" {
  vpc_id = aws_vpc.main_vpc.id
  tags = {
    Name = "My VPC Internet Gateway"
  }
}
resource "aws_route_table" "public_RT" {
  vpc_id = aws_vpc.main_vpc.id
  route {
    cidr_block = var.default-cidr-block
    gateway_id = aws_internet_gateway.demo_IGW.id
  }
  tags = {
    Name = "My VPC public Route Table"
  }
}
resource "aws_nat_gateway" "NATgw" {
  count = var.subnet-size
  allocation_id = aws_eip.nateIP.id
  subnet_id = aws_subnet.private_subnets.*.id[count.index]
}
resource "aws_route_table" "private_RT" {
  vpc_id = aws_vpc.main_vpc.id
  route {
    cidr_block = var.default-cidr-block
    gateway_id = aws_nat_gateway.NATgw.id
  }
  tags = {
    Name = "My VPC private Route Table"
  }
}

resource "aws_route_table_association" "public_RTA" {
  count = var.subnet-size
  subnet_id      = aws_subnet.public_subnets.*.id[count.index]
  route_table_id = aws_route_table.public_RT.id
}
resource "aws_route_table_association" "private_RTA" {
  count = var.subnet-size
  subnet_id      = aws_subnet.private_subnets.*.id[count.index]
  route_table_id = aws_route_table.private_RT.id
}
`;
export default vpcBody;
