

//Add address :/api/address/add

import Address from "../models/Address.js"

// Add address: /api/address/add


export const addAddress = async (req, res) => {
  try {
    const { address } = req.body;

    // Use user ID from the authenticated user
    const userId = req.user._id;

    await Address.create({ ...address, userId });

    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


// Get address: /api/address/get

export const getAddress = async (req, res) => {
  try {
    const userId = req.user._id;

    const addresses = await Address.find({ userId });

    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


