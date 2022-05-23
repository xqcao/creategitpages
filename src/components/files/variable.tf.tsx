const vars = `variable "region" {
  default="us-east-2"
}

variable "cluster-name" {
  default="tf-eks-demo"
}
variable "worknode-size" {
  default=2
}

variable "instanceTenancy" {
  default = "default"
}
variable "dnsSupport" {
  default = true
}
variable "dnsHostNames" {
  default = true
}

variable "default-cidr-block" {
  default="0.0.0.0/0"
}

variable "cidr-block-prefix" {
  default="10.20"
}

variable "cidr-block-24suffix" {
  default="0/24"
}
variable "cidr-block-16suffix" {
  default="0/16"
}
variable "subnet-size" {
  default=3
}
`;

export default vars;
