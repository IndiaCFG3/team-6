const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const Course = require('../models/course');
router.get('/', async (req, res) => {
  try {
    const course = await Course.find({});
    res.json({ course });
  } catch (err) {
    console.error(err.messsage);
    return res.status(500).send('Server Error...');
  }
});

module.exports = router;
