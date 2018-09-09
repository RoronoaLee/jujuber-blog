let fileToDelete = ["./src/route", "./src/appRouter.js", "./src/homeConfig.json"];
let rmrf = require("rimraf");

fileToDelete.forEach(file => rmrf(file,(err)=>{}));
