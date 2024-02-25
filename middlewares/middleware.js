exports.logger = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};


//   exports.auth = (req, res, next) => {
//     // Implement authentication logic
//     next();
//   };
