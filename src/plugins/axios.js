import axios from "axios";

const client = axios.create({
  baseURL:'https://swapi.dev/api/people/',
  headers:{
    common:{
      'Content-Type': 'application/json'
    }
  }
})

export default client;