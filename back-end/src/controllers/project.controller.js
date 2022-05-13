<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const Project = require('../models/project.model');
const protect = require("../middlewares/protect");

router.get('/', protect, async(req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +re.query.size || 3;
        const offset = (page - 1) * size;
        const response = await Project.find().skip(offset).limit(size).lean().exec();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

=======
const express = require("express");
const router = express.Router();
const Project = require('../models/project.model');
// const protect = require("../middlewares/protect");

router.get('/', async(req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 3;
        const offset = (page - 1) * size;
        const response = await Project.find().skip(offset).limit(size).lean().exec();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

>>>>>>> 8043242aae90293efbf41190a5a38d5728f806f6
