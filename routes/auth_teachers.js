const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const Teacher = require('../models/Teacher');
const auth = require('../middleware/auth');
//@route GET api/auth
//@desc Get logged in user
//@access Private
router.get('/', auth, async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.teacher.id).select('-password');
    res.json({ teacher });
  } catch (err) {
    console.error(err.messsage);
    return res.status(500).send('Server Error...');
  }
});
//@route POST api/auth
//@desc Auth teacher and get token
//@access Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let teacher = await Teacher.findOne({ email });
      console.log(teacher);
      if (!teacher) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
      const isMatch = await bcrypt.compare(password, teacher.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
      const payload = {
        teacher: {
          id: teacher.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error ..');
    }
  }
);
module.exports = router;
