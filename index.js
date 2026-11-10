const bedrock = require('bedrock-protocol');

console.log("Starting Bedrock Friend Bot...");

const client = bedrock.createClient({
  host: process.env.ATERNOS_IP || "DragonBallzSMP.aternos.me",
  port: parseInt(process.env.ATERNOS_PORT || "19132"),
  profilesFolder: './tokens',
  offline: false,
  skipPing: true,
  connectTimeout: 30000
});

client.on('play_status', (packet) => {
  console.log("Success! The bot is connected and broadcasting your server to your friends list!");
});

client.on('error', (err) => {
  console.error("Bot encountered an error:", err);
});
