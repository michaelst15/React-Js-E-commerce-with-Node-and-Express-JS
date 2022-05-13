const {getToken, policyFor} = require('../utiles/index');
const jwt = require('jsonwebtoken');
const config = require('../app/config');
const User = require('../app/user/model');

function decodeToken() {
    return async function (req, res, next) {
        try{
            let token = getToken(req);
            // console.log(token);
            if(!token) return next();
            req.user = jwt.verify(token, config.secretKey);
            let user = await User.findOne({token: {$in: [token]}});
            if(!user){
                res.json({
                    error: 1,
                    message: 'token expired'
                });
            }
        }
        catch(err) {
           if(err && err.name === 'JsonWebTokenError'){
               return res.json({
                   error: 1,
                   message: err.message
               })
           }
           next(err);
        }
        return next();
    }
}

//middleware untuk cek hak akses
function police_check(action, subject) {
    return function(req, res, next) {
        let policy = policyFor(req.user);
        if(!policy.can(action, subject)) {
            return res.json({
                error: 1,
                message: `you are not allowed to ${action} ${subject}`
            });
        }
        next();
    }
}

module.exports = {
    decodeToken,
    police_check
}