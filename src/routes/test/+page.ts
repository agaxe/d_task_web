import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos').then(
      (res) => res.json()
    );

    return {
      body: {
        todoList: res.data
      }
    };
  } catch (err) {
    throw error(404, 'Not found');
  }
};
