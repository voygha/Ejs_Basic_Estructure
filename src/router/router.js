const express= require('express');
const router= express.Router();

//use res.render to load up an ejs view file
//index page
router.get('/', function(req,res)
{
    res.render('pages/index');
})
//about page
router.get('/about', function(req,res)
{
    res.render('pages/about');
})
module.exports= router;