const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '?ping') {
        msg.reply('Pong!');
    }
});

const args = message.content.split(' ').slice(1); 

const args = message.content.split(' ').slice(1);
const user = message.mentions.users.first(); 
const banReason = args.slice(1).join(' '); 


const args = message.content.split(' ').slice(1); 
const user = message.mentions.users.first(); 
const banReason = args.slice(1).join(' ');

if (!user) {
    try {
       
        if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
        
        user = message.guild.members.get(args.slice(0, 1).join(' '));
        user = user.user;
    } catch (error) {
        return message.reply('Couldn\' get a Discord user with this userID!');
    }
}

const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
const user = message.mentions.users.first(); // returns the user object if an user mention exists
const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)

// Check if an user mention exists in this message
if (!user) {
    try {
        // Check if a valid userID has been entered instead of a Discord user mention
        if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
        // If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
        user = message.guild.members.get(args.slice(0, 1).join(' '));
        user = user.user;
    } catch (error) {
        return message.reply('Couldn\' get a Discord user with this userID!');
    }
}
if (user === message.author) return message.channel.send('You can\'t ban yourself'); // Check if the user mention or the entered userID is the message author himsmelf
if (!reason) return message.reply('You forgot to enter a reason for this ban!'); // Check if a reason has been given by the message author
if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!'); // Check if the user is bannable with the bot's permissions

const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
const user = message.mentions.users.first(); // returns the user object if an user mention exists
const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)

// Check if an user mention exists in this message
if (!user) {
    try {
        // Check if a valid userID has been entered instead of a Discord user mention
        if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
        // If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
        user = message.guild.members.get(args.slice(0, 1).join(' '));
        user = user.user;
    } catch (error) {
        return message.reply('Couldn\' get a Discord user with this userID!');
    }
}
if (user === message.author) return message.channel.send('You can\'t ban yourself'); // Check if the user mention or the entered userID is the message author himsmelf
if (!reason) return message.reply('You forgot to enter a reason for this ban!'); // Check if a reason has been given by the message author
if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!'); // Check if the user is bannable with the bot's permissions

const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix

const user = message.mentions.users.first(); // returns the user object if an user mention exists
const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)

// Check if an user mention exists in this message
if (!user) {
    try {
        // Check if a valid userID has been entered instead of a Discord user mention
        if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
        // If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
        user = message.guild.members.get(args.slice(0, 1).join(' '));
        user = user.user;
    } catch (error) {
        return message.reply('Couldn\' get a Discord user with this userID!');
    }
}
if (user === message.author) return message.channel.send('You can\'t ban yourself'); // Check if the user mention or the entered userID is the message author himsmelf
if (!reason) return message.reply('You forgot to enter a reason for this ban!'); // Check if a reason has been given by the message author
if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!'); // Check if the user is bannable with the bot's permissions

await message.guild.ban(user) // Bans the user

const Discord = require('discord.js'); // We need Discord for our next RichEmbeds
const banConfirmationEmbed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`✅ ${user.tag} has been successfully banned!`);
message.channel.send({
    embed: banConfirmationEmbed
}); // Sends a confirmation embed that the user has been successfully banned


const modlogChannelID = ''; // Discord channel ID where you want to have logged the details about the ban
if (modlogChannelID.length !== 0) {
    if (!client.channels.get(modlogChannelID)) return undefined; // Check if the modlogChannelID is a real Discord server channel that really exists

    const banConfirmationEmbedModlog = new Discord.RichEmbed()
        .setAuthor(`Banned by **${msg.author.username}#${msg.author.discriminator}**`, msg.author.displayAvatarURL)
        .setThumbnail(user.displayAvatarURL)
        .setColor('RED')
        .setTimestamp()
        .setDescription(`**Action**: Ban
**User**: ${user.username}#${user.discriminator} (${user.id})
**Reason**: ${reason}`);         
    client.channels.get(modlogChannelID).send({
        embed: banConfirmationEmbedModlog
    }); // Sends the RichEmbed in the modlogchannel
}

const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");


client.on('ready', () => {
    console.log('I am ready!');
}); //This is sending a message to the terminal to show the bot is online and working.

client.on('message', message => {

    if (!message.guild) return;


    if (message.content.startsWith('?kick')) { //**This is the command, this says if someone says ?kick then pay attention to teh rest to teh bot.**\\ 

        const user = message.mentions.users.first(); // This says if you mention this user, it is talking about that user

        if (user) {

            const member = message.guild.member(user);

            if (member) {

                member.kick('Optional reason that will display in the audit logs').then(() => {

                    message.reply(`Successfully kicked ${user.tag}, you should feel bad! They will never be able to rejoin until they click join again!`);
                }).catch(err => {

                    message.reply('I was unable to kick the member. Check if their roles are higher then mine or if they have administrative permissions!');

                    console.error(err);
                });
            } else {

                message.reply('That user isn\'t in this guild!');
            }

        } else {
            message.reply('You didn\'t mention the user to kick!'); // Thus is creating a message so that you know if you failed 
            // The / is to show the script that the (') is not the end of it
        }
    }
});

