import { test, expect, request } from '@playwright/test';

test('Verify creating a new post', async ({}) => {
    const apiContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
  
    const response = await apiContext.post('/posts', {
      data: newPost,
    });
    expect(response.status()).toBe(201); // HTTP 201 Created
  
    const responseBody = await response.json();
    expect(responseBody).toMatchObject(newPost); // Verify response matches the new post
  });
  