import axios from 'axios';

export function fetchAllRover(roover) {
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roover}?api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF`);
}