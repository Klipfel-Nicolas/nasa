import axios from 'axios';

export function fetchAllPhoto(roover) {

    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roover}/photos?sol=1000&camera=navcam&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF`);
}

export function fetchPictureDay(sol) {
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=navcam&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF`);
}

export function fetchPictureRoover(roover) {
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roover['roover']}/photos?sol=${roover['sol']}&camera=navcam&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF`);
}

export function fetchFull(roover) {
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roover['roover']}/photos?sol=${roover['sol']}&camera=navcam&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF`)
}

export function fetchExtremlyFull(data, name) {
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?sol=${data['sol']}&camera=${data['cam']}&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF`)
}

export function fetchRoverImages(roover) {
    return axios.get(`https://images-api.nasa.gov/search?q=rover&media_type=image&description=${roover}&title=${roover}`)
}