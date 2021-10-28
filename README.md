# kawaii api
The [kawaii api](https://kawaii.red/) from Error44 as npm package

# Download
```
npm install kawaii-api
```

# Example
```js
const { Kawaii } = require("kawaii-api")

const api = new Kawaii("token")

api.get("gif", "kiss").then(result => console.log(result))

api.endpoints("gif").then(result => console.log(result))
```
