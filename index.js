const express = require('express');
const axios = require('axios');
const cors = require('cors');

const createVM = require('./createVM');
const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.post("/create-vm", async (req, res) => {
    try {
        // console.log(req.body)
        let ip = await createVM(req.body.name)
        return res.send(`Created VM: - ${ip}\n`)
        res.send(req.body)

        // axios.get('https://faas-cloud-backend.mouhammad.ml/').then((response) => {
        //     let data = response.data
        // }).catch((error) => {
        //     console.error(error)
        //     return res.status(500).send("VM Not Created")
        // })
    } catch (error) {
        console.error(error.message)
    }

})

app.listen(PORT, () => {
    console.log('Listenning on port: ', PORT)
})