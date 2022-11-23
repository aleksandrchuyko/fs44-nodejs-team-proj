const currentUser = async (req, res) => {
  const { name, email, balance } = req.user;
  res.status(200).json({
    user: {
      email,
      balance,
      name,
    },
  });
};

module.exports = currentUser;
