import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const port = process.env.PORT || 3000;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath.endsWith("/")) reqPath += "index.html";
  let filePath = path.join(root, reqPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (!path.extname(filePath)) {
        filePath = path.join(root, reqPath + ".html");
        fs.readFile(filePath, (err2, data2) => {
          if (err2) {
            res.writeHead(404);
            res.end("Not found: " + reqPath);
          } else {
            res.writeHead(200, { "Content-Type": types[".html"] });
            res.end(data2);
          }
        });
        return;
      }
      res.writeHead(404);
      res.end("Not found: " + reqPath);
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
