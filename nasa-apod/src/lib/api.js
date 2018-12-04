import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=j93ZsmvnjIA9rA4OnbMN52CHmBRS5TcK4wffyOsn&date=${date}`);
}