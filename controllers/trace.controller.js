const TraceModel = require('../models/trace.model');
const htmlUtil = require('../utils/htmlUtil');
const imageUtil = require('../utils/imageUtil');

function normalize(trace) {
    trace.description = htmlUtil.getPlainText(trace.description);
    trace.image = imageUtil.normalizeImagePath(trace.image);
    return trace;
}

module.exports = {
    getTraceById: async (req, res) => {
        const id = req.params.id;
        try {
            const trace = await TraceModel.findById(id).exec();
            if (!trace) {
                res.sendStatus(404);
            }
            normalize(trace);
            return res.render('trace', trace);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    },
    getTraceBySlug: async (req, res) => {
        const slug = req.params.slug;
        try {
            const trace = await TraceModel.findOne({slug}).exec();
            if (!trace) {
                res.sendStatus(404);
            }
            normalize(trace);
            return res.render('trace', trace);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    }
};