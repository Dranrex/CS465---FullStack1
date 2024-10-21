# CS465---FullStack1

## Architecture

*Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?*

For this project, I worked with both Express HTML and JavaScript and a Single Page Application (SPA) with Angular. When using Express, the HTML is generated on the server and sent to the browser. This works fine for simple websites, but every time you interact with the page, the server has to reload the whole thing. In contrast, using Angular for the SPA means the page loads once, and then it updates dynamically without needing to refresh. This makes it much faster and smoother, especially for users.

I used MongoDB as the backend database because it’s great for handling data that doesn’t always look the same. It allows me to store and manage flexible data in a format that’s easy to work with in both the frontend (Angular) and backend (Node.js). It also scales easily when the app grows, which is ideal for web applications like the Travlr Getaways project.

## Functionality

*How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.*

JSON is different from JavaScript because it’s just a way to format and store data, while JavaScript is a full programming language. In my project, JSON acts as the bridge between the frontend (Angular) and backend (Express). When data like user information or trips is sent from the browser to the server, it’s sent as JSON because it’s lightweight and easy for both sides to understand.

During the project, I refactored code to make it cleaner and more efficient. For example, I reused components in Angular like the trip card. This made the app easier to maintain because I didn’t have to rewrite the same code multiple times. If I wanted to make a change to the trip cards, I could do it in one place, and it would update everywhere the component is used.

## Testing

*Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.*

In a full stack app, the backend uses different HTTP methods like GET to retrieve data and POST to send new data. To make sure the API works correctly, I had to test the endpoints. But when you add security layers like authentication, using JWT tokens in this case, it gets more complicated. I had to use tools like Postman to send requests with the right tokens to test if the system was rejecting unauthorized users and handling valid users correctly.

For the frontend, I tested the Angular app to make sure it was sending and receiving data from the API correctly. For example, I checked if the trips were loading from the database and if I could update trip details successfully in the admin panel.

## Reflection

*How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?*

This course has helped me a lot in developing my skills as a potential full stack developer, learning both front and back end development methodologies of a web application. I’ve also become more comfortable with tools like Angular and MongoDB, which are in high demand in the job market currently.

One of the biggest things I’ve learned is how important it is to test your code, especially when working with APIs and user authentication. These skills are going to be very useful as I continue to grow in the field of software development.
