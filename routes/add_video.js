const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const config = require('config');

const Video = require('../models/Video');
const Course = require('../models/course');
router.post(
    '/',
    [
      check('c_id', 'Please enter valid c_id').not().isEmpty(),
      check('video', 'Please include a video link').not().isEmpty(),
      
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const { video,c_id } = req.body;
     
      try {
        
        
       
        videos = new Video({
         
          video,
          c_id,
          
          
        });
        // const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(password, salt);
        await videos.save();
        const payload = {

            id: videos.c_id,
          
        };
            res.json({ token });
          
        
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
 
  module.exports = router;
  