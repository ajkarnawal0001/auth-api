const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var uuid = require('node-uuid');

const userSchema = new mongoose.Schema({
    uid: { type: String, default: function genUUID() {
        return uuid.v1()
    }},
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    mobile:{type:String, required:true,minlength:10},
    password:{type:String, required:true,minlength:8},
    roles:[{type:String, required:true}],
    status:{type:Boolean, required:true,default:true}
},{
    timestamps:true
})


userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();
    
    bcrypt.hash(this.password, 8 , (err,hash)=>{
        if(err) return next(err)
        
        this.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function (password){
    const passwordHash = this.password;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(password,passwordHash,(err,same)=>{
            if(err) return reject(err);
            
            resolve(same);
        })
    })
}

const User = mongoose.model("users",userSchema)
module.exports = User;