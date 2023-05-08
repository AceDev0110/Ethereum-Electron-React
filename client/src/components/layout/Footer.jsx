import React from "react";
import { Icon, IconGroup, Segment, SegmentGroup } from "semantic-ui-react";
import "../../App.css";

const Footer = () => {
  return (
    <Segment size="large" tertiary inverted color="blue" textAlign="center">
      Made with <Icon color="red" name="heart"></Icon> by{" "}
      <a
        target="_blank"
        style={{ color: "black" }}
        href="https://Shamir-Mateo.dev"
      >
        Shamir-Mateo
      </a>{" "}
      <br />
      Please support the project at{" "}
      <a
        target="_blank"
        style={{ color: "black" }}
        href="https://github.com/Shamir-Mateo/ethereum-electron-react-app"
      >
        <Icon name="github"></Icon>
      </a>
    </Segment>
  );
};

export default Footer;
