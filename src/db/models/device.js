const mongoose = require("mongoose");

const allowedDeviceTypes = ["IWR", "Comms Adapter", "GMR"];

const Device = mongoose.model("Device", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  deviceType: {
    type: String,
    required: true,
    trim: true,
    validate: (value) => {
      if (!allowedDeviceTypes.includes(value)) {
        throw new Error("device type incorrect");
      }
    },
  },
  currentUsage: {},
  usageLog: {},
});
