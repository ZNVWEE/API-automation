const newman = require('newman'); 

newman.run({
    collection: require('../Collection/iwan.postman_collection.json'),
    environment: require('../Collection/iwan-env.json'), 
    reporters: 'cli',  
    timeoutRequest: 1000,  
}, (err, summary) => {
    if (err) { 
        throw err; 
    }
    console.log('Test run complete!');
    console.log('Summary:', summary);
});