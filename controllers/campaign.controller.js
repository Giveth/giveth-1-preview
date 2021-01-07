const CampaignModel = require('../models/campaign.model');
const htmlUtil = require('../utils/htmlUtil');

module.exports = {
    getCampaign: async (req, res) => {
        const id = req.params.id;
        try {
            const campaign = await CampaignModel.findById(id).exec();
            if (!campaign) {
                res.sendStatus(404);
            }
            campaign.description = htmlUtil.getPlainText(campaign.description);
            res.render('campaign', campaign);
        }
        catch(err) {
            res.sendStatus(500);
        }
    }
};