# MVC Tech Blog

  
## Description
This application is a Tech Blog where developers can publish their blog posts and comment on other developers’ posts.

## Installation
In order to run the application locally, clone the repository. Create a `.env` file in the root directory of the project with the following:
```
DB_NAME='tech_blog_db'
DB_PASSWORD='<your mysql password'
DB_USER='<your mysql username>'
```
In the terminal, change directories to the `db` directory and run `mysql -u root -p` and enter your MySQL password. Run `source schema.sql`. Enter `exit` at the prompt to exit MySQL. 

Change directory back to the root and enter `npm run seed` to seed the database.

To run the app, enter `npm start`. In your browser, enter `localhost:3001` and press enter to view the app. In order to create a post, you will need to sign up. From the Homepage, click the Log In button and then click Sign Up. Happy blogging! 

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Screenshots
![Homepage](./assets/homepage-logged-out.png)
![Dashboard](./assets/dashboard-logged-in.png)
![Create New](./assets/create-new-post.png)
![Add Comment](./assets/add-comment.png)
![Edit or Delete](./assets/edit-delete-post.png)


## Links
Deployed Application: https://enigmatic-coast-39915.herokuapp.com

GitHub Repository: https://github.com/iamjoyfulgirl/mvc-tech-blog


## Questions?
Questions about this project can be directed to:
- Email: sherri.a.knight@gmail.com. 
- You can view more of my projects at https://github.com/iamjoyfulgirl.

-----------

MVC Tech Blog 👩🏻‍💻 - Copyright 2022 Sherri Knight
