'use strict';
const Discord = require("discord.js");
require('dotenv').config()
const client = new Discord.Client();
const leaderboard = {}
const pg = require('pg');
/*
const pgClient = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
*/
const prefix = "z!";

//pgClient.connect();


client.login(process.env.TOKEN);
console.log('running');

// Respond to commands
client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    // More commands to try in each output
    // Levels and rank

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "face") {
        message.channel.send(`\`\`\`${randomFace()} ${randomName()}\`\`\``)
    }

    if (command === "pet") {
    }

    if (command === "help") {
        const helpMessage = `\`\`\`The commands for this bot are:
            1. z!zoo Get a glimpse of all this server's animals
            2. z!pet Get info about your pet and its current happiness level!
            3. z!feed Feed your pet to keep it happy
            4. z!rub Rub your pet's tummy for good luck
        \`\`\``;
        message.channel.send(helpMessage);
    }
});

function randomFace() {
    const cheeks = [
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '{', close: '}' },
        { open: '|', close: '|' },
        { open: 'ʕ', close: 'ʔ' }
    ];
    const eyes = ['o', 'Ծ', '*', 'O', '°', '0', 'ಠ', 'ᵔ', '•', '◕', '°', 'ʘ', '♥'];
    const mouths = ['w', '_', '-', 'ᴥ', '‿', '︿', '﹏', 'ᵕ', '‿‿'];

    const cheek = getRandomEntry(cheeks);
    const eye = getRandomEntry(eyes);
    const mouth = getRandomEntry(mouths);
    
    return `${cheek.open}${eye}${mouth}${eye}${cheek.close}`
}

function randomName() {
    const syllables = ['gleeb', 'norp', 'borf', 'shlub', 'seep', 'beeb', 'sneep', 'plob', 'blork', 'nob', 'fleeb', 'reed', 'clop', 'starg', 'kip', 'stug', 'spug', 'scub'];
    let firstName = '';
    let lastName = '';
    let randomSyllable;
    for (let i = 0; i < 2; i++) {
        randomSyllable = getRandomEntry(syllables);
        firstName += randomSyllable
        randomSyllable = getRandomEntry(syllables);
        lastName += randomSyllable
    }
    return `${firstName} ${lastName}`;
}

function getRandomEntry(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


