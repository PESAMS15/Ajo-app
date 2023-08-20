const thriftModel = require("../models/thriftModel");
const userModel = require("../models/userModel");
const axios = require("axios")
// const { verifyUserToken } = require("./userController");


// Controller for creating a thrift
 const createThrift = async (req, res)=> {

    const { thriftName,  subscriptionPlan, thriftAdmin, amount, maxMem  } = req.body;
    // const thriftAdmin = "okna"

    let duration;
    let amt;
    let dur;
    if (subscriptionPlan === 'daily') {
      duration = 10;
      dur = 1
      
    } else if (subscriptionPlan === 'monthly') {
      duration = 30;
      dur = 4
    } else if (subscriptionPlan === 'yearly') {
      duration = 365;
      dur = 12
    }
    else {
      return res.status(400).send({ message: 'Invalid subscription plan' });
    }
    let amountPerUser = amount / maxMem
    amt = amountPerUser / duration
  
    try {
      const existingThrift = await thriftModel.findOne({ thriftName });
      if (existingThrift) {
        return res.status(409).send({ message: 'Thrift already exists' });
      }
  
      const thrift = await thriftModel.create({
        thriftName,
        thriftAdmin,
        thriftMembers: [thriftAdmin],
        subscriptionPlan,
        duration,
        amount,
        amountPerUser,
        maxMem,
        
      });
      const thriftAdminUser = await userModel.findOne({  userName : thriftAdmin });
      if (!thriftAdminUser) {
        return res.status(404).send({ message: 'Thrift admin user not found' });
      }
      thriftAdminUser.thrifts.push(thriftName);

      res.status(201).send({ message: "Thrift created successfylly",  thrift });

    
      // await thriftAdminUser.save();

    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Failed to create thrift' });
      
    }
  }


// Arrow function for joining a thrift
const joinThrift = async (req, res) => {
  // const { } = req.params.id
  const { memberName, thriftId  } = req.body;

  console.log("member:" + memberName)

  try {
    const thrift = await thriftModel.findById({_id: thriftId});
    if (!thrift) {
      return res.status(404).send({ message: 'Thrift not found' });
    }
    console.log("id:" + thriftId)

    // Check if member already exists in the thrift
    // console.log(thrift, 69)
    if (thrift.thriftMembers.includes(memberName)) {
      return res.status(409).send({ message: 'Member already exists in the thrift' });
    }
      const joinTH =   await thriftModel.updateOne({_id:thriftId}, {$push: {thriftMembers: memberName}})
      // console.log(joinTH, 45)
    // thriftModel.thriftMembers.push(memberName);
    // const member = await userModel.findOne({  userName : memberName });
    //   member.thrifts.push(thriftName);
    //   await member.save();

    res.status(200).send({ thrift });
  } catch (error) {
    res.status(500).send({ message: 'Failed to join the thrift' });
  }
};

const getUserThrifts = async (req, res) => {
  try {
    const { userName } = req.body // Assuming you have the user's userName stored in req.user.userName

    // Find all the thrifts where the user is a member
    const userThrifts = await thriftModel.find({ thriftMembers: { $in: [userName] } });
    console.log(userName)

    res.status(200).send({ userThrifts });
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve user thrifts' });
  }
};

const getThriftById = async (req, res) => {
  try {
    const thriftId = req.params.id; // Assuming the thrift ID is passed as a parameter in the request URL

    const thrift = await thriftModel.findOne({_id: thriftId});

    if (!thrift) {
      return res.status(404).send({ message: 'Thrift not found' });
    }

    res.status(200).send({message: "thrift retrieved successfully", thrift });
    console.log(thrift)
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve thrift' });
  }
};

const verifyPayments = async (req, res)=>{
  const {amount, userName} = req.body
  console.log("working")
  console.log(amount)
  console.log(userName)
  try {
    const user = await userModel.updateOne({userName}, {$inc: { wallet: amount}})
    res.status(200).send({message: "balance successfully added", user});
    
    user.wallet += amount
  } catch (error) {
    
  }
    

}




module.exports = { createThrift, joinThrift, getUserThrifts, getThriftById, verifyPayments };

  