const MilestoneModel = require('../models/milestone.model');
const htmlUtil = require('../utils/htmlUtil');

module.exports = {
    getMilestone: async (req, res) => {
        const id = req.params.id;
        try {
            const milestone = await MilestoneModel.findById(id).exec();
            if (!milestone) {
                res.sendStatus(404);
            }
            milestone.description = htmlUtil.getPlainText(milestone.description);
            res.render('milestone', milestone);
        }
        catch(err) {
            res.sendStatus(500);
        }
    }
};