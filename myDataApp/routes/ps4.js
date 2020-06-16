const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/coronavirusAPI')

router.route('/ps4')
    .post(async (req, res, next) => {
          let result = await fetch(CONFIG.url+'?countryTotal='+req.body.country);
          let stats = await result.json();
          res.render('index',{
            country: stats.countrydata[0].info.title,
            cases: stats.countrydata[0].total_cases,
            deaths: stats.countrydata[0].total_deaths
        })
    })
module.exports = router;
