import React, { useState, useEffect } from 'react';

 export const RealEstateData = () => {
    const [url, setUrl] = useState('');
    const [state, setState] = useState('');
    const [city , setCity] = useState(" ");

    const [isValidState, setIsValidState] = useState(true);

    useEffect(() => {
        // Perform API request when component mounts
        if (isValidState) {
            serverAPI();
        }
}, [isValidState]); // Only run effect when isValidState changes

    const serverAPI = async () => {
        const serverToken = process.env.SERVER_TOKEN; // Use REACT_APP_ prefix for environment variables in React
        const apiURL = accessTokenInsert(url, serverToken);

        ApiRequest(apiURL);
    };

    const stateCheck = (state, city) => {
        // Implement state check logic here
        // Set isValidState based on the result
        setIsValidState(true); // Placeholder, replace with actual logic
    };

    const accessTokenInsert = (url, serverToken) => {
        // Implement accessTokenInsert logic here
        return url; // Placeholder, replace with actual logic
    };

    const ApiRequest = (apiURL, defaultUrl) => {
        // Implement ApiRequest logic here
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        stateCheck(state, city);
    };

    return (
        <div>
            <h1>Real Estate Data</h1>
            <form onSubmit={handleSubmit}>
               <label>
                    Enter URL:
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value.contains(url ) ? true : console.log("Please Enter Valid URL"))} /> </label>
\                
                <br />
                <label>
                    Enter State:
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </label>
                <br />
                <label>
                    Enter City:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

