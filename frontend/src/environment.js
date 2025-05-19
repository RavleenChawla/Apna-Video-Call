let IS_PROD = true;
const server = IS_PROD ?
    "https://apnavideocallbackend-4c48.onrender.com" :

    "http://localhost:8000"


export default server;