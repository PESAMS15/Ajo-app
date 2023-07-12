const express = require("express")
const { createThrift, getThriftById } = require("../controllers/thriftControllers")

const thriftRouter = express.Router()

thriftRouter.post("/create", createThrift)
thriftRouter.get("/thrift/:id", getThriftById)

module.exports = thriftRouter
