const router = require("express").Router({ mergeParams: true });
const controller = require("./titanDef.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");