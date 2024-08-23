const twilio = require('twilio');
const dotenv = require('dotenv').config();

// Replace these with your actual Account SID and Auth Token from your Twilio Console
const accountSid = process.env.ACOUNTSID; 
const authToken = process.env.AUTHTOKEN; 

// Initialize the Twilio client
const client = new twilio(accountSid, authToken);

// Function to send an SMS message
const sendMessage = (message, to) => {
    client.messages.create({
        body: message,
        from: +12086841858, // Your Twilio phone number
        to: to // Recipient's phone number in E.164 format (e.g., +254798872063)
    })
    .then(message => console.log(`Message sent: ${message.sid}`))
    .catch(error => console.error(`Error sending message: ${error.message}`));
};

// Example usage: send an SMS
const recipientNumber = process.env.PHONENUMBER; // Replace with the recipient's phone number
const textMessage = "Hello, this is a test message from Twilio!";

// Call the function to send the message
sendMessage(textMessage, recipientNumber);
