const express = require('express');
const axios = require('axios');
const cors = require('cors');

const createVM = require('./createVM');
const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.get("/create-vm", (req, res) => {
    axios.get('https://faas-cloud-backend.mouhammad.ml/').then((response) => {
        return res.send("Created VM: ", response[response.length - 1])
    }).catch((error) => {
        console.error(error)
        return res.send("VM Not Created: ", error.message)
    })
})

app.listen(PORT, () => {
    console.log('Listenning on port: ', PORT)
})