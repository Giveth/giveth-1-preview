const config = require('../config');

module.exports = {
    normalizeImagePath: (imagePath) => {
        if (!imagePath) {
            return imagePath;
        }
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