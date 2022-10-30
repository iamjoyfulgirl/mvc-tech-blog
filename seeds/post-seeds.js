const { Post } = require('../models');

const postData = [
  {
    title: "AI's New Creative Streak Sparks Fear Into the Hearts of Many!",
    post_content: "Robots 🤖 every where are running in fear of 'generative AI' that can make text and images. But so far, the hype runs ahead of the business results.",
    user_id: 3
  },
  {
    title: "The 12 Best Horror Shows to Binge for Halloween",
    post_content: "Whether you seek spooky chills, jump scares, or creeping dread, we have horror show recommendations to sate your thirst. (Source: WIRED)",
    user_id: 1
  },
  {
    title: "Elon Mush completes Twitter purchase",
    post_content: "What is ahead for the future of Twitter, its employees, and leadership? Only time will tell?",
    user_id: 2

  },
  {
    title: "Venture capital will soon be brimming with ghosts",
    post_content: "Just in time for Halloween! 👻 🧛🏻‍♂️ 🧙🏻‍♀️",
    user_id: 5
  },
  {
    title: "Should early-stage startups join in on the cloud marketplace fun?",
    post_content: "The sky’s the limit for the cloud market. If Alphabet’s earnings missed expectations in Q3, it is certainly not because of Google Cloud, whose revenue grew 37.64% year on year last quarter, from $4.990 billion to $6.868 billion. Meanwhile, Microsoft’s “Azure and other cloud services” grew 35%. One of the key factors that make cloud revenue resilient even in a more morose macroeconomic context is committed spend. This creates tailwinds not just for AWS and its competitors, but also for independent software vendors selling through their marketplaces. (Source: TechCrunch)",
    user_id: 4
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;