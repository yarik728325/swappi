import axios from "axios";

const client = axios.create({
  baseURL:'https://api.spotify.com',
  headers:{
    common:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer  BQAMcVoiV9dqJaCYH59NY9fDReTFpHjeUSCZHQfe7t-xQDPGu8tGgvL1p01sNXLRrqGGs6eQM8pflarwLJQqraJ_Koe2LoKhp4Vm9ws2yXwIeaDyP7pS0vk2x_UboXTwxjxLD71eXiw0gbUH6qa_-BUArL8IdVZyw_A'
    }
  }
})

export default client;