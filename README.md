# nodejs-demo-user-service
scaler workshop assignment - build api doing CRUD operation using nodejs and mongoDB

## Folder structure

Created below folder structure to group related code:
* `index.js` for main application code.
* `routes` folder for route definitions.
  * Create separate file for each route or group of related routes 
* `controllers` folder for controller functions handling routes.
  * Keep controllers thin, focusing on request handling and delegating tasks to services.
* `services` folder for business logic services.
  * Services contain reusable logic, independent of routes and controllers.
* `models` folder for database models 
  * Define your database schema here
* `middleware` folder for custom middleware functions (if applicable).
* `config` folder for configuration files (if applicable).

## Reference Videos
https://www.youtube.com/watch?v=9OfL9H6AmhQ

