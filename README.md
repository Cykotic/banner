# Discord Bot Banner Updater

This script updates the banner of a Discord bot. It uses the `fs`, `node-fetch`, and `readline` modules.

## Dependencies

- `fs`: This module is used to interact with the file system in your machine. In this script, it's used to read the banner file.
- `node-fetch`: This module is used to make HTTP requests. It's used to send a PATCH request to the Discord API to update the bot's banner.
- `readline`: This module is used to read input from the console. It's used to get the bot token from the user.

## How to Use

1. Make sure you have Node.js installed on your machine.
2. Install the dependencies by running `npm install fs node-fetch readline`.
3. make sure to name it `banner.gif` ( unless you know what your doing )
4. Run the script using `node Index.js`.
5. When prompted, enter your Discord bot token.

## Functionality
Designed to update your bot banner with any GIF ( this was made when it first came out ) .
