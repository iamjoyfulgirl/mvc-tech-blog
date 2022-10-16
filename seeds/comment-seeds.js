const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "Love it"
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "Wow, amazing work!"
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Congrats to everyone who contributed!"
  }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;