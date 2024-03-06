const { model, Schema } = require("mongoose");

const Comment = new Schema({
  userImage: String,
  userName: String,
  content: String,
});

const PhoneNumber = new Schema({
  number: String,
  code: Number,
  isVerifiate: {
    type: Boolean,
    default: false,
  },
});

const Mail = new Schema({
  emailAddress: String,
  code: Number,
  isVerifiate: {
    type: Boolean,
    default: false,
  },
});

const Availability = new Schema({
  isAvailable: {
    type: Boolean,
    default: true,
  },
  from: Number,
  to: Number,
});
const Location = new Schema({
  city: String,
  citys: [String],
});

const Service = new Schema({
  email: {
    type: Mail,
    required: true,
  },
  certification: {
    type: String,
    default: "",
  },
  serviceName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numberOfUsers: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "",
  },
  experience: Number,
  availability: {
    type: Availability,
    default: {
      from: 1,
      to: 7,
    },
    required: false,
  },
  comments: {
    type: [Comment],
    default: [],
  },
  album: {
    type: [String],
    default: [],
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: PhoneNumber,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilPic: {
    type: String,
    default: "",
  },
  location: {
    type: Location,
  },
  isProvider: {
    type: Boolean,
    default: false,
  },
  service: {
    type: Service,
  },
});

const userModel = model("User", userSchema);
module.exports = userModel;
