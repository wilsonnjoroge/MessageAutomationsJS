const twilio = require('twilio');
const dotenv = require('dotenv').config();

const accountSid = process.env.ACOUNTSID; 
const authToken = process.env.AUTHTOKEN; 

// Initialize the Twilio client
const client = new twilio(accountSid, authToken);

// Function to send an SMS message
const sendMessage = (message, to) => {
    client.messages.create({
        body: message,
        from: +12086841858, 
        to: to 
    })
    .then(message => console.log(`Message sent: ${message.sid}`))
    .catch(error => console.error(`Error sending message: ${error.message}`));
};

// Example usage: send an SMS
const recipientNumber = process.env.PHONENUMBER; 
const textMessage = "Hello, this is a test message from Twilio!";

sendMessage(textMessage, recipientNumber);
