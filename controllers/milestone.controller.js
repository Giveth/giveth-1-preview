const MilestoneModel = require('../models/milestone.model');
const htmlUtil = require('../utils/htmlUtil');
const imageUtil = require('../utils/imageUtil');

function normalize(milestone) {
    milestone.description = htmlUtil.getPlainText(milestone.description);
    milestone.image = imageUtil.normalizeImagePath(milestone.image);
    return milestone;
}

module.exports = {
    getMilestoneById: async (req, res) => {
        const id = req.params.id;
        try {
            const milestone = await MilestoneModel.findById(id).exec();
            if (!milestone) {
                res.sendStatus(404);
            }
            normalize(milestone);
            return res.render('milestone', milestone);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    },
    getMilestoneBySlug: async (req, res) => {
        const slug = req.params.slug;
        try {
            const milestone = await MilestoneModel.findOne({slug}).exec();
            if (!milestone) {
                res.sendStatus(404);
            }
            normalize(milestone);
            return res.render('milestone', milestone);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    }
};