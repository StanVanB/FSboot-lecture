const express = require('express');

const app = express();
const users = [{id:1, name:'John Doe', age:30}, {id:2, name:'Jane Doe', age:25}, {id:3, name:'Bob Smith', age:40}];
app.use(express.json());

app.get('/', function (req, res){
});
app.get('/users', function (req, res) {
    res.json(users);
});
app.get('/users/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});
app.post('/users', function (req, res) {
});
app.listen(3000, () => {
    //127.0.0.1 or localhost
    console.log("Server is running at http://localhost:3000");
});
