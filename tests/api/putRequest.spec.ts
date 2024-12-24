import { test, expect, request } from '@playwright/test';

test('Verify updating a post', async ({}) => {
    const apiContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  
    const updatedPost = {
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    };
  
    const response = await apiContext.put('/posts/1', {
      data: updatedPost,
    });
    expect(response.status()).toBe(200); // HTTP 200 OK
  
    const responseBody = await response.json();
    expect(responseBody).toMatchObject(updatedPost); // Verify response matches updated data
  });
  