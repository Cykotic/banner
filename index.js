const fs = require('fs');
const fetch = require('node-fetch');
const readline = require('readline');

const bannerFilePath = 'banner.gif';

async function updateBanner(token) {
    try {
        // Check if the banner file exists
        if (!fs.existsSync(bannerFilePath)) {
            console.error('Banner file does not exist.');
            return;
        }

        const newBanner = fs.readFileSync(bannerFilePath);

        const response = await fetch('https://discord.com/api/v10/users/@me', {
            method: 'PATCH',
            headers: {
                Authorization: `Bot ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                banner: `data:image/png;base64,${newBanner.toString('base64')}`
            })
        });

        if (response.ok) {
            console.log('Banner updated successfully!');
        } else {
            console.error('Failed to update banner:', response.statusText);
            const responseBody = await response.text();
            console.error('Response body:', responseBody);
        }
    } catch (error) {
        console.error('Error updating banner:', error);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your Discord bot token: ', (token) => {
    updateBanner(token);
    rl.close();
});
