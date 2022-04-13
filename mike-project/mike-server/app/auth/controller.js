const User = require('../user/model');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');
const getToken = require('../../utiles/index');

const register = async (req, res, next) => {
    try{
     const payload = req.body;
     let user = new User(payload);
     await user.save();
     return res.json(user);
    }
    catch(err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

const localStrategy = async (email, password, done) => {
     try{
         let user = await User.findOne({email}).select('-__v -createdAt -updateAt -cart_items -token'); // '__v -createAt -updateAt -cart_items -token ' (simbol - )=> tidak diikutkan 
         if(!user) return done(); // jika tidak mendapatkan email(user) akan langsung diarahkan ke parameter done(error) sama seperti next;
         if(bcrypt.compareSync(password, user.password)){
             ( {password, ...userWithoutPassword}  = user.toJSON() ); // sama seperti const {password, ...userWithoutPassword}  = user.toJSON();
             return done(null, userWithoutPassword)
         }
     }
     catch(err) {
         done(err, null)
     }
     done(); // agar tidak nge load terus
}
 
const login = (req, res, next) => {
    passport.authenticate('local',  async function(err, user){
        if(err) return next(err);

        if(!user) return res.json({error: 1, message: 'Email or Password incorect'});
                       
        let signed = jwt.sign(user, config.secretKey);
       
        await User.findByIdAndUpdate(user._id, {$push: {token: signed}});

        res.json({
           message: 'login success',
           user,
           token: signed
        })
    })(req, res, next)
}

const logout = (req, res, next) => {
    // let token = getToken(req); //TypeError: getToken is not a function
    let token = () => {
        this.getToken = this.getToken.bind(req);
    }


    
    let user = User.findOne({token: {$in: [token]}}, {$pull: {token: token}}, {userFindAndModify: false});

    if(!token || !user) {
        res.json({
            error: 1,
            message: 'no user found!!!'
        });
    }
    return res.json({
        error: 0,
        message: 'logout berhasil'
    });
}

const me = (req, res, next) => {
    if(!req.user){
        res.json({
            error: 1,
            message: "You're not login or expired "
        })
    }
    res.json(req.user);
}

module.exports = {     
    register,
    localStrategy,
    login,
    logout,
    me
}