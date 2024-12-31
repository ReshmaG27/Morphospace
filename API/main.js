const { MongoClient, corsnode,ObjectId } = require('mongodb');
const url = 'mongodb+srv://muthusivanpillai:muthu1510@cluster0.8yxbp.mongodb.net/';
const client = new MongoClient(url);

var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());
var jwt = require('jsonwebtoken');
app.use(express.json());



app.post("/Reg",async(req,res)=>{
    let {username,email,password,confirmPassword} = req.body;
    const data = { username, email, password, confirmPassword };
    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({success: false, message: 'All fields are required' });
      }
    
    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
      }
    await client.connect();
        let db = client.db("Project");
        
    await db.collection("login").insertOne(data);
        return res.json({ success: true, message: "Registered successful!" });

})

/* The login code of express with jwt  */

app.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    await client.connect();
    let db = client.db("Project");
    let loginres = await db.collection("login").find({"email":email,"password":password}).toArray();
    if (loginres.length>0){
        var token = jwt.sign({"name":loginres[0]["email"]},'SECRET')
        return res.json({ success: true, message: "Login successful!" });
    }else{
        return res.status(401).json({ success: false, message: "Invalid email or password." });
    }
})

app.post('/user', async (req, res) => {
    const { firstname, lastname, email, address, contactno, city, state, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Connect to MongoDB
        const db = client.db("Project");

        // Check if a user with the given email exists
        const existingUser = await db.collection("Details").findOne({ email });

        if (existingUser) {
            // Update the existing user
            await db.collection("Details").updateOne(
                { email }, // Filter
                {
                    $set: {
                        firstname: firstname || existingUser.firstname,
                        lastname: lastname || existingUser.lastname,
                        address: address || existingUser.address,
                        contactno: contactno || existingUser.contactno,
                        city: city || existingUser.city,
                        state: state || existingUser.state,
                    },
                }
            );
            return res.status(200).json({ message: 'User updated successfully' });
        } else {
            // Create a new user
            const newUser = {
                firstname,
                lastname,
                email,
                address,
                contactno,
                city,
                state,
                password
            };
            await db.collection("Details").insertOne(newUser);
            return res.status(201).json({ message: 'User created successfully', user: newUser });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

app.post("/Feedback",async(req,res)=>{
    let {name,email,review_star,review} = req.body;
    const data = { name, email, review_star, review };
    if (!name || !email || !review_star || !review) {
        return res.status(400).json({success: false, message: 'All fields are required' });
      }
    await client.connect();
        let db = client.db("Project");
        
    await db.collection("feedback").insertOne(data);
        return res.json({ success: true, message: "Review added successfully!" });

})

app.get('/disfeedback', async (req, res) => {
    try {
      const db = client.db('Project'); // Use 'Project' database
      const collection = db.collection('feedback'); // Use 'Feedback' collection
      
      // Fetch feedback with specific fields: name, reviewStars, and review
      const feedback = await collection.find({}, { projection: { _id: 0, name: 1, review_star: 1, review: 1 } }).toArray();
      
      // Send the feedback as a JSON response
      res.json(feedback);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching feedback data' });
    }
  });
  

  app.post("/saveDetails", async (req, res) => {
    const { title, tagline } = req.body;
  
    // Validate that both title and tagline are provided
    if (!title || !tagline) {
      return res.status(400).json({ success: false, message: "Both title and tagline are required" });
    }
  
    try {
      await client.connect();
      const db = client.db("Project");
  
      // Create a new document with the title and tagline
      const data = { title, tagline };
  
      // Insert the data into the "details" collection
      await db.collection("products").insertOne(data);
  
      return res.json({ success: true, message: "Details saved successfully!" });
    } catch (error) {
      console.error("Error saving details:", error);
      return res.status(500).json({ success: false, message: "Failed to save details" });
    }
  });
  

  app.get('/cartItems', async (req, res) => {
    const db = client.db('Project');
    const cartItems = await db.collection('products').find({}).toArray();
  
    // Add a default quantity if not present
    const formattedCartItems = cartItems.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
  
    res.json(formattedCartItems);
  });
  
  app.post("/addReview", async (req, res) => {
    const { name, review } = req.body;
  
    if (!name || !review) {
      return res.status(400).json({ message: "Name and review are required" });
    }
  
    try {
      const newReview = { name, review, createdAt: new Date() };
      let db = client.db("Project");
      await db.collection("Review").insertOne(newReview);
  
      res.status(201).json({ message: "Review added successfully"});
    } catch (error) {
      console.error("Error adding review:", error);
      res.status(500).json({ message: "Failed to add review" });
    }
  });
  
  app.get("/getReviews", async (req, res) => {
    try {
      let db = client.db("Project");
      const reviews = await db.collection("Review").find().sort({ createdAt: -1 }).toArray();
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });



app.listen(8888,()=>{
    console.log("server Started")
})



/* the API for editing the password with phone otp or email otp  */
/*
const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const twilio = require('twilio'); // Optional: for SMS
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password', // Replace with your email password
  },
});

// Twilio Configuration (optional for SMS)
const twilioClient = twilio('ACCOUNT_SID', 'AUTH_TOKEN'); // Replace with Twilio credentials

// In-memory OTP store (replace with a database for production)
const otpStore = {};

// Step 1: Request OTP
app.post('/request-otp', async (req, res) => {
  const { identifier } = req.body; // Can be phone or email
  const otp = crypto.randomInt(100000, 999999); // Generate a 6-digit OTP
  otpStore[identifier] = otp; // Store OTP temporarily

  try {
    if (identifier.includes('@')) {
      // Send OTP via email
      await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: identifier,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`,
      });
      return res.json({ success: true, message: 'OTP sent to email.' });
    } else {
      // Send OTP via SMS
      await twilioClient.messages.create({
        body: `Your OTP for password reset is: ${otp}`,
        from: '+1234567890', // Replace with your Twilio number
        to: identifier,
      });
      return res.json({ success: true, message: 'OTP sent to phone.' });
    }
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ success: false, message: 'Error sending OTP.' });
  }
});

// Step 2: Verify OTP and Reset Password
app.post('/reset-password', (req, res) => {
  const { identifier, otp, newPassword } = req.body;

  if (otpStore[identifier] && otpStore[identifier] === parseInt(otp)) {
    // OTP is valid, proceed with password reset
    delete otpStore[identifier]; // Remove OTP after successful verification

    // Save new password in the database (mock example)
    // Assume `users` is a database collection
    // users.updateOne({ identifier }, { $set: { password: newPassword } });

    return res.json({ success: true, message: 'Password reset successfully.' });
  } else {
    return res.status(400).json({ success: false, message: 'Invalid OTP.' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
 */