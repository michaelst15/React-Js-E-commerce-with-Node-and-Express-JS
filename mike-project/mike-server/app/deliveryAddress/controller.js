const DeliveryAddress = require('./model');
let {policyFor} = require('../../utiles/index');
const { subject } = require('@casl/ability');

const index = async (req, res, next) => {
  try{  
     let {skip = 0, limit = 10 } = req.query;
     let count = await DeliveryAddress.find({user: req.user._id}).countDocuments();
     let address = await DeliveryAddress
     .find({user: req.user._id})
     .skip(parseInt(skip))
     .limit(parseInt(limit))
     .sort('-createAt');
     return res.json({data: address, count});
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
        // console.log(payload, 1)
        let user = req.user;
        // console.log(user, 2)
        let address = new DeliveryAddress({...payload, user:user});
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
    try{
        let {_id, ...payload} = req.body;
        let {id} = req.params;
        let address = await DeliveryAddress.findById(id);
        // console.log(address);
        let subjectAddress = subject('DeliveryAddress', {...address, user_id: address.user});
        console.log(subjectAddress);
        let policy = policyFor(req.user);
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
        let {id} = req.params;
        let address = await DeliveryAddress.findById(id)
        let subjectAddress = subject('DeliveryAddress', {...address, user_id: address.user});
        console.log(subjectAddress);
        let policy = policyFor(req.user);
        if(!policy.can('update', subjectAddress)){ 
            return res.json({
                error: 1,
                message: "You're not allowed to modify resource"
            });
        }
     
        address = await DeliveryAddress.findByIdAndDelete(id);
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

module.exports = {
    index,
    store,
    update,
    destroy
}