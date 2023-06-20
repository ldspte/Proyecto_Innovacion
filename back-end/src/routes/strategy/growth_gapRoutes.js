const express = require('express');
const growth_gapRouter = express.Router();
const {growthput, growthget } = require('../../controllers/strategy_controllers/growth_controllers');



growth_gapRouter.get('/growth_gap', (req, res) =>{
    try {
        const values = growthget();
        return res.status(200).json(values);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

growth_gapRouter.put('/growth_gap', (req, res) =>{
    try {
        const { sales, utility } = req.body;


        const values = growthput(sales, utility);
        if (values.error) throw Error(values.error);
        return res.status(200).json(values);
    } catch (error) {
        return res.status(404).send(error.message);
    }
});







module.exports = growth_gapRouter;