const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    return res.end(
      JSON.stringify({
        success: true,
        name: "IMO Diamond Store BD",
        message: "Server Running Successfully"
      })
    );
  }

  if (req.url === "/api/status") {
    return res.end(
      JSON.stringify({
        status: "online",
        version: "1.0.0"
      })
    );
  }

  res.statusCode = 404;

  res.end(
    JSON.stringify({
      success: false,
      message: "Route Not Found"
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