const Discord = require("discord.js");

const bot = new Discord.Client();

const config = require("./config.json");
const ytdl = require("ytdl-core");

const prefix = config.prefix;

var queue = new Map();

bot.on("ready", () => {
    console.log(`I am ready! I am in ${bot.guilds.size} guilds`);

    bot.user.setActivity(`Hello!`);
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const serverQueue = queue.get(message.guild.id);

    if (command === 'hello') {
        message.reply('Hello!');
    }

    if (command === 'ping') {
        const msg = await message.channel.send("Pinging...");
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }

    if (command === 'kick') {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Sorry you do not have permission!');
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member) return message.reply("Please mention a valid user");
        if (!member.kickable) return message.channel.send("Sorry I cannot kick that person! Do they have a higher role?");

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        await member.kick(reason)
            .catch(e => message.reply(`Sorry I couldn't kick them! Error: ${e}`));
        message.reply(`:white_check_mark: User kicked!`);
    }

    if (command === 'ban') {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Sorry you do not have permission!');
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member) return message.reply("Please mention a valid user");
        if (!member.bannable) return message.channel.send("Sorry I cannot ban that person! Do they have a higher role?");

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        await member.ban(reason)
            .catch(e => message.reply(`Sorry I couldn't ban them! Error: ${e}`));
        message.reply(`:white_check_mark: User banned!`);
    }

    if (command === 'play') {
        // !play url

        play(message, serverQueue);
    }

});

async function play(message, serverQueue) {
    const args = message.content.split(" ");

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply("You must be in a voice channel!");
    const permission = voiceChannel.permissionsFor(message.client.user);
    if (!permission.has('CONNECT') || !permission.has("SPEAK")) {
        return message.channel.send("I need permission to join and speak in your voice channel!")
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url,
    };

    if (!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
        };
        queue.set(message.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            playSong(message.guild, queueConstruct.songs[0]);
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id)
            return message.channel.send("There was an error playing! " + err);
        }
    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} has been added to the queue!`);
    }
}

function playSong(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            serverQueue.songs.shift();
            playSong(guild, serverQueue.songs[0]);
        })
        .on('error', error => {
            console.log(error);
        })
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageDelete', message => {
    console.log(`A message by ${message.author.tag} was deleted, but we don't know by who yet.`);
});

client.on('messageDelete', async message => {
    // ignore direct messages
    if (!message.guild) return;
    const fetchedLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE',
    });
    // Since we only have 1 audit log entry in this collection, we can simply grab the first one
    const deletionLog = fetchedLogs.entries.first();

    // Let's perform a coherence check here and make sure we got *something*
    if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

    // We now grab the user object of the person who deleted the message
    // Let us also grab the target of this action to double check things
    const { executor, target } = deletionLog;


    // And now we can update our output with a bit more information
    // We will also run a check to make sure the log we got was for the same author's message
    if (target.id === message.author.id) {
        console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
    } else {
        console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
    }
});

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('guildMemberRemove', member => {
    console.log(`${member.user.tag} left the guild... but was it of their own free will?`);
});

client.on('guildMemberRemove', async member => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_KICK',
    });
    // Since we only have 1 audit log entry in this collection, we can simply grab the first one
    const kickLog = fetchedLogs.entries.first();

    // Let's perform a coherence check here and make sure we got *something*
    if (!kickLog) return console.log(`${member.user.tag} left the guild, most likely of their own will.`);

    // We now grab the user object of the person who kicked our member
    // Let us also grab the target of this action to double check things
    const { executor, target } = kickLog;

    // And now we can update our output with a bit more information
    // We will also run a check to make sure the log we got was for the same kicked member
    if (target.id === member.id) {
        console.log(`${member.user.tag} left the guild; kicked by ${executor.tag}?`);
    } else {
        console.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`);
    }
});
//#Who banned a user ?
    //The logic for this will be very similar to the above kick example, with the exception that this time we have an event specifically for guild bans, that is guildBanAdd.Starting with a skeleton code, we have the following.

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('guildBanAdd', async (guild, user) => {
    console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}.`);
});

//As was the case in the previous examples, we can see what happened, to whom it happened, but not who executed the action.Enter once again audit logs where we will limit ourselves to 1 entry, and looking at the MEMBER_BAN_ADD type.Our guildBanAdd listener then becomes.

    client.on('guildBanAdd', async (guild, user) => {
        const fetchedLogs = await guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_BAN_ADD',
        });
        // Since we only have 1 audit log entry in this collection, we can simply grab the first one
        const banLog = fetchedLogs.entries.first();

        // Let's perform a coherence check here and make sure we got *something*
        if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);

        // We now grab the user object of the person who banned the user
        // Let us also grab the target of this action to double check things
        const { executor, target } = banLog;

        // And now we can update our output with a bit more information
        // We will also run a check to make sure the log we got was for the same kicked member
        if (target.id === user.id) {
            console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, wielded by the mighty ${executor.tag}`);
        } else {
            console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, audit log fetch was inconclusive.`);
        }
    });

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

