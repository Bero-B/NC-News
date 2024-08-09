# NC News React App

This project is the front-end implementation of a news web application that utilises News API serving as the back-end, which is hosted on [render.com](https://render.com/). 
The web app is developed using React as the front-end library.

Link to the back-end repo: https://github.com/Bero-B/be-nc-news

The app is deployed on Netlify and it is live on: https://berosnc-news.netlify.app/

**Note: Initially it may take up to a minute to load up the first request as the server needs to spin up.**

### General Information and Features

NC News is a web app similar to BBC News/Reddit, where you can read articles about different topics, post comments, delete comments, upvote or downvote articles or comments and sign in as a user. The app is designed using vanilla CSS only.

**Features available**

Articles Filter Options:
- Articles can be sorted by date, comments and vote. 
- They can also be ordered in an ascending or descending order. 
- The default sorting and ordering filters are by date and descending, respectively.
- Articles can also be filtered based on their topic from the Topics page where clicking on the desired topic will serve up all the articles for the chosen topic.

Pagination:
- You can navigate through the pages using the "Next page" and "Previous page" buttons to see more articles.

Shareable URL:
- The URL in the address bar is easily shareable as it updates dynamically based on the chosen topic and filters applied.
- It also provides a direct link to a specific article

Individual Article:
- Clicking on the title of an article in the Articles or Home page will take you to the page displaying the individual article.
- The page will contain an image, accompanied by information about the topic of the article, its author, date it was published, the text of the article, number of comments and voting options for the article.
- Below the article, a list of comments related to that article will be served up. 
- Below the list, there will a field where a user can post a comment. In order to post a comment or delete one, the user must be logged in. 
- A logged in user can only delete their own comments. If there is a comment posted by that user, a bin icon will apear within the comment to indicate that the user can delete it. Note: You can log in by using 'cooljmessy' as the username, if you wish to try adding/deleting a comment.
- Users can also upvote or downvote individual comments.

### How to run the project locally

Follow the below steps:

1. Clone the repository
    git clone https://github.com/Bero-B/NC-News.git
2. Navigate to the project directory
    cd NC-News
3. Install dependencies
    npm install
4. To view the project in your local browser
    npm run dev

### Minimum version of Node required to run the project locally is v22.2.0.


This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)

