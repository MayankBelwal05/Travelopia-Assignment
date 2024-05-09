const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    const decoded = jwt.verify(token, "masai");
    if (decoded) {

      req.id = decoded.userId;
      // req.body.authors = decoded.authors;

      // console.log(req.body.userId)
      console.log(req.id)
      console.log(req)
      next();
    } else {
      res.send({ msg: "you are not authorized 1" });
    }
  } else {
    res.send({ msg: "you are not authorized 2" });
  }
};
module.exports = { auth };
// ...