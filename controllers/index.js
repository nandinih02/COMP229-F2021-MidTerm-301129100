//COMP229-MidTerm
// Nandini Hariprasad
// 301129100
// 28/10/2021

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
