const express = require("express")
const { createThrift, getThriftById, getUserThrifts, joinThrift, verifyPayments } = require("../controllers/thriftControllers")

const thriftRouter = express.Router()

thriftRouter.post("/create", createThrift)
thriftRouter.post("/join", joinThrift)
thriftRouter.get("/thrift/:id", getThriftById)
thriftRouter.post("/allthrifts", getUserThrifts)
thriftRouter.post("/add", verifyPayments)

module.exports = thriftRouter
