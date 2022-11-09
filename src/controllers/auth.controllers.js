require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Users, sequelize } = require('../models')

const register = async (req, res, next) => {
    try {
        const { name, password } = req.body
        
        const isUserExist = await Users.findOne({
            where: {
                name: name
            },
            attributes: ['id']
        })

        if (isUserExist) {
            return res.status(400).json({
                message: 'Name already exist'
            })
        }

        const hashPassword = bcrypt.hashSync(password, 12)
        const user = await Users.create({
            name,
            password: hashPassword
        }) 

        return res.status(200).json({
            code: 200,
            message: "Success create user",
            data: {
                name: user.name
            }
        })
    } catch (error){
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { name, password } = req.body
        const user = await Users.findOne({
            where: { name }
        })
        
        if(!user) {
            return res.status(404).json({
                message: 'User not exist'
            })
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(404).json ({
                message: 'Password not valid'
            })
        }

        const token = jwt.sign(
            { name: user.name, user_id: user.id }, 
            process.env.JWT_SECRET, 
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            })

        return res.status(200).json({
            message: 'Login succses',
            data: {
                token,
                name: user,name
            }
        })
    } catch (error) {
        next(error)
        
    }
}

module.exports ={
    register,
    login
}