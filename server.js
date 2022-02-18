const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
   static: '',
});

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

if (process.env.NODE_ENV === "production") {
   server.use(express.static("build"));

   server.get("*", (req, res) =>
      res.sendFile(path.resolve("build", "index.html"))
   );
}

server.listen(PORT, () => {
   console.log('Server is running');
});