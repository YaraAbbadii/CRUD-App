// const express = require('express')
// const app = express();

// // middleware for using json
// app.use(express.json());

// const users = []

// // HTTP METHODS:
// // // GET
// app.get('/', (req, res) => {
//     res.send("welcome to home")
// })

// app.get('/users', (req, res) => {
//     if (users.length == 0) {
//         res.status(404).send("no users found ")
//         return
//     } 
//     res.status(200).send(users)
// })

// // POST
// app.post('/users', (req, res) => {
//     const user = req.body;
//     const findUser = users.find((x) => x.id === user.id)
//     if (findUser) {
//         res.status(400).send("User already exists!");
//         return
//     }
//     users.push(user)
//     res.status(201).send('created!')
// })
// // PUT
// // DELETE

// app.delete('/users/:id', (req, res) => {
//     const { id } = req.params
//     const findUserIndex = users.findIndex((x) => x.id === id)
//     if (findUserIndex == -1) {
//         res.status(400).send("User not found!")
//         return
//     }
//     users.splice(findUserIndex, 1)
//     res.status(200).send("User deleted successfully!")
// })

// app.listen(3000, () => {
//     console.log("start listening on port 3000")
// })