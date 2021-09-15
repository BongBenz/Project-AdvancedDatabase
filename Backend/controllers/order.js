const { validationResult } = require('express-validator')

const mongodb = require('mongodb');
const Order = require('../models/order');
const ObjectId = mongodb.ObjectId;
var mongoose = require('mongoose');

exports.getSearchOrder = (req, res, next) => {
    Order.fetchAll()
        .then(orders => {
            res.status(200).json({
                response: {
                    data: orders,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
}

exports.postAddOrder = (req, res, next) => {
    console.log("lol");
    console.log(req.body);
    const { date, users_id, product_id } = req.body;
    const errors = validationResult(req);
    var u_id = mongoose.Types.ObjectId(users_id);
    var v_id = mongoose.Types.ObjectId(product_id);
    if (!errors.isEmpty()) {
        console.log("error");
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        console.log("lol2");
        const orders = new Order(date, u_id, v_id);
        orders
            .save()
            .then(result => {
                // console.log(result);
                console.log('Created Order');
                res.status(200).json({
                    response: {
                        result: true,
                        message: "success"
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(200).json({
                    response: {
                        result: false,
                        message: err
                    }
                });
            });
    }
};

exports.postUpdateOrder = (req, res, next) => {
    console.log("postUpdate");
    console.log(req.body);
    const { order_id, date, users_id, product_id } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const orders = new Order(date, users_id, product_id, new ObjectId(order_id));
        orders
            .save()
            .then(result => {
                console.log('Update Order');
                res.status(200).json({
                    response: {
                        result: true,
                        message: "success"
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(200).json({
                    response: {
                        result: false,
                        message: err
                    }
                });
            });
    }
};

exports.getDeleteOrder = (req, res, next) => {
    const { order_id } = req.params;
    console.log(order_id);
    Order.deleteById(order_id)
        .then(() => {
            console.log('Delete Order');
            res.status(200).json({
                response: {
                    result: true,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    result: false,
                    message: err
                }
            });
        });
};

exports.getUpdateOrder = (req, res, next) => {
    console.log("getUpdate");
    console.log(req.params);
    const { order_id } = req.params;
    let date = '';
    let users_id = '';
    let product_id = '';

    Order.findById(order_id)
        .then(order => {
            console.log(order);
            res.status(200).json({
                response: {
                    data: order,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
};