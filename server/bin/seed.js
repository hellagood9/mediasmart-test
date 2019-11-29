require("dotenv").config();
const mongoose = require("mongoose");

const fetch = require("node-fetch");

// Model
const Member = require("../models/Member");

const pageSize = 200;

const headers = {
  "Content-Type": "application/json",
  Authorization: process.env.AUTH_HEADER,
  port: process.env.PROXY_PORT
};

const fetchFromApi = page => {
  const url = `http://work.mediasmart.io?page=${page}&page_size=${pageSize}`;

  return fetch(url, { method: "GET", headers })
    .then(res => {
      return res.json();
    })
    .then(members => {
      const promises = [];

      members.forEach(member => {
        const p = Member.create(member)
        .catch(err =>          
          console.log("Error while seeding DB => member with id", member.id)
        );
        promises.push(p);
      });

      return Promise.all(promises);
    })
    .catch(err => console.error(err));
};

const doRecursiveApiCall = page => {

  console.log("page", page);
  return fetchFromApi(page).then(response => {

    console.log(
      "Members added",
      response.filter(element => element !== undefined).length
    );

    if (!response || response.length === 0) {
      return undefined;
    } else {
      return doRecursiveApiCall(page + 1);
    }
  });
};

module.exports = {
  seed: () => {
    const page = 1;

    return mongoose
      .connect(`${process.env.DB_LOCAL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        return Member.find();
      })
      .then(data => {
        if (data.length === 0) {
          console.log("Seeding the database, the server will start in a while...");
          return doRecursiveApiCall(page);
        }
      })
      .catch(err => {
        console.log("Error connecting to the DB", err);
      });
  },

  seedCron: () => {
    const page = 1;

    return mongoose
      .connect(`${process.env.DB_LOCAL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        return Member.deleteMany();
      })
      .then(_ => {
        console.log("Seeding the database...");
        return doRecursiveApiCall(page);
      })
      .catch(err => {
        console.log("Error connecting to the DB", err);
      });
  }
}