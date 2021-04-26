const express = require("express");
const redis = require("redis");
const fetch = require("node-fetch");

const PORT = process.env.port || 5000;
//redis port
const REDIS_PORT = process.env.port || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

//redis function
const setResponse = (username, repos) => {
  return `<h2>${username} has ${repos} github repos </h2>`;
};

const getRepos = async (req, res, next) => {
  try {
    console.log("fetching data ");
    const { username } = req.params;

    const response = await fetch(`https://api.github.com/users/${username}`);
    //converting into JSON fromat
    let data = await response.json();
    let repos = await data.public_repos;
    console.log("data", data);

    //setting data to redis it takes 3 params key  ,expiration ,data
    client.setex(username, 3600, repos);

    res.send(setResponse(username, repos));
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

//caching middleware
const cache = (req, res, next) => {
  const { username } = req.params;

  client.get(username, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send(setResponse(username, data));
    } else {
      next();
    }
  });
};

//making route for getting data from github

app.get("/repos/:username", cache, getRepos);

app.listen(5000, () => {
  console.log(`port listning to ${PORT}`);
});
