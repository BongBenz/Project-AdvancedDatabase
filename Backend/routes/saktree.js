const express = require('express');

const { check } = require('express-validator')
const router = express.Router();

const paymentController = require('../controllers/payment');
const orderController = require('../controllers/order');
const userAccountController = require('../controllers/userAccount');

// /admin/add-Payment => GET
router.get('/searchpayment', paymentController.getSearchPayment);
router.get('/searchorder', orderController.getSearchOrder);
router.get('/searchuserAccount', userAccountController.getSearchUserAccount);

router.post('/insertpayment', [
    check('date_time').trim().not().isEmpty().withMessage("Payment name is required"),
    check('price').isFloat({ gt: 0 }).withMessage("greater than zero"),
    check('receipt').trim().not().isEmpty().withMessage("Payment name is required"),
    check('status').trim().not().isEmpty().withMessage("Payment name is required"),
], paymentController.postAddPayment);
router.post('/insertorder', [
    check('users_id').not().isEmpty().withMessage("empty"),
    check('product_id').not().isEmpty().withMessage("empty"),
    check('date').trim().not().isEmpty().withMessage("Payment name is required")
], orderController.postAddOrder);
router.post('/insertuserAccount', [
    check('password').trim().not().isEmpty().withMessage("Payment name is required"),
    check('email').trim().not().isEmpty().withMessage("Payment name is required"),
    check('firstname').trim().not().isEmpty().withMessage("Payment name is required"),
    check('lastname').trim().not().isEmpty().withMessage("Payment name is required"),
    check('phone').trim().not().isEmpty().withMessage("Payment name is required"),
    check('address').trim().not().isEmpty().withMessage("Payment name is required"),
    check('cart').trim().not().isEmpty().withMessage("Payment name is required")
], userAccountController.postAddUserAccount);

router.post('/updatepayment', [
    check('payment_id').not().isEmpty().withMessage("empty"),
    check('date_time').trim().not().isEmpty().withMessage("Payment name is required"),
    check('price').isFloat({ gt: 0 }).withMessage("greater than zero"),
    check('receipt').trim().not().isEmpty().withMessage("Payment name is required"),
    check('status').trim().not().isEmpty().withMessage("Payment name is required"),
], paymentController.postUpdatePayment);
router.post('/updateorder', [
    check('order_id').not().isEmpty().withMessage("empty"),
    check('date').trim().not().isEmpty().withMessage("Payment name is required"),
    check('users_id').not().isEmpty().withMessage("empty"),
    check('product_id').not().isEmpty().withMessage("empty")
], orderController.postUpdateOrder);
router.post('/updateuserAccount', [
    check('userAccount_id').not().isEmpty().withMessage("empty"),
    check('password').trim().not().isEmpty().withMessage("Payment name is required"),
    check('email').trim().not().isEmpty().withMessage("Payment name is required"),
    check('firstname').trim().not().isEmpty().withMessage("Payment name is required"),
    check('lastname').trim().not().isEmpty().withMessage("Payment name is required"),
    check('phone').trim().not().isEmpty().withMessage("Payment name is required"),
    check('address').trim().not().isEmpty().withMessage("Payment name is required"),
    check('cart').trim().not().isEmpty().withMessage("Payment name is required")
], userAccountController.postUpdateUserAccount);

router.get('/delete/:payment_id', paymentController.getDeletePayment);
router.get('/delete/:order_id', orderController.getDeleteOrder);
router.get('/delete/:userAccount_id', userAccountController.getDeleteUserAccount);

router.get('/update/:payment_id', paymentController.getUpdatePayment);
router.get('/update/:order_id', orderController.getUpdateOrder);
router.get('/update/:userAccount_id', userAccountController.getUpdateUserAccount);

exports.routes = router;