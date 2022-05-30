const express = require('express');
const router = express.Router();


const PaymentController = require('../Controllers/PaymentController');
const PaymentService = require('../Services/PaymentService');
const PaymentInstance = new PaymentController(new PaymentService());


/* GET home page. */
router.get('/', function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link"
  })

});
router.get('/payment', function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res)
});

router.post('/payment', async function (req, res, next) {
  // PaymentInstance.getPaymentLink(req.body.data, res);
  // res.json(prueba);
  // res.json({
  //   linkpago: "hola",
  //   data: prueba
  // })

  // console.log(await PaymentInstance.getPaymentLink(req.body.data))
  res.json({
    linkpago: "hola",
    data: await PaymentInstance.getPaymentLink(req.body.data)
  })
});

module.exports = router;