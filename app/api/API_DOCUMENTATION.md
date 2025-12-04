# GitHunt API Documentation

## Overview

GitHunt is a Next.js-based application that provides a platform to discover, browse, and interact with GitHub repositories. The API enables authentication with GitHub, product card management, and repository metadata retrieval.

## Table of Contents

- [Authentication](#authentication)
- [Base URL](#base-url)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Examples](#examples)

---

## Authentication

GitHunt uses OAuth 2.0 with GitHub for authentication. Users must authorize the application through GitHub's OAuth flow.

### GitHub OAuth Configuration

- **Flow Type**: Authorization Code Flow
- **Scopes**: `user:email`, `public_repo`, `read:user`
- **Callback URL**: `http://localhost:3000/api/auth/callback/github` (development)

### Environment Variables Required

```
GITHUB_ID=your_github_app_id
GITHUB_SECRET=your_github_app_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

---

## Base URL

```
http://localhost:3000/api
```

For production: `https://yourdomain.com/api`

---

## API Endpoints

### 1. Authentication Routes

#### NextAuth Routes

**Endpoint**: `/auth/[...nextauth]`

**Description**: Handles OAuth 2.0 authentication flow with GitHub

**Available Actions**:
- `GET /api/auth/signin` - Sign in page
- `GET /api/auth/callback/github` - GitHub OAuth callback
- `GET /api/auth/session` - Get current user session
- `POST /api/auth/signout` - Sign out user

**Request Example**:
```bash
curl http://localhost:3000/api/auth/session
```

**Response Example** (Session Object):
```json
{
  "user": {
    "id": "12345",
    "name": "John Doe",
    "email": "john@example.com",
    "image": "https://avatars.githubusercontent.com/u/12345",
    "login": "johndoe"
  },
  "expires": "2025-12-11T11:00:00.000Z"
}
```

**Status Codes**:
- `200 OK` - Session retrieved successfully
- `401 Unauthorized` - User not authenticated

---

### 2. Product Routes

#### Get Product Cards

**Endpoint**: `GET /products` *(To be implemented)*

**Description**: Retrieves a list of featured product cards

**Query Parameters**:
- `page` (optional, default: 1) - Pagination page number
- `limit` (optional, default: 10) - Items per page
- `sort` (optional) - Sort by: `trending`, `stars`, `forks`, `recent`

**Request Example**:
```bash
curl "http://localhost:3000/api/products?page=1&limit=10&sort=trending"
```

**Response Example**:
```json
{
  "status": "success",
  "data": [
    {
      "id": "1",
      "title": "React",
      "description": "A JavaScript library for building user interfaces",
      "owner": "facebook",
      "repo": "react",
      "stars": 200000,
      "forks": 45000,
      "language": "JavaScript",
      "url": "https://github.com/facebook/react",
      "image": "https://avatars.githubusercontent.com/u/69631?"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 50,
    "totalItems": 500
  }
}
```

**Status Codes**:
- `200 OK` - Products retrieved successfully
- `400 Bad Request` - Invalid parameters
- `500 Internal Server Error` - Server error

---

#### Get Product Details

**Endpoint**: `GET /products/:id` *(To be implemented)*

**Description**: Retrieves detailed information about a specific product

**Path Parameters**:
- `id` (required) - Product ID

**Request Example**:
```bash
curl http://localhost:3000/api/products/1
```

**Response Example**:
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "title": "React",
    "description": "A JavaScript library for building user interfaces",
    "owner": "facebook",
    "repo": "react",
    "stars": 200000,
    "forks": 45000,
    "watchers": 15000,
    "openIssues": 4500,
    "language": "JavaScript",
    "license": "MIT",
    "topics": ["javascript", "react", "frontend"],
    "url": "https://github.com/facebook/react",
    "homepage": "https://react.dev",
    "createdAt": "2013-05-24T16:15:32Z",
    "updatedAt": "2025-12-04T10:30:00Z",
    "pushedAt": "2025-12-04T09:45:00Z"
  }
}
```

**Status Codes**:
- `200 OK` - Product retrieved successfully
- `404 Not Found` - Product not found
- `500 Internal Server Error` - Server error

---

### 3. Repository Search

#### Search Repositories

**Endpoint**: `GET /search/repositories` *(To be implemented)*

**Description**: Search GitHub repositories

**Query Parameters**:
- `q` (required) - Search query
- `language` (optional) - Filter by language
- `sort` (optional) - Sort by: `stars`, `forks`, `updated`
- `order` (optional) - Order: `asc`, `desc`
- `page` (optional) - Pagination page

**Request Example**:
```bash
curl "http://localhost:3000/api/search/repositories?q=react&language=javascript&sort=stars&order=desc"
```

**Response Example**:
```json
{
  "status": "success",
  "totalCount": 50000,
  "results": [
    {
      "id": "12345",
      "name": "react",
      "fullName": "facebook/react",
      "owner": {
        "login": "facebook",
        "avatarUrl": "https://avatars.githubusercontent.com/u/69631"
      },
      "description": "A JavaScript library for building user interfaces",
      "url": "https://github.com/facebook/react",
      "stars": 200000,
      "language": "JavaScript"
    }
  ]
}
```

**Status Codes**:
- `200 OK` - Search completed successfully
- `400 Bad Request` - Invalid query
- `422 Unprocessable Entity` - Search validation failed
- `503 Service Unavailable` - GitHub API rate limit exceeded

---

## Error Handling

All errors are returned in a standardized JSON format.

**Error Response Format**:
```json
{
  "status": "error",
  "code": "ERROR_CODE",
  "message": "Human-readable error message",
  "details": {}
}
```

**Common Error Codes**:

| Code | Status | Description |
|------|--------|-------------|
| `UNAUTHORIZED` | 401 | User not authenticated |
| `FORBIDDEN` | 403 | User lacks required permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `INVALID_REQUEST` | 400 | Invalid request parameters |
| `RATE_LIMIT_EXCEEDED` | 429 | API rate limit exceeded |
| `GITHUB_API_ERROR` | 503 | GitHub API error |
| `INTERNAL_ERROR` | 500 | Internal server error |

---

## Rate Limiting

### Limits

- **Authenticated Requests**: 5,000 requests per hour
- **Unauthenticated Requests**: 60 requests per hour
- **Search Requests**: 10 requests per minute

### Headers

All API responses include rate limit information:

```
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
X-RateLimit-Reset: 1733308800
```

### Rate Limit Exceeded Response

```json
{
  "status": "error",
  "code": "RATE_LIMIT_EXCEEDED",
  "message": "Rate limit exceeded. Please try again later.",
  "retryAfter": 3600
}
```

---

## Examples

### Example 1: User Login Flow

```bash
# 1. Redirect user to GitHub OAuth
https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&scope=user:email,public_repo&redirect_uri=http://localhost:3000/api/auth/callback/github

