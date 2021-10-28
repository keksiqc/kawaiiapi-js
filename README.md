# kawaii api
The [kawaii api](https://kawaii.red/) from Error44 as [npm package](https://www.npmjs.com/package/kawaii-api)

# Download
```
npm i kawaii-api
```

# Example
```js
const { Kawaii } = require("kawaii-api")

const api = new Kawaii("token")

api.get("gif", "kiss").then(result => console.log(result))

api.endpoints("gif").then(result => console.log(result))
```
