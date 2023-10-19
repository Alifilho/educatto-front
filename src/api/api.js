import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5073/api'
})

export default {api}