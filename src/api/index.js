import client from "../plugins/axios";


const fetchData = async (url)=>{
  return await client.get(url);
}

export default fetchData;
