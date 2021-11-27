import axios from "axios";

const client = axios.create({
  baseURL:'https://api.spotify.com',
  headers:{
    common:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer  BQB1RLxB28GRcqryRpc4-2nXXxwtHeIoBLJwkljhgf2mA54cFLKR4F5wA-17DzxUkKXjWN8FciNVo_ttw25LM02yyH2e_aF1-oF0UwwUAaxqV4RE7s9-pyg5UtJzevZNR5F2wJj-WHSifYfmcTu587WJG0OL_AAMTyY'
    }
  }
})

export default client;