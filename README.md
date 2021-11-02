# tech-blog

## Author
Alonzo Roman

## Table of Contents
* [Summary](#Summary)
* [Code](#Code-Snippet)
* [Technologies](#Technologies)
* [Contact](#Contact-Links)
* [Acknowledgements](#Acknowledgements)

## Summary
The purpose of this project is to create a a tech blog. Users are able to log into accounts and create posts and comments onto the page. The site utilizes express, mySQL, sequelize and handlebars for the users and posts to be stored in the database. 

## Code Snippet
In order to create a new post, I created both a post directory in the API post-routes, and in the javascript for the post form, gathered the input data for both the title and content boxes. An if statement for values not filled out is checked first, then a fetch request is made to the api post directory, sending the data into a new post.

```Javascript
const postForm = async (event) => {
    event.preventDefault();

    const title = document.querySelectorAll("#update-post input")[0].value.trim();
    const content = document.querySelectorAll("#update-post input")[1].value.trim();
    if (!title || !content) {
        alert('Fill out both fields')
        return;
    }
    const response = await fetch(`/api/post/${document.location.href[document.location.href.length-1]}`, {
        method: 'PUT',
        body: JSON.stringify({title, content}),
        headers: {'content-Type': 'application/json'}
    });
    response.ok? document.location.replace('/dashboard'): alert('Failed to update');
};
```


## Technologies

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/)
- [mySQL](https://dev.mysql.com/doc/)
- [Sequelize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Contact Links

- [Github](https://github.com/alonzofroman)
- [LinkedIn](https://www.linkedin.com/in/alonzo-roman/")

## Acknowledgements 

- [W3Schools](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [Meyer Web](https://meyerweb.com/eric/tools/css/reset/)