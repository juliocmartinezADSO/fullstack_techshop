// const { Roles } = require("../models/Role");
const Roles = ["user", "admin", "moderator"];

const User = require("../models/User");

const checkExistedEmailOrUsername = async (req,res,next)=>{
    const user = await User.findOne({username:req.body.username})
    if(user)return res.status(400).json({message:'The user already exists'})

    const email = await User.findOne({email:req.body.email})
    if(email)return res.status(400).json({message:'The email already exists'})

    next()
    
}

const checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!Roles.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        });
      }
    }
  }
  next();
};

module.exports = { checkRolesExisted, checkExistedEmailOrUsername };
