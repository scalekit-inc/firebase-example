const admin = require("../config/firebase-config");
class Middleware {
  async decodeToken(req, res, next) {
    console.log(req.headers);
    const token = req.headers.authorization ? split(" ")[1] : null;
    if (!token) {
      return res.json({ message: "Unauthorized" });
    }
    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      if (decodeValue) {
        console.log(decodeValue);
        return next();
      }
      return res.json({ message: "Unauthorized" });
    } catch (e) {
      return res.json({ message: "Internal Error" });
    }
  }
}
module.exports = new Middleware();
