import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import app from '../index';

describe('Authentication API', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/auth') 
            .send({
                firstName: 'test',
                lastName: 'test',
                username: 'test',
                email: 'test@example.com',
                password: 'test123',
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should log in an existing user', async () => {
        const response = await request(app)
            .post('/auth/login') 
            .send({
                email: 'test@gmail.com',
                password: 'test123',
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});

