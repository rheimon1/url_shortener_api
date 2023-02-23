# URL Shortener API

NodeJs Rest API using Clean Architecture, Typescript and Design Patterns


## Instructions

1.  To configure database server address, url expiry time, url prefix and port the server will listen on. It is necessary to create an .env file at the root of the project and define the following environment variables:

Example:

```env
MONGO_URL=mongodb://localhost:27017/url-shortener
BASE_URL_PREFIX=http://localhost:3333
PORT=3333
URL_EXPIRES_AT_IN_HOURS=24
```

2. It is necessary to have at least version 16 of NodeJS, along with a package manager, such as Yarn or NPM, to proceed with the installation of the application;

3. To proceed with the installation, just use the commands:

- Using Yarn
  1. yarn
  2. yarn build
  3. yarn start

- Using NPM
  1. npm install
  2. npm run build
  3. npm run start

After executing the commands successfully, the following message will appear in the terminal:

Server running at <BASE_URL_PREFIX> (url configured in environment variables in BASE_URL_PREFIX)

4. With the application started, it is possible to communicate with the API through two endpoints:

## Endpoints

### Shorten Url

```http
POST <BASE_URL_PREFIX>/shortenUrl
```

the <BASE_URL_PREFIX> is ​​equivalent to the server url defined in the environment variables

#### Body:

```javascript
{
  "originalUrl" : string
}
```

The `originalUrl` attribute contains the URL to be shortened.


#### Response

```javascript
{
  "success" : boolean
  "data": string
}
```

The `success` attribute indicates the url was shortened successfully or not.

The `data` attribute contains the shortened url.


### Redirect Url

```http
GET <BASE_URL_PREFIX>/:urlId
```

the <BASE_URL_PREFIX> is ​​equivalent to the server url defined in the environment variables

#### Params:

```javascript
{
  "urlId" : string
}
```

The `urlId` attribute contains the URL shortened.


#### Response

Redirects to original url or returns 404 indicating URL not found

#### Status Codes

API returns the following status codes:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |