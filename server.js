import express from "express";
import history from "connect-history-api-fallback";
import path from "node:path";
import compression from "compression";

function setNoCache(res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Cache-Control", "no-cache");
  }
  
  function setLongTermCache(res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }

const app = express();
app.disable("x-powered-by");

// support non-root url by proxying the request to index.html
app.use(history({
}))

// use gzip compression
app.use(compression());

app.use(express.static(path.join(import.meta.dirname, "dist"), {
    extensions: ["html"],
    setHeaders(res, reqpath) {
        // html is not cached
        if (reqpath.match(/\.html$/)) {
            setNoCache(res);
            return;
        }

        // files in /assets are cached for one year
        // this works because vite adds a content hash in the filename
        if (reqpath.startsWith("/assets/")) {
            setLongTermCache(res);
        }
    },
}));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
