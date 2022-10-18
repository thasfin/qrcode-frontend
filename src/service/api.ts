import axios from 'axios';

export const api = axios.create({
  baseURL: 'localhost:3000/', // OU sua api em Prod. Recomendamos usar .envs
});
