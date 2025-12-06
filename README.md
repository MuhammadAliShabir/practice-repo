# Simple Backend API

A minimal Express backend for testing Render deployment.

## Endpoints

### GET /
Returns "Backend is running!"

### GET /hello
Returns a greeting JSON.

### POST /echo
Returns whatever JSON body you send.

Example:
```json
POST /echo
{ "name": "test" }
