window.addEventListener('load', () => {
    registerSW();
    const express = require('express');
    const router = express.Router();
    router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});
module.exports = router;    
});

async function registerSW(){
    if ('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js');
        } catch(e){
            console.log('SW registration failed');
        }
    }
}
