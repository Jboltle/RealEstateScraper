import React, { Component, useState } from 'react';
import './App.css'
import axios from 'axios'

import { Input } from '@geist-ui/core';





export const RealEstateData = () => {
    let access_token = "8522541bd0b01e069d1debef37a934dc"
    let url = "https://api.bridgedataoutput.com/api/v2/OData/reviews/Reviews?access_token="
    console.log(url)
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [id, setID] = useState("")
    let [originalURL, setUrl] = useState("")


    const handleSubmit = (url, e) => {
        e.preventDefault()

    const parameters = {
        originalURL: url,
    access_token: access_token ,
    id: id,
    state: state,
    city: city
}
    url = url.concat(parameters.access_token,parameters.id,parameters.state,parameters.city)    
    console.log(url)

}

const getRequest =  (url) =>
    {
axios.get(url).then(response => {console.log(response.data.data)}).catch(error => {console.log(error.message)})
    }


    return (
        <div>
            <h1>Real Estate Data
            </h1>


            <div>

            </div>
            <form onSubmit={handleSubmit}>
               <Input aria-labelledby="Demo input" placeholder="Enter ID:" size= "small"/>
                <br></br>

               
                    <Input aria-labelledby="Demo input" placeholder="Choose State:" size= "small" />
               
                <br></br>   
                
               
                <Input aria-labelledby="Demo input" placeholder="Enter City:" size= "small" />
               
<br></br>
                <button type="submit"  >Submit</button>
            </form>
            <br></br>
            <br/><br />
            <br /><br />
            <img className="houseImage" src="/public/pexels-binyaminmellish-106399.jpg"  alt='' width=" 200" height="200" />
        </div> 

    );

}