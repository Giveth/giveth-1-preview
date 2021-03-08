const DacModel = require('../models/dac.model');
const htmlUtil = require('../utils/htmlUtil');
const imageUtil = require('../utils/imageUtil');

function normalize(dac) {
    dac.description = htmlUtil.getPlainText(dac.description);
    dac.image = imageUtil.normalizeImagePath(dac.image);
    return dac;
}

module.exports = {
    getDacById: async (req, res) => {
        const id = req.params.id;
        try {
            const dac = await DacModel.findById(id).exec();
            if (!dac) {
                res.sendStatus(404);
            }
            normalize(dac);
            return res.render('dac', dac);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    },
    getDacBySlug: async (req, res) => {
        const slug = req.params.slug;
        try {
            const dac = await DacModel.findOne({slug}).exec();
            if (!dac) {
                res.sendStatus(404);
            }
            normalize(dac);
            return res.render('dac', dac);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    }
};