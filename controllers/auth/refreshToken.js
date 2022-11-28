const { User } = require("../../models/user");
const { Session } = require("../../models/session");
const { RequestError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_REFRESH_KEY, JWT_ACCESS_KEY } = process.env;

const refreshToken = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, "Email or password is wrong");
  }

  /*   const payload = {
    id: user._id,
  }; */

  /* const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" }); */

  const newSession = await Session.create({
    uid: user._id,
  });

  const accessToken = jwt.sign(
    { uid: user._id, sid: newSession._id },
    JWT_ACCESS_KEY,
    {
      expiresIn: "2h",
    }
  );
  const refreshToken = jwt.sign(
    { uid: user._id, sid: newSession._id },
    JWT_REFRESH_KEY,
    {
      expiresIn: "15d",
    }
  );

  /*  const accessToken = jwt.sign(payload, JWT_ACCESS_KEY, { expiresIn: "2h" });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_KEY, { expiresIn: "15d" });
  await Token.create({ refreshToken }); */

  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });
  res.json({
    data: {
      sid: newSession._id,
      accessToken,
      refreshToken,
    },
    user: {
      balance: user.balance,
      name: user.name,
    },
  });
};

module.exports = refreshToken;
