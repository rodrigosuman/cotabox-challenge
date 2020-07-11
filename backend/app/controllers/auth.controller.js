const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../configs/auth.config.json");

const router = express.Router();

const UserSchema = require("../models/user.model");

router.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;

    if (await UserSchema.findOne({ email })) {
      return res.status(400).send({ error: "User already exists." });
    }

    const user = await UserSchema.create(req.body);

    return res.send({ user, token: generateToken({ id: user.id }) });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ error: "User not find." });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(401).send({ error: "Mismatched credentials." });

    user.password = undefined;

    return res.send({ user, token: generateToken({ id: user.id }) });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = (app) => app.use("/auth", router);
