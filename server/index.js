const http = require("http");
const fs = require("fs");
const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Server</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='text' type='text'/><input type='file' name='file' /> <button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsed = Buffer.concat(body).toString();
      console.log(parsed);
      const message = parsed.split("=");

      fs.writeFileSync("test.txt", message[1]);
    });

    res.setHeader("location", "/");
    res.statusCode = 302;
    return res.end();
  }
});
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
