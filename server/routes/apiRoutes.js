const { userDBHandler } = require("../controllers/userDBHandler");
const { verifyJWT } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/user", verifyJWT, userDBHandler);

module.exports = router;