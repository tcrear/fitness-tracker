const router = require('express').Router()
const path = require("path")

router.get('/exercise', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.get('/stats', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

router.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;