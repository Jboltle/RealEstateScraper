const axios = require('axios');
const { error } = require('console');
const fs = require('fs');
const prompt = require('prompt-sync')({sigint: true});

const main = async () => {
    
    const state = prompt('Enter State: ')
    const city = prompt('Enter City: ')
  
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
    
    for (let i = 0; i < stateArray.length ; i++){
        
             if (state.localeCompare(stateArray[i]) != 0)
            {console.log(" ")}
            else if (state.localeCompare(stateArray[i]) === 0) {
                console.log("|" + `${stateArray[i]} ${city}`)
                break
                
            }
            

        }
    
  
   
    const url = `https://zillow56.p.rapidapi.com/search??location=${city}%2C%20${state}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fcd1f8b37fmsh10226835c1a10c3p1c739ejsn97ce11c60ac7',
            'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        },
        
    };
    console.log(url)
 

    const response = await fetch(url, options);
    console.log(response )
       if (response.status != 200){
        console.log(url)
        console.log(response.status)
        console.err("Invalid Input: " + response.status)
       }
       
        const result = await response.text();
        console.log(result)
        fs.writeFile('realEstateData.json', result, 'utf-8', (err) => {
            if (err || !fs.existsSync ) {
                console.log("Cannot Find JSON File:", err)
    
            }
            else {console.log("JSON Data written for " + city, state)}
            console.log(result);
        }   )
    
}
main()

