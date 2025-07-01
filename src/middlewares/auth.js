const adminAuth = (req, res, next) => {
  console.log("Admin auth getting checked!!");
  next();
};

const userAuth = (req, res) => {
  console.log("User auth getting checked!!");
};

module.exports = { adminAuth, userAuth };