const { prefix } = config;

client.on('message', message => {
    if (message.content === prefix + 'ping') {
        message.channel.send('Pong.');
    } else if (message.content === prefix + 'beep') {
        message.channel.send('Boop.');
    } else if (message.content === prefix + 'server') {
        message.channel.send('Guild name: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);
    } else if (message.content === prefix + 'user-info') {
        message.channel.send('Your username: ' + message.author.username + '\nYour ID: ' + message.author.id);
    }
});

// ES5 version, as we currently have it
 if (message.content === prefix + 'server') {
    message.channel.send('Guild name: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);
}
 if (message.content === prefix + 'user-info') {
    message.channel.send('Your username: ' + message.author.username + '\nYour ID: ' + message.author.id);
}

 // ES6 version, using template literals
 else if (message.content.startsWith(`${prefix}server`)) {
     message.channel.send(`Guild name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
 }
 else if (message.content.startsWith(`${prefix}user-info`)) {
     message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}

// variables/function used throughout the examples
const username = 'Sanctuary';
const password = 'pleasedonthackme';

function letsPretendThisDoesSomething() {
    return 'Yay for sample data.';
}
// regular string concatenation
console.log('Your username is: **' + username + '**.');
console.log('Your password is: **' + password + '**.');

console.log('1 + 1 = ' + (1 + 1));

console.log('And here\'s a function call: ' + letsPretendThisDoesSomething());

console.log(
    'Putting strings on new lines\n'
    + 'can be a bit painful\n'
    + 'with string concatenation. :('
);
// template literals
console.log(`Your password is: **${password}**.`);
console.log(`Your username is: **${username}**.`);

console.log(`1 + 1 = ${1 + 1}`);

console.log(`And here's a function call: ${letsPretendThisDoesSomething()}`);

console.log(`
	Putting strings on new lines
	is a breeze
	with template literals! :)
`);

// NOTE: template literals will also render the indentation inside them
// there are ways around that, which we'll discuss in another section.

// regular functions, full ES5
client.once('ready', function () {
    console.log('Ready!');
});

client.on('typingStart', function (channel, user) {
    console.log(user + ' started typing in ' + channel);
});

client.on('message', function (message) {
    console.log(message.author + ' sent: ' + message.content);
});

var doubleAge = function (age) {
    return 'Your age doubled is: ' + (age * 2);
};

// inside a message collector command
var filter = function (m) {
    return m.content === 'I agree' && !m.author.bot;
};

var collector = message.createReactionCollector(filter, { time: 15000 });
// arrow functions, full ES6
client.once('ready', () => console.log('Ready!'));

client.on('typingStart', (channel, user) => console.log(`${user} started typing in ${channel}`));

client.on('message', message => console.log(`${message.author} sent: ${message.content}`));

const doubleAge = age => `Your age doubled is: ${age * 2}`;

// inside a message collector command
const filter = m => m.content === 'I agree' && !m.author.bot;
const collector = message.createReactionCollector(filter, { time: 15000 });

const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;

// Alternative version (not recommended)
const prefix = require('./config.json').prefix;
const token = require('./config.json').token;

const { prefix, token } = require('./config.json');

client.on('message', message => {
    const { content } = message;

    if (content === `${prefix}ping`) {
        // ping command here...
    } else if (content === `${prefix}beep`) {
        // beep command here...
    }
    // other commands here...
});

// `default` is a reserved keyword
const { 'default': defaultValue } = someObject;

console.log(defaultValue);
// 'Some default value here'

// assuming we're in a `profile` command and have an `args` variable
const name = args[0];
const age = args[1];
const location = args[2];

const [name, age, location] = args;

const [, username, id] = message.content.match(someRegex);

bot.login(config.NzU0ODg1NjczMjgyMDQ0MDA0.X17QEQ.yfhP3SVgzjGT6OLyOJTsxSkGC84);


client.on('message', msg => {
    if (msg.content === '!HATEY');
    msg.reply('TRIGGERED!');
});

client.on('message', msg => {
    if (msg.content === '!mayday');
    msg.reply('TRIGGERED VIRUS 50 years old!');
});

//MADE BY LUC CONTACT INFO 
//SUPPORT SERVER 
//PLEASE READ THE README FIRST
//ALL OF YOU ARE NICE
//NO NULLS
//MR HARMSEN 5 PERIOD
//kk
client.login('NzU0ODg1NjczMjgyMDQ0MDA0.X17QEQ.yfhP3SVgzjGT6OLyOJTsxSkGC84');

//ITS A WORK IN PROGRESS
//THANK YOU
