# propal-tax

Calculate taxes for ProPal Discord bot.

## Installation
```bash
npm install propal-tax
```
## Usage
```js
const calculatePropalTax = require('propal-tax');

const totalAmount = 1000; // Replace with the actual amount received by the bot

const taxDetails = calculatePropalTax(totalAmount);

console.log('Bot Tax:', taxDetails.botTax);
console.log('Server Owner Tax:', taxDetails.serverOwnerTax);
console.log('Delete Tax:', taxDetails.deleteTax);
```
## Example with Discord.js Bot
```js
const Discord = require('discord.js');
const calculatePropalTax = require('propal-tax');

const client = new Discord.Client();

client.on('message', (message) => {
  if (message.content === '!calculateTax') {
    // Replace with the actual amount received by the bot
    const totalAmount = 1000;

    const taxDetails = calculatePropalTax(totalAmount);

    message.channel.send(`Bot Tax: ${taxDetails.botTax}\nServer Owner Tax: ${taxDetails.serverOwnerTax}\nDelete Tax: ${taxDetails.deleteTax}`);
  }
});

client.login('YOUR_BOT_TOKEN');
```
