const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Get All
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get One
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

// Create One
router.post('/', uniqueEmail, async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update One
router.patch('/:id', [getUser, uniqueEmail], async (req, res) => {
  if (req.body.email) res.user.email = req.body.email
  if (req.body.password) res.user.password = req.body.password
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete One
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: `Deleted User with id: ${req.params.id}` })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Middleware to get User by id
async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: `No user with id: ${req.params.id}` })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.user = user
  next() // Moves to next Middleware or Request
}

// Middleware to check if email does not exists in database
async function uniqueEmail(req, res, next) {
  let email = req.body.email
  if (!req.body.email) {
    next()
    return
  }
  try {
    const user = await User.findOne({ email: email }).exec()
    if (user) {
      return res.status(400).json({ message: `${email} already exists in database.` })
    } else {
      next()
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = router
