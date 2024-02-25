const axios = require('axios')
const { error } = require('console');
const fs = require('fs');
const env = require('dotenv').config();
const prompt = require('prompt-sync')({sigint: true});
const main = async () => {
    
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
const url= bridgeAPI.concat(process.env.SERVER_TOKEN)
axios({
    method: 'get',
    url: url,
    responseType: JSON
})  



/*const url = `https://zillow56.p.rapidapi.com/search_agents?location=${city}%2C%20${state}`;
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
        console.log(url + response.status `\n` + "Invalid Input: " + response.status)
        return
       }
       
    const result = await response.text();
    console.log(result)
    */
   let result = response()
    /*fs.appendFile('realEstateData.json', result, 'utf-8', (err) => {
        if (err) {
            console.error("Cannot write to JSON File:", err);
            return;
        }
        console.log(`JSON Data written for ${city}, ${state}`);
    });
    
        try{
           let data = "./realEstateData.json"
           let  realEstatePictureData = JSON.parse(data)
           console.log(realEstatePictureData.profilePhotoSrc)
            await  (fs.appendFile('realEstateData.txt', realEstatePictureData.profilePhotoSrc , 'utf-8', (err) => {
                if (err) {
                    console.error('Cannot write to Pictures file:', err);
                    return;
                }
                console.log('Pictures data written to realEstateData.txt');
            }));
        } catch (error) {
            console.error("Error:", error);
        }}*/
    }
    main()
        