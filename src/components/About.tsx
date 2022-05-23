import React from "react";
import external_ip from "./files/wp_exterl_ip";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <pre>
        <code>{external_ip}</code>
      </pre>
    </div>
  );
};

export default About;
