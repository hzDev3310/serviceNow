const code = require("../services/verificationCode");
const userModel = require("../models/Users");


const emproveAccount = async (req, res) => {
  try {
    const { userId } = req.params;
    const {
      email,
      certification,
      serviceName,
      description,
      experience,
     
    } = req.body;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const verifiedEmail = await userModel.findOne({
      "service.email.emailAddress": email,
    });
    if (verifiedEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const Email = {
      emailAddress: email,
      code: code()
    };
    user.service = {
      email: Email,
      certification,
      serviceName,
      description,
      experience,
   
    };

    await user.save();

    res.json({ message: "Service added successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error " + error });
  }
};

module.exports = emproveAccount;
