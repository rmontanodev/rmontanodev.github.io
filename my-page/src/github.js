import React from 'react';
import axios from 'axios';
const user = "rmontanodev";
const github_Info = () => ({
    info : axios({
        method: "get",
        url: `https://api.github.com/users/${user}/repos`,
        })
        .then(res => {
            return JSON.stringify(res.data);
        })
        .catch(err => {
            return err;
        })
})
export default function getGithubInfo() {
    const github = github_Info();

  return (
    <p>{github.info}</p>
  );
}

