import express from "express"

const App = express()

App.use(express.json())
App.use(express.urlencoded({extended: true}))

export {App}