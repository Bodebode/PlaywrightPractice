import { test, expect, request } from '@playwright/test';

test('Verify handling invalid request', async ({}) => {
    const apiContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  
    const response = await apiContext.get('/invalid-endpoint');
    expect(response.status()).toBe(404); // HTTP 404 Not Found
  
    const responseBody = await response.text();
    expect(responseBody).toBe('{}'); // Response body is usually empty for 404
  });
  
  test('Verify API response structure', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    const responseBody = await response.json();
});


  /*
Verify response headers //Ensuring the API returns the expected headers (Content-Type, Content-Length, Authorization, Caching, error handling etc.)
Verify response format //Ensuring the API returns the expected format (JSON, XML, etc.)
Verify response payload //Checking that the structure and data within the JSON (or XML) response are correct.
Verify response content //Ensuring the API returns the expected content (e.g., a list of users, a specific user, etc.)
Verify response body //Ensuring the API returns the expected body (e.g., a list of users, a specific user, etc.)
  */
