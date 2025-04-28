# CS465

**Architecture**

In the full stack project, I used Express with Handlebars to serve multi-page HTML rendered from the server, while the admin portal used Angular TypeScript as a single-page application for client-side rendering. Express HTML and JavaScript are faster with initial page loads but have to fully reload for navigation between pages, while the Angular SPA loads once and updates the content dynamically without refreshing the page.

The backend used a NoSQL MongoDB database because it offers flexible schema design, allowing rapid changes as the project evolved, and it handles hierarchical or relational data (like trip packages and user bookings) more naturally without the rigid structure of SQL databases.

**Functionality**

JSON is a text format data interchange. Its different from JavaScript because it's purely a data format without executable functions or methods. JSON acts as a standardization of speaking between the frontend and backend, allowing data, like booking details, to be easily sent from the Angular admin panel to the Node.js backend and then stored in MongoDB.

During the full stack process, I refactored repetitive UI components, like the trip listing cards and forms, into reusablewa Angular components, reducing duplicate code. Reusable UI components improved maintainability, consistency across pages, and made future updates much faster.

**Testing**

For API testing in full stack development I need to cover verifying HTTP methods (GET, POST, PUT, DELETE) and making sure endpoints correctly process or return data, while handling authentication or authorization layers adds complexity by requiring good password and hash management during tests. In my project, I tested endpoints for retrieving trip data, booking confirmations, and admin panel actions, making sure the security layers properly restricted or validated access.

**Reflection**

This course has helped me with the learning angular. I've never worked with it before and this was a nice push to get going.
