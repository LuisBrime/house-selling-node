'use strict';

var rp = require('request-promise');

exports.getHistorian = function(req, res) {
    console.log('Loading all transactions...');
    
    var url = 'http://localhost:3000/api/system/historian';
    
    var result = [];
    
    var options = { uri: url, json: true };
    
    rp(options).then( (resp) => {
        console.log('Processing Success.');
        
        resp.sort((a,b) => {
            return a.transactionTimestamp < b.transactionTimestamp ? 1 : -1;
        });
        
        result = resp;
    })
    .catch( (err) => {
        console.error(err);
    })
    .finally( () => {
        res.render('index.html', {
            title: 'House Selling Network - Historian',
            items: 'ALL TRANSACTIONS',
            result: result,
            type: 'tx'
        });
    });
};

exports.getHouses = function(req, res) {
    console.log('Loading all houses...');
    
    var url = 'http://localhost:3000/api/House';
    
    var result = [];
    
    var options = { uri: url, json: true };
    
    rp(options).then( (resp) => {
        console.log('Processing Success.');
        
        resp.sort((a,b) => {
            return a.price < b.price ? 1 : -1;
        });
        
        result = resp;
    })
    .catch( (err) => {
        console.error(err);
    })
    .finally( () => {
        res.render('index.html', {
            title: 'House Selling Network - Houses',
            items: 'HOUSES',
            result: result,
            type: 'asset'
        });
    });
};

exports.getPersons = function(req, res) {
    console.log('Loading all persons...');
    
    var url = 'http://localhost:3000/api/Person';
    
    var result = [];
    
    var options = { uri: url, json: true };
    
    rp(options).then( (resp) => {
        console.log('Processing Success.');
        
        resp.sort((a,b) => {
            return a.email < b.email ? 1 : -1;           
        });
        
        result = resp;
    })
    .catch( (err) => {
        console.error(err);
    })
    .finally( () => {
       res.render('index.html', {
           title: 'House Selling Network - Persons',
           items: 'PERSONS',
           result: result,
           type: 'participant'
       }); 
    });
};

exports.getRegisterForSale = function(req, res) {
    console.log('Loading RegisterForSale txns...');
    
    var url = 'http://localhost:3000/api/RegisterForSale';
    
    var result = [];
    
    var options = { uri: url, json: true };
    
    rp(options).then( (resp) => {
        console.log('Processing Success.');
        
        resp.sort((a,b) => {
            return a.timestamp < b.timestamp ? 1 : -1;
        });
        
        result = resp;
    })
    .catch( (err) => {
        console.error(err);
    })
    .finally( () => {
        res.render('index.html', {
            title: 'House Selling Network - Register4Sale',
            items: 'REGISTER FOR SALE TXNS',
            result: result,
            type: 'tx'
        });
    });
};

exports.getAgreements = function(req, res) {
    console.log('Loading Agreements...');
    
    var url = 'http://localhost:3000/api/SaleAgreement';
    
    var result = [];
    
    var options = { uri: url, json: true };
    
    rp(options).then( (resp) => {
        console.log('Processing Success.');
        
        result = resp;
    })
    .catch( (err) => {
        console.error(err);
    })
    .finally( () => {
        res.render('index.html', {
            title: 'House Selling Network - Agreements',
            items: 'SALE AGREEMENTS',
            result: result,
            type: 'asset'
        });
    });
};

exports.getSales = function(req, res) {
    console.log('Loading Sales...');
    
    var url = 'http://localhost:3000/api/SaleHouse';
    
    var result = [];
    
    var options = { uri: url, json: true };
    
    rp(options).then( (resp) => {
        console.log('Processing Success.');
        
        resp.sort((a,b) => {
            return a.timestamp < b.timestamp ? 1 : -1;
        });
        
        result = resp;
    })
    .catch( (err) => {
        console.error(err);
    })
    .finally( () => {
        res.render('index.html', {
            title: 'House Selling Network - Sales',
            items: 'HOUSE SALES',
            result: result,
            type: 'tx'
        });
    });
};