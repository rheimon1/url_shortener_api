# URL Shortening


## Endpoint

POST - /shortening

payload:

`{
  originalUrl: http://url_shortener_example.com    
}`


## Use Case

- Receive the origin URL as a param;
- For the long URL should allocate 2 KB (2048 bytes);
- Generate a unique ID that corresponds to the origin URL;
- This ID is added to the end of the base URL, i.e, the URL of application;
- The overall length of short URL should be 22 bytes which include 11 bytes of shortened string and another 11 bytes for the prefix (e.g www.us.com/);
- Each short URL generated should have an expiry of 24 hours associated with it; (TTL?)
- The generated URL and the origin URL are stored in the database;


#

# URL Redirection

## Endpoint

POST - /redirection

`{
  shortenedUrl: http:shortend_url
}`

## Use Case

- Receive the Shortened URL;
- Search URL in database;
- If URL is found, redirect to original URL;
- Else, return Not Found