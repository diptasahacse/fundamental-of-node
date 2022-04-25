const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors())
app.use(express.json())
const users = [
    {
        id: 1, name: "Dipta Saha", email: 'diptasaha.lpu.cse@gmail.com'
    },
    {
        id: 2, name: "Keya Saha", email: 'keya@gmail.com'
    },
    {
        id: 3, name: "Tanuruci Saha", email: 'tanuruci@gmail.com'
    },
    {
        id: 4, name: "Gouri Saha", email: 'gouri@gmail.com'
    },
    {
        id: 5, name: "Rikk Saha", email: 'rikk@gmail.com'
    },
    {
        id: 6, name: "Sreya Saha", email: 'sreya@gmail.com'
    },
    {
        id: 7, name: "Dipendra Saha", email: 'sreya@gmail.com'
    },
    {
        id: 8, name: "Dipjoy Saha", email: 'sreya@gmail.com'
    }

];
app.get('/', (req, res) => {
    res.send("Hello World Dipta Saha keya");

})
app.get('/users', (req, res) => {
    // Filter user for query parameter
    if(req.query.name){
        const searchUserName = req.query.name.toLowerCase();
        const matchedSearchList = users.filter(user => user.name.toLowerCase().includes(searchUserName))
        res.send(matchedSearchList)


    }
    else{
        // Show All user when not use query parameter
        res.send(users)

    }
})
app.get('/users/:userId', (req, res) => {

    const { userId } = req.params;
    // console.log(userId)
    const user = users.find(u => u.id === parseInt(userId))
    res.send(user)


})
// Post
app.post('/user', (req, res) => {
    console.log("Request = " , req.body)
    const user = req.body;
    user.id = users.length+1;
    users.push(user);



    res.send(user)

})


// Listener
app.listen(port, () => {
    console.log("Listening")
})