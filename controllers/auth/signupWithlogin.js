const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const { RequestError } = require("../../helpers/index");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const signupWithLogin = async (req, res) => {
  const { email, password, name } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    email,
    password: hashPassword,
    name,
  });

  user = await User.findOne({ email });
  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.status(201).json({
    email: result.email,
    name: result.name,
    token,
  });
};

module.exports = signupWithLogin;
