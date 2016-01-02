var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var UserSchema = mongoose.Schema({
    email: {
        type: String
    },
    pass: {
        type: String
    },
    registreted: {
        type: Date,
        default: new Date
    },
    admin: {
        type: Boolean,
        default: false
    },
    receipts: {
        type: Array
    },
    token: {
        type: String
    }
});
var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function (newUser, callback) {

    bcrypt.hash(newUser.pass, 8, function(err, hash) {
        if (err) throw err;

        newUser.pass = hash;
        //Create User
        newUser.save(callback);
    });
};

module.exports.comparePassword = function(pass, pass2, callback) {
    bcrypt.compare(pass, pass2, callback);
};
