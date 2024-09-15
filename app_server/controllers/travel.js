/* GET travel view */
travel = (req,res) =>{
    res.render('travel', {title: 'Travlr Getaways'});
};

module.exports = {
    travel
};