const express = require('express');
const router = express.Router();
// const braintree = require('braintree');

// var gateway = braintree.connect({
//     accessToken: 'AWvFzCx3RsmRgJzxNOGS1dmNvlDh3BvljMn45P9DETijVr6ESqEX9WREp2c16dJgzE7itWoamQjYjR0H'
//   });

router.get('/', (req, res) => {
    res.send('please Donate to help us improve our project'); 
});

// app.get("/client_token", function (req, res) {
//     gateway.clientToken.generate({}, function (err, response) {
//       res.send(response.clientToken);
//     });
// });

module.exports = router;