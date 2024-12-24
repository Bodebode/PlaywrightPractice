import { test, expect, request } from '@playwright/test';

test('Verify fetching posts', async ({}) => {
  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  const response = await apiContext.get('/posts');
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toBeInstanceOf(Array); // Verify response is an array
  expect(responseBody.length).toBeGreaterThan(0); // Ensure posts are returned
});
