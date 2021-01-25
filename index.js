const express = require('express');
const axios = require('axios');
const cors = require('cors');

const createVM = require('./createVM');
const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.get("/create-vm", (req, res) => {
    try {
        createVM("VM Bou Beess")
        axios.get('https://faas-cloud-backend.mouhammad.ml/').then((response) => {
            let data = response.data
            return res.send(`Created VM: ${data[data.length - 1].name}\n`)
        }).catch((error) => {
            console.error(error)
            return res.status(500).send("VM Not Created")
        })
    } catch (error) {
        console.error(error.message)
    }

})

app.listen(PORT, () => {
    console.log('Listenning on port: ', PORT)
})