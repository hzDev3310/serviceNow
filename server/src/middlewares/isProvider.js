const userModel = require("../models/Users");

const isProvider = async (req, res, next) => {
  try {
    const { phoneNumber, code } = req.body;

    if (!phoneNumber) {
      return res
        .status(400)
        .json({ message: "Phone number and code are required" });
    }

    const user = await userModel.findOne({ "phoneNumber.number": phoneNumber });

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    if (!user.isProvider) {
      if (user.phoneNumber.isVerifiate) {
        next();
        return null;
      } else if (!code) {
        return res.status(400).json({ message: "Code is required" });
      } else if (user.phoneNumber.code === code) {
        await userModel.findOneAndUpdate(
          { "phoneNumber.number": phoneNumber },
          { $set: { "phoneNumber.isVerifiate": true } }
        );
        next();
        return res
          .status(200)
          .json({ message: "Phone number verified successfully" });
      } else {
        return res.status(400).json({ message: "incorrect code" });
      }
    } else {
      if (user.email.isVerifiate) {
        next();
        return null;
      } else if (!code) {
        return res.status(400).json({ message: "Code is required" });
      } else if (user.email.code === code) {
        await userModel.findOneAndUpdate(
          { "phoneNumber.number": phoneNumber },
          { $set: { "email.isVerifiate": true } }
        );
        next();
        return res.status(200).json({ message: "Email verified successfully" });
      } else {
        return res.status(400).json({ message: "Email not verified" });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = isProvider;
