import axios from 'axios';

export function fetchDailyPic() {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=LOECrvPRpcrxyo8RE3BLSiQ5kPl4FKUOcD7h0T7U`);
}