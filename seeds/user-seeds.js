const { User } = require('../models');

const userData = [
  {
    username: "cindy_lou",
    twitter: "cindylou",
    github: "cindylou",
    email: "cindylou@gmail.com",
    password: "p@ssword1"
  },
  {
    username: "george_k",
    twitter: "georgek",
    github: "georgek",
    email: "george_k@gmail.com",
    password: "p@ssword2"
  },
  {
    username: "tina_t",
    twitter: "tinat",
    github: "tina_t",
    email: "tinat@gmail.com",
    password: "p@ssword3"
  },
  {
    username: "dollyp",
    twitter: "dollyp",
    github: "dollyparton",
    email: "dolly@gmail.com",
    password: "p@ssword4"
  },
  {
    username: "iamjoyfulgirl",
    twitter: "iamjoyfulgirl",
    github: "iamjoyfulgirl",
    email: "iamjoyfulgirl@gmail.com",
    password: "p@ssword5"
  },
  {
    username: "nunya",
    twitter: "nunya",
    github: "nunya",
    email: "nunya@gmail.com",
    password: "p@ssword6"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;