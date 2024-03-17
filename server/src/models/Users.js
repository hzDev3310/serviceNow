const { model, Schema } = require("mongoose");

const Comment = new Schema({
  userImage: String,
  userName: String,
  content: String,
});

const Rating = new Schema({
  total: {
    type: Number,
    default: 0,
  },
  numberOfUsers: {
    type: Number,
    default: 0,
  },
  average: {
    type: Number,
    default: function () {
      return this.total / this.numberOfUsers || 0;
    },
  },
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
  latitude: Number,
  longitude: Number,
  cityName: String,
});

const Service = new Schema({
  certification: {
    type: String,
    default: "",
  },
  serviceName: {
    type: String,
    required: true,
  },
  rating: {
    type: Rating,
    default: {
      total: 0,
      numberOfUsers: 0,
      average: 0,
    },
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
  },
  phoneNumber: {
    type: PhoneNumber,
    required: true,
  },
  password: {
    type: String

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
  email: {
    type: Mail,
  },
  service: {
    type: Service,
  },
});

const userModel = model("User", userSchema);
module.exports = userModel;
