const currentUser = async (req, res) => {
  const { firstName, email } = req.user;
  res.status(200).json({
    firstName,
    email,
  });
};

module.exports = currentUser;
