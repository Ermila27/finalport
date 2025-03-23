import { v4 as uuidv4 } from 'uuid'
import Stripe from 'stripe'
import express, { json } from 'express'
import dotenv from 'dotenv'
 import axios from 'axios'
 import cors from 'cors'
 dotenv.config()
 const stripe = new Stripe(process.env.SECRET_KEY);

 const app=express();
 app.use(cors());
  app.use(express.json());
  
 app.get("/",(req,res)=>{
   res.status('200').send({message:'hey this is data '})
 })

 app.post("/payment", async (req, res) => {
  try {
    let { amountofmoney, currency = "usd" } = req.body;

    // Validate the input
    if (typeof amountofmoney !== "number" || amountofmoney <= 0) {
      return res.status(400).json({ error: "Invalid amount provided" });
    }

    // Convert dollars to cents
    const amountInCents = Math.round(amountofmoney * 100);

    console.log(`Amount in cents: ${amountInCents}`);

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency.toLowerCase(), // Ensure currency is lowercase
      payment_method_types: ["card"], // Use valid Stripe payment method types
    });

    // Respond with the client secret
    res.setHeader('Content-Type', 'application/json');
    res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
 app.listen(1000,()=>{
    console.log("hello form th server")
 })