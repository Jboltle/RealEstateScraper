const axios = require('axios');
const fs = require('fs');
require('dotenv').config();
const prompt = require('prompt-sync')({ sigint: true });

const main = async () => {
    const url = prompt('Enter URL: ');
    /*if (!url.startsWith("https:" || /"https/)) {
        console.error("Please enter a valid URL");
        return;
    }*/

    const state = prompt('Enter State: ');
    const city = prompt('Enter City: ');

    const isValidState = stateCheck(state, city);
    if (!isValidState) {
        return;
    }

    const serverToken = process.env.SERVER_TOKEN;
    const apiURL = accessTokenInsert(url, serverToken);

    ApiRequest(apiURL);
};

const stateCheck = (state, city) => {
    const stateArray = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
        "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
        "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    if (!stateArray.includes(state)) {
        console.error("Please enter a valid state");
        return false;
    } else {
        console.log(`| ${state} ${city}`);
        return true;
    }
};

const accessTokenInsert = (url, serverToken, filter) => {
    const accessTokenPattern = /SERVER_TOKEN/;
    const filter = `$filter=contains(RegionLocationNames,${city})`
    if (url.match(accessTokenPattern)) {
        // Replace the matched substring with the server token
        const apiUrl = url.replace(accessTokenPattern, serverToken);

    } else  if (!apiURL.contains(filter)) {
            
    apiURL.concat(filter)

    console.log(apiURL
        )
    }
    else    {
        // If neither "SERVER_TOKEN" nor "access_token=" is found, construct a new URL with default parameters
    
        // Append the filter to the default URL if provided
       

        console.log("Using default URL:", defaultUrl);
        return defaultUrl;
    }
};

const ApiRequest = (apiURL, defaultUrl) => {
    axios.get(apiURL)
        .then(response => {
            const data = response.data;
            fs.appendFileSync('realEstateData.json', JSON.stringify(data), 'utf-8');
            console.log("Data written to realEstateData.json");
        })
        .catch(error => {
            axios.get(defaultUrl)
            .then(response => {
                const data = response.data
                fs.appendFileSync('realEstateData.json', JSON.stringify(data), 'utf-8');
                console.log("Data written to realEstateData.json");
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                            })
        });
};

main();