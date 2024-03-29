const { Schema } = require("mongoose");

const Comment = require("./Comment");
const Rating = require("./Rating");
const Availability = require("./Availability");

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
    availability: {type : Availability , default : {from : "monthly", to : "friday"}},
    comments: {
      type: [Comment],
      default: [],
    },
    album: {
      type: [String],
      default: [],
    },
  });
  module.exports = Service;