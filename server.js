const express = require("express");
const Response = require("express");
const history = require('connect-history-api-fallback')
const path = require('path');
const serveStatic = require("serve-static");
const compression = require("compression");

function setNoCache(res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Cache-Control", "public, no-cache");
  }
  
  function setLongTermCache(res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }

app = express();

// support non-root url by proxying the request to index.html
app.use(history({
}))

// use gzip compression
app.use(compression());

app.use(serveStatic(path.join(__dirname + "/dist"), {
    extensions: ["html"],
    setHeaders(res, path) {
        // html and service-worker are not cached at all
        if (path.match(/(\.html|\/service-worker\.js)$/)) {
            setNoCache(res);
            return;
        }

        // js, css and images are cached for one year
        // this works because webpack adds a chunk hash in the filename
        if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|json|webp)$/)) {
            setLongTermCache(res);
        }
    },
}));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});