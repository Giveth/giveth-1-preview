module.exports = {
    getHome: async (req, res) => {
        res.render('home', {
            title: 'Giveth Dapp',
            description: 'Building the Future of Giving, with You.',
            image: 'https://d33wubrfki0l68.cloudfront.net/images/2160b98c14dfb61a2cca879d36489c50ea44b049/hero.jpg'
        });
    }
};