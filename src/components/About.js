import React from "react";
import Links from "./Links";
import user from "../data/user";
import image from "../data/user"

function About({ bio, github, linkedin }) {
  return (
    <div>
      <h1>About Me</h1>
      <p>{bio}</p>
      <img src={"https://i.imgur.com/mV8PQxj.gif"} alt="I made this" />
      <Links github={"https://github.com/liza"} linkedin={"https://www.linkedin.com/in/liza/"} />
    </div>
  );
}

export default About;

