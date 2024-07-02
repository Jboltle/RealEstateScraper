
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



};
