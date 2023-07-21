const express = require("express")
const { createThrift, getThriftById, getUserThrifts } = require("../controllers/thriftControllers")

const thriftRouter = express.Router()

thriftRouter.post("/create", createThrift)
thriftRouter.get("/thrift/:id", getThriftById)
thriftRouter.post("/allthrifts", getUserThrifts)

module.exports = thriftRouter
