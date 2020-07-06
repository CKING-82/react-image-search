import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PIUHcAJl24mkIspFmVGbD9u4Ld4ssOP_LQKSkeyAiY8'
  }
})