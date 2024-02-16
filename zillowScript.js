const axios = require('axios');
const fs = require('fs');


const main = async () => {
    const url = `https://zillow56.p.rapidapi.com/search?location=${location}%2C%20tx`;
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

