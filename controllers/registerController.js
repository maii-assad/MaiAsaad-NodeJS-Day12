const {UserData} = require('../models/users');
const {tokenData} = require('../models/token');
const bcrypt = require('bcrypt');


const register = async (req, res) => {
    const {firstname, lastname, username, email, password, role} = req.body;

    if(!firstname || !lastname || !username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if(!role){
        role = "user"
    }

    const CheckUser = await UserData.findOne({ username: username });

    if(CheckUser) {
        return res.status(409).json({ message: 'username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);// store user with hashed password
    const addUser = new UserData({ 
        firstname,
        lastname,
        username,
        role,
        email,
        password : hashedPassword 
    });

    const addToken = new tokenData({ username , email , role  });
    await addUser.save(); 
    await addToken.save();
    return res.status(201).json({ message: 'User registered successfully' });
}

module.exports = {register};