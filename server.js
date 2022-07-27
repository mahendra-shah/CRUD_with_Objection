const express = require('express')
const app = express()
const UserCrud = require('./services/user.services')
const service = new UserCrud()
const valid = require('./validator/joi.validator')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ msg: "I'm working" })
})


// Create
app.post('/create', valid, async (req, res) => {
    const { name, email, password, age } = req.body
    try {
        const result = await service.create({ name, email, password, age })
        if (!result) {
            res.send('already exists')
        }
        res.send(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Read by id
app.get('/read/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await service.read(id)
        if (!result.error){
            return res.send(result)
        }
        res.status(404).json({msg: 'data not found'})

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Update by id
app.put('/update/:id', valid, async (req, res) => {
    const id = req.params.id
    try {
        const result = await service.update(id, req.body)
        if (!result.error){
            return res.send(result)
        }
        res.status(404).json({msg: 'data not found'})

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Delete by id
app.delete('/delete/:id', valid, async (req, res) => {
    const id = req.params.id
    try {
        const result = await service.update(id)
        if (!result.error){
            return res.send(result)
        }
        res.status(404).json({msg: 'data not found'})

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


app.listen(5000, () => {
    console.log('http://localhost:5000');
})