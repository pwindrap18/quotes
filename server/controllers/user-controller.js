const User = require('../models/user')
const hash = require('../helpers/bcrypt')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

module.exports = {
    register : function(req,res) {
        User.create({
            name : req.body.name,
            email : req.body.email,
            password : hash(req.body.password)
        })
        .then(function(){
            res.status(201).json({
                success: true,
                message: `Account ${req.body.name} registered`
            })
        })
        .catch(function(err){
            res.status(500).json({
                message: err.message
            })
        })
    },

    login : function(req,res) {
        User.findOne({
            email : req.body.email,
        })
        .then(function(user){
            if (!user) {
                res.status(200).json({
                    message : 'wrong email'
                })
            } else {
                let check_pass = bcrypt.compareSync(req.body.password,user.password)
                if (check_pass) {
                    
                    jwt.sign({
                        email : user.email
                    },process.env.JWT_SECRET,function(err,token){
                        res.status(201).json({
                            token : token
                        })
                    })
                } else {
                    res.status(200).json({
                        message : 'wrong password'
                    })
                }
            }
        })
        .catch(function(err){
            res.status(500).json({
                message : err.message
            })
        })
    }
}