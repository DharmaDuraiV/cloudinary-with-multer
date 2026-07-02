exports.createUser = async (req, res) => {
  console.log(req.file);
  res.status(201).json({
    status: "success",
  });
};
