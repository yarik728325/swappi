import client from "../plugins/axios";

const fetchData = async (url)=>{
  return await client.get(url).then(e=>{
    return e.data.items;
  })
}

export default fetchData;
