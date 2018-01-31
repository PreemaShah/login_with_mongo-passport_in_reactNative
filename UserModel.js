var mongoose = require('mongoose');
mongoose.Promise= global.Promise;
mongoose.connect("mongodb://localhost:27017/Users");
let user = mongoose.model('Users',{
    email:{
        type:String,
    },
    password:{
      type:String,
    }
});
module.exports={
    user
};
