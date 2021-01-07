const CampaignModel = require('../models/campaign.model');
const htmlUtil = require('../utils/htmlUtil');
const imageUtil = require('../utils/imageUtil');

module.exports = {
    getCampaign: async (req, res) => {
        const id = req.params.id;
        try {
            const campaign = await CampaignModel.findById(id).exec();
            if (!campaign) {
                res.sendStatus(404);
            }
            campaign.description = htmlUtil.getPlainText(campaign.description);
            campaign.image = imageUtil.normalizeImagePath(campaign.image);
            res.render('campaign', campaign);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    }
};