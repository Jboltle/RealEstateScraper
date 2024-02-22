const axios = require('axios');
const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });
require('dotenv').config();

const main = async () => {
    try {
        const state = prompt('Enter State: ');
        const city = prompt('Enter City: ');

        const stateArray = [
            "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
            "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
            "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
        ];

        if (!stateArray.includes(state)) {
            console.log("Invalid state.");
            return;
        }

        console.log(`| ${state} ${city}`);

        const url = `https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=${process.env.SERVER_TOKEN}`;
        console.log(`Making request to: ${url}`)
        const response = await axios.get(url);

        const data = response.data;

        console.log(data); // Make sure the response contains the expected data structure

        fs.writeFile('realEstateData.json', JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                console.error("Cannot write to JSON File:", err);
                return;
            }
            console.log(`JSON Data written for ${city}, ${state}`);
        });

        // Assuming data contains an object with profilePhotoSrc and reviewStarsRating properties
        const picturesURL = data.profilePhotoSrc;
        const rating = data.reviewStarsRating;
        console.log("Pictures URL:", picturesURL);
        console.log("Rating:", rating);

        fs.appendFile('realEstateData.txt', `${picturesURL}\n${rating}`, 'utf-8', (err) => {
            if (err) {
                console.error('Cannot write to Pictures file:', err);
                return;
            }
            console.log('Pictures data written to realEstateData.txt');
        });
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
};

main();
