import axios from 'axios';
import { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/todos');
  return {
    body: {
      todoList: res.data
    }
  };
};
