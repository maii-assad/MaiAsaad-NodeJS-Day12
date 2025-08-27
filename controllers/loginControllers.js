const {UserData} = require('../models/users');
const {tokenData} = require('../models/token');
const bcrypt = require('bcrypt');


const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.json({message: "username and password are required"});
    }

    const getUser = await UserData.find({username : username})

    if (!getUser) {
        return res.status(401).json({ message: 'Invalid username!' });
    }

    const getPassword = await bcrypt.compare(password, getUser.password); // true or false
    if(!getPassword) {
        return res.status(401).json({ message: 'Invalid password!' });
    }

    const addToken = new tokenData({ username : getUser.username, email : getUser.email, role : getUser.role });
    await addToken.save();


    return res.status(200).json({ message: 'Login successful' });    
}



module.exports = {login};