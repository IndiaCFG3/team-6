const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const Course = require('../models/course');
router.post(
    '/',
    [
      check('c_name', 'Please add name').not().isEmpty(),
      check('c_id', 'Please add name').not().isEmpty(),
      check('description', 'Please include a valid description').not().isEmpty(),
      check('author', 'Please add author').not().isEmpty(),
      
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { c_name,c_id, description , author,videos } = req.body;

      try {
        let course = await Course.findOne({ c_id });
        if (course) {
          return res.status(400).json({ msg: 'User already exists' });
        }
        
        
        course = new Course({
          c_name,
          c_id,
          description,
          author,
          
        });
        // const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(password, salt);
        await course.save();
        const payload = {
          
            id: course.c_id,
        };
        res.json(payload);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
 
  module.exports = router;
  