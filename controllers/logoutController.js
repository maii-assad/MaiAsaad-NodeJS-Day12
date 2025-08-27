const {UserData} = require('../models/users')
const {tokenData} = require('../models/token');


const logout = async (req, res) => {
    try{
        const {username} = req.body;
        if (!username) {
            return res.json({message: "password are required"});
       }

        const checkToken = await tokenData.findOne({username : username});
        if (!checkToken) {
            return res.status(401).json({ message: 'User not logged in' });
       }

        await tokenData.deleteOne({username : username});
        return res.status(200).json({ message: 'Logout successful' });
    }
    catch(error){
        return res.status(500).json({ message: 'Internal server error' });
    }
    
}    

module.exports = {logout};