import axios from 'axios';
// need to use a proxy for by pass CORS error
let baseUrl = "https://cors-anywhere.herokuapp.com/https://latelier.co";

const options = {
    method: 'GET',
    headers: { "Access-Control-Allow-Origin": "*" },
    url:`${baseUrl}/data/cats.json`,
  };
 

export default {
    getCats() {
        return  axios(options);
    },
    getTwoCats(items) {
        return items[Math.floor(Math.random()*items.length)];
    }
}
