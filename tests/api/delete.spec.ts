import { test, expect } from '@playwright/test';
test('Verify deleting a post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200); // HTTP 200 OK

    // Verify post is deleted
    const responseAfterDelete = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(responseAfterDelete.status()).toBe(404); // HTTP 404 Not Found
    // expect(responseAfterDelete.status()).toBe(200); // This will pass but its a false positive, the request should indeed return 400

  });
  