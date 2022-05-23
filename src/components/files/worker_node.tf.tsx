const workerBody = `resource "aws_iam_role" "eks-tf-worker-node" {
  name = "tf-eks-eks-tf-worker-node"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}
resource "aws_iam_role_policy_attachment" "eks-tf-worker-node-AmazonEKSWorkerNodePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.eks-tf-worker-node.name
}

resource "aws_iam_role_policy_attachment" "eks-tf-worker-node-AmazonEKS_CNI_Policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.eks-tf-worker-node.name
}
resource "aws_iam_role_policy_attachment" "eks-tf-worker-node-AmazonEC2ContainerRegistryReadOnly" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.eks-tf-worker-node.name
}
resource "aws_eks_node_group" "demo" {
  cluster_name    = aws_eks_cluster.demo.name
  node_group_name = "demo"
  node_role_arn   = aws_iam_role.eks-tf-worker-node.arn
  subnet_ids      = aws_subnet.public_subnets[*].id

  scaling_config {
    desired_size = 1
    max_size     = 1
    min_size     = 1
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks-tf-worker-node-AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.eks-tf-worker-node-AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.eks-tf-worker-node-AmazonEC2ContainerRegistryReadOnly,
  ]
}
`;
export default workerBody;
