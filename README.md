# express-ftl

Freemarker engine for express.

#### Usage

```js
let app = express()

express.set('views', 'path/to/views')
express.set('view engine', 'ftl')
express.engine('ftl', require('express-ftl'))
```
