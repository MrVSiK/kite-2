## Introduction
The project is written in Typescript. To build the project use the following command
```javascript
npm run build
```
To start the project at PORT 3000 use the following command
```javascript
npm start
```
To run a dev version using ts-node use the following command
```javascript
npm run dev
```

## Packages
- bcrypt
- mongoose
- dotenv
- jsonwebtoken
- body-parser
- express
- pino-http


## Getting Started

You need to create a _.env_ file in the root folder and define two variables inside it - SECRET and MONGO.

SECRET is a string of characters which will be used to sign JWT

MONGO is a mongodb database URI
