# kawaii api
The [kawaii api](https://kawaii.red/) from Error44 as [npm package](https://www.npmjs.com/package/kawaii-api)

# Download
```
npm i kawaii-api
```

<<<<<<< HEAD
# Examples
## JavaScript
```js
const { Kawaii } = require("kawaii-api");

const api = new Kawaii("token");

api.get("gif", "kiss").then((result) => {
        console.log(result);
    });

api.endpoints("gif").then((result) => {
        console.log(result);
    });

// or async/await

const get = async() => {
    const result = await api.get("gif", "kiss");
    console.log(result);
}

const endpoints = async() => {
    const result = await api.endpoints("gif");
    console.log(result);
}
```
=======
# Example
```js
const { Kawaii } = require("kawaii-api")
>>>>>>> f2a02a386cf0b3b98e96ce363c6c2fbde425fa23

## TypeScript
```ts
import { Kawaii } from "kawaii-api";

const api = new Kawaii("token");

api.get("gif", "kiss").then((result) => {
    console.log(result);
});

api.endpoints("gif").then((result) => {
    console.log(result);
});

// or async/await

const get = async() => {
    const result = await api.get("gif", "kiss");
    console.log(result);
}

<<<<<<< HEAD
const endpoints = async() => {
    const result = await api.endpoints("gif");
    console.log(result);
}
```
=======
api.endpoints("gif").then(result => console.log(result))
```
>>>>>>> f2a02a386cf0b3b98e96ce363c6c2fbde425fa23
