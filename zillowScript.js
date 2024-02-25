const axios = require('axios')
const { error } = require('console');
const fs = require('fs');
const env = require('dotenv').config();
const prompt = require('prompt-sync')({sigint: true});
const main = async () => {
    const url = prompt('Enter URL: ')    
      const state = prompt('Enter State: ')
    const city = prompt('Enter City: ')

    function stateCheck(state, city)
    {
    const stateArray = [
          "Alabama",
          "Alaska",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut",
          "Delaware",
          "Florida",
          "Georgia",
          "Hawaii",
          "Idaho",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Kentucky",
          "Louisiana",
          "Maine",
          "Maryland",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Jersey",
          "New Mexico",
          "New York",
          "North Carolina",
          "North Dakota",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Pennsylvania",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "Utah",
          "Vermont",
          "Virginia",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming"
      ];
    for (let i = 0; i < stateArray.length; i++) {
        if (state.localeCompare(stateArray[i]) != 0) {
        }
        else if(state.localeCompare(stateArray[i]) === 0)
        {console.log(`| ${stateArray[i]} ${city}`);
        break;
        }
        else { console.error("Please Enter Valid State: ", error)
         return undefined
        }
    }}
    stateCheck(state,city)


const  bridgeAPI = `https://api.bridgedataoutput.com/api/v2/OData/reviews/Reviews?access_token=`
const serverToken = process.env.SERVER_TOKEN
const accessTokenInsert = (url, serverToken) => { 
    const accessTokenPattern = /access_token=/;
    const match = url.match(accessTokenPattern)
    if (match) {
        const index = match.index + match[0].length;
        return url.slice(0, index) + serverToken + url.slice(index)

    }
    else {return url }

}
accessTokenInsert(url,serverToken)
console.log(accessTokenInsert)
axios.get(url)
    .then(response => {
        const data = response.data; // Retrieve the JSON data from the response

        fs.appendFileSync('realEstateData.json', JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                console.error("Cannot write to JSON File:", err);
                return;
            }
            console.log("Data written to realEstateData.json");
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });


/*const url = `https://zillow56.p.rapidapi.com/search_agents?location=${city}%2C%20${state}`;
    const options = { 
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fcd1f8b37fmsh10226835c1a10c3p1c739ejsn97ce11c60ac7',
            'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        },
        
    };
    console.log(url)
 


*/
        
}
main()
