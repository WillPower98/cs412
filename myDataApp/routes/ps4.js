const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/coronavirusAPI')

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const existsAsync = promisify(client.exists).bind(client);
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.flushdb((err, success) => {
    if (err) { throw new Error(err)}
});

router.route('/')
    .post(async (req, res, next) => {
        let countryCode = req.body.country
        let match = await existsAsync(countryCode);

        //if already cached
        if(match){
            let stats = await getAsync(countryCode);
            stats = JSON.parse(stats)
            let values = {
                countryName: stats.countrydata[0].info.title,
                caseNumbers: stats.countrydata[0].total_cases,
                deaths: stats.countrydata[0].total_deaths,
                cached: true
            }
            res.send(values);

        } else { 
            //if not cached yet
            let result = await fetch(CONFIG.url+'?countryTotal='+countryCode);
            let stats = await result.json();
            
            await setAsync(countryCode, JSON.stringify(stats), "ex", 10) 
    
    
            let values = {
                countryName: stats.countrydata[0].info.title,
                caseNumbers: stats.countrydata[0].total_cases,
                deaths: stats.countrydata[0].total_deaths,
                cached: false
            }
            res.send(values);
        }
    })

returned_json = 

module.exports = router;
