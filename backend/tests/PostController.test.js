import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import app from '../index'; 

describe('Post Controller', () => {
  it('should get all posts', async () => {
    const response = await request(app).get('/post');

    expect(response.statusCode).toBe(200);
  });
});