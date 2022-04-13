const DeliveryAddress = require('./model');
const {user, policyFor} = require('../../utiles/index');
const { subject } = require('@casl/ability');

const index = async (req, res, next) => {
  try{  
     const delivery = await DeliveryAddress.find();
     return res.json(delivery);
  }
  catch(err){
    if(err && err.name === 'ValidationError'){
        return res.json({
            error: 1,
            message: err.message,
            fields: err.errors
        })
    }
    next(err);
  }
}

const store = async (req, res, next) => {
    try{
        let payload  = req.body;
        let address = new DeliveryAddress({...payload, user: user});
        console.log(address);
        await address.save();
        return res.json(address);
    }
    catch(err){
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err);
    }
}
 
const update = async (req, res, next) => {
    let policy = policyFor(req.user);
    try{
        let {_id, ...payload} = req.body;
        let {id} = req.params;
        let address = await DeliveryAddress.findById(id);
        // console.log(address);
        let subjectAddress = subject('DeliveryAddress', {...address, user_id: address.user});
        // console.log(subjectAddress);
        if(!policy.can('update', subjectAddress)){ 
            return res.json({
                error: 1,
                message: "You're not allowed to modify resource"
            });
        }
     
        address = await DeliveryAddress.findByIdAndUpdate(id, payload, {new: true});
        return res.json(address);
    } 
    catch(err){
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err);
    }
}

const destroy = async (req, res, next) => {
    try{
        let delivery = await DeliveryAddress.findByIdAndDelete(req.params.id);
        return res.json(delivery);
    }
    catch(err){
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err);
    }
}

module.exports = {
    index,
    store,
    update,
    destroy
}