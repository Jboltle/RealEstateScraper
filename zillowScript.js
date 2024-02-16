const axios = require('axios');
const fs = require('fs');
const prompt = require('prompt-sync')({sigint: true});

const main = async () => {
    
    const location = prompt('Enter State: ')
    const states = [
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
    for (i = 0; i< states.length(); i++){
        for (j = 0; location != states.some(); j++){     
    console.log(`Invalid state:  ${location, err}`)
}
}
    
    const url = 'https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a7132bf501msh30f1dbfdf1bbbfep196a9bjsn5e49546130bd',
            'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        }
    };
    
    try {

        const response = await fetch(url, options);
        const result = await response.text();
        fs.writeFile('realEstateData.json', result, 'utf-8', (err) => {

            if (err || !fs.existsSync) {
                console.log("Cannot Find JSON File:", err)
            }
            else {console.log("JSON Data written")}
        }   )
    
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}
main()

