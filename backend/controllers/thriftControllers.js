const thriftModel = require("../models/thriftModel");
// const { verifyUserToken } = require("./userController");


// Controller for creating a thrift
 const createThrift = async (req, res)=> {

    const { thriftName,  subscriptionPlan, thriftAdmin, amount, maxMem  } = req.body;
    // const thriftAdmin = "okna"

    let duration;
    if (subscriptionPlan === 'daily') {
      duration = 10;
    } else if (subscriptionPlan === 'monthly') {
      duration = 30;
    } else if (subscriptionPlan === 'yearly') {
      duration = 365;
    }
    else {
      return res.status(400).send({ message: 'Invalid subscription plan' });
    }
    let amountPerUser = amount / maxMem
  
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
        maxMem
      });
  
      res.status(201).send({ message: "Thrift created successfylly",  thrift });
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Failed to create thrift' });
      
    }
  }


// Arrow function for joining a thrift
const joinThrift = async (req, res) => {
  const { thriftId, memberName } = req.body;

  try {
    const thrift = await thriftModel.findById(thriftId);
    if (!thrift) {
      return res.status(404).send({ message: 'Thrift not found' });
    }

    // Check if member already exists in the thrift
    if (thriftModel.thriftMembers.includes(memberName)) {
      return res.status(409).json({ error: 'Member already exists in the thrift' });
    }

    thriftModel.thriftMembers.push(memberName);
    await thrift.save();

    res.send({ thrift });
  } catch (error) {
    res.status(500).send({ message: 'Failed to join the thrift' });
  }
};

const getUserThrifts = async (req, res) => {
  try {
    const { userName } = req.body // Assuming you have the user's userName stored in req.user.userName

    // Find all the thrifts where the user is a member
    const userThrifts = await thriftModel.find({ thriftMembers: userName });

    res.status(200).json({ thrifts: userThrifts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user thrifts' });
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



module.exports = { createThrift, joinThrift, getUserThrifts, getThriftById };

  