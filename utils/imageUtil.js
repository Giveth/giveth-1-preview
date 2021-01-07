const config = require('../config');

module.exports = {
    normalizeImagePath: (imagePath) => {
        let ipfsBasePath = config.ipfsBasePath;
        if (ipfsBasePath[ipfsBasePath.length - 1] != '/') {
            ipfsBasePath += '/';
        }
        if (imagePath.indexOf('/ipfs/') === 0) {
            return ipfsBasePath + imagePath;
        }
        else {
            return imagePath;
        }
    }
}