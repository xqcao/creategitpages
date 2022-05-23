import React from "react";
import CopyBlockComponent from "./CopyBlockComponent";
import vars from "./files/variable.tf";
import provider from "./files/provider.tf";
import vpcBody from "./files/vpc.tf";
import externalIp from "./files/external_ip.tf";
import securityBody from "./files/security_group.tf";
import workerBody from "./files/worker_node.tf";
const steps = [
  {
    textBody: `${vars}`,
    language: "shell",
    showLineNumbers: true,
    description: "variables for all ---variables.tf",
    sectionTitle: "vars values for variables",
  },
  {
    textBody: `${provider}`,
    language: "shell",
    showLineNumbers: true,
    description: "provider for aws ---provider.tf",
    sectionTitle: "AWS provider, version  and availableZone",
  },
  {
    textBody: `${vpcBody}`,
    language: "shell",
    showLineNumbers: true,
    description: "main vpc and subnets ---vpc.tf",
    sectionTitle: "VPC, subnet,RT,RTA",
  },
  {
    textBody: `${externalIp}`,
    language: "shell",
    showLineNumbers: true,
    description: "Workstation External IP ---external_ip.tf",
    sectionTitle: "Workstation External IP",
  },
  {
    textBody: `${securityBody}`,
    language: "shell",
    showLineNumbers: true,
    description:
      "EC2 Security Group to allow networking traffic with EKS cluster ---security_group.tf",
    sectionTitle: "Security Group for EKS cluster",
  },
  {
    textBody: `${workerBody}`,
    language: "shell",
    showLineNumbers: true,
    description: "EKS Node Group to launch worker nodes --worker_node.tf",
    sectionTitle: "EKS Worker Nodes Resources",
  },
];
const TfLambdaDemo = () => {
  return (
    <div>
      <h2>TfLambdaDemo</h2>
      <ol>
        {steps.map((it, idx) => (
          <CopyBlockComponent
            key={idx}
            textBody={it.textBody}
            language={it.language}
            showLineNumbers={it.showLineNumbers}
            description={it.description}
            sectionTitle={it.sectionTitle}
          />
        ))}
      </ol>
    </div>
  );
};

export default TfLambdaDemo;
