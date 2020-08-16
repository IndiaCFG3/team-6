const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config');

//@route POST api/users
//@desc Register a user
//@access Public
router.post('/',
    [
    check('name','Please add a name')
    .not()
    .isEmpty(),
    check('email','Please include a Valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({
        min:6
    })
    ],
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors:errors.array()});
        }
        const {name,email,password} = req.body;
        
        try {
            let user = await User.findOne({email});
            if(user){
                return res.status(400).json({msg:'User already exists'})
            }

            user = new User({
                name,
                email,
                password                //same as name:name,email:email  //ES6
            })

            //before storing to database encrypt
            const salt = await bcrypt.genSalt(10)   //RETURNS PROMISE
            //hashing
            user.password = await bcrypt.hash(password, salt);          //RETURNS PROMISE
            await user.save();
            
            //Create payload for sending token
            const payload = {
                user: {
                    id:user.id
                }
            };
            jwt.sign(payload, config.get('jwtSecret'),{                             //parameters are payload,secret,options,callback with err and token
                expiresIn: 360000
            },(err,token)=>{                    
                if(err) throw err;
                res.json({token});
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
    }
);

module.exports = router;
