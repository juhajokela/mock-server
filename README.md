# mock-server

A service for generating mock HTTP responses.

## Note

Due to a compatibility with Google Cloud Function deployment, the structure of the project is a bit different than usually.

## Install & Start

```
npm install && npm start
```

## Try

Request: `/json?value=demo&obj[type]=mock&obj[value]=demo`

Response:
```
{"value":"demo","obj":{"type":"mock","value":"demo"}}
```

## Google Cloud Function

This project is Google Cloud Function compatible.
You can deploy this repository as Google Cloud Function.
