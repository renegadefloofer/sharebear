const express = require("express");
require("./db/mongoose");

const User = require("./db/models/user");
const Device = require("./db/models/device");
const { append } = require("express/lib/response");

app.use(express.json());
