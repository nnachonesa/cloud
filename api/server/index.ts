import express from 'express'
import home from '../endpoint/home'
import upload from '../endpoint/upload'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', home)
app.post('/upload', upload)

app.listen(3000, () => {
    console.log("Listen on: 3000");
})
