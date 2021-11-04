const _PORT = 3000;

import * as express from "express";
import {Runner} from "./runner";

const app = express.default();

app.use(express.json());

/*RESTful API*/

app.post("/runcode", function (req, res) {
  var run = new Runner(req);
  run.run();
  res.send(run.output);
});



app.listen(_PORT, () => {
  console.log("server started at port " + _PORT);
});
