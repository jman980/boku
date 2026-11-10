const bedrock = require('bedrock-protocol');
const http = require('http');

console.log("Starting Bedrock Friend Bot with web server patch...");

// --- Render Web Server Patch ---
// This opens a fake webpage port so Render's health scan doesn't kill the bot
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running smoothly!\n');
});
const PORT = process.env.PORT || 10000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Web server scanner listening on port ${PORT}`);
});
// -------------------------------

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
