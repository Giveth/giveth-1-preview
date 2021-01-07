const DacModel = require('../models/dac.model');
const htmlUtil = require('../utils/htmlUtil');
const imageUtil = require('../utils/imageUtil');

module.exports = {
    getDac: async (req, res) => {
        const id = req.params.id;
        try {
            const dac = await DacModel.findById(id).exec();
            if (!dac) {
                res.sendStatus(404);
            }
            dac.description = htmlUtil.getPlainText(dac.description);
            dac.image = imageUtil.normalizeImagePath(dac.image);
            res.render('dac', dac);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    }
};