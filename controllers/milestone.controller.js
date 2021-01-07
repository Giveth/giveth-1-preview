const MilestoneModel = require('../models/milestone.model');
const htmlUtil = require('../utils/htmlUtil');
const imageUtil = require('../utils/imageUtil');

module.exports = {
    getMilestone: async (req, res) => {
        const id = req.params.id;
        try {
            const milestone = await MilestoneModel.findById(id).exec();
            if (!milestone) {
                res.sendStatus(404);
            }
            milestone.description = htmlUtil.getPlainText(milestone.description);
            milestone.image = imageUtil.normalizeImagePath(milestone.image);
            res.render('milestone', milestone);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    }
};