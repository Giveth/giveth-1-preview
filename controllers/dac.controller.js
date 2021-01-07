const DacModel = require('../models/dac.model');
const htmlUtil = require('../utils/htmlUtil');

module.exports = {
    getDac: async (req, res) => {
        const id = req.params.id;
        try {
            const dac = await DacModel.findById(id).exec();
            if (!dac) {
                res.sendStatus(404);
            }
            dac.description = htmlUtil.getPlainText(dac.description);
            res.render('dac', dac);
        }
        catch(err) {
            res.sendStatus(500);
        }
    }
};