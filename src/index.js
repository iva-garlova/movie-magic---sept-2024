import express from "express";

import routes from "./routes.js";
import handlebarsinit from "./config/handlebarsinit.js";
import expressinit from "./config/expressinit.js";
import mongooseInit from "./config/mongooseInit.js";




const app = express();

handlebarsinit(app);
expressinit(app);
mongooseInit();

app.use(routes);



app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));