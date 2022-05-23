import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
interface PropsType {
  textBody: string;
  language: string;
  showLineNumbers: boolean;
  sectionTitle: string;
  description: string;
}
const CopyBlockComponent = (props: PropsType) => {
  const { textBody, language, showLineNumbers, sectionTitle, description } =
    props;
  return (
    <li>
      <h4>{sectionTitle}</h4>
      <p>{description}</p>
      <CopyBlock
        text={textBody}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        codeBlock
      />
    </li>
  );
};

export default CopyBlockComponent;
