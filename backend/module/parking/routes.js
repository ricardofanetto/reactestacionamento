const express = require('express')
const router = express.Router()
const { all, findById, save, remove } = require('./controller')

router.get('/', all)
router.get('/:id', findById)
router.post('/', save)
router.put('/:id', save)
router.delete('/:id', remove)

module.exports = router