# 2. Get session after login
curl http://localhost:3000/api/auth/session

# Response
{
  "user": {
    "email": "user@example.com",
    "name": "User Name",
    "image": "https://avatars.githubusercontent.com/u/123456"
  },
  "expires": "2025-12-11T11:00:00Z"
}
```

### Example 2: Get Products

```bash
curl -X GET "http://localhost:3000/api/products?page=1&limit=5" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Response
{
  "status": "success",
  "data": [...],
  "pagination": {...}
}
```

### Example 3: Search Repositories

```bash
curl -X GET "http://localhost:3000/api/search/repositories?q=nextjs&language=typescript&sort=stars" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Response
{
  "status": "success",
  "totalCount": 25000,
  "results": [...]
}
```

---

## File Structure

```
app/api/
├── auth/
│   └── [...nextauth]/
│       └── route.ts              # NextAuth authentication handler
├── products/                      # Product endpoints (to be implemented)
├── search/                        # Search endpoints (to be implemented)
└── API_DOCUMENTATION.md           # This file
```

---

## Development

### Running the Development Server

```bash
npm run dev
```

Server runs on `http://localhost:3000`

### Testing Endpoints

Use tools like Postman, Thunder Client, or curl to test endpoints:

```bash
# Test authentication
curl http://localhost:3000/api/auth/session

# Test with authentication header
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/api/products
```

---

## Changelog

### Version 1.0.0 (Current)
- ✅ GitHub OAuth authentication
- ✅ Authentication routes setup
- ⏳ Product API endpoints (in development)
- ⏳ Repository search functionality (planned)
- ⏳ User profile endpoints (planned)

---

## Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Contact the development team

---

**Last Updated**: December 4, 2025
**API Version**: 1.0.0
