let fileToDelete = ["./src/route", "./src/appRouter.js", "./src/homeConfig.json"];
let rmrf = require("rimraf");

const del =async  ()=> {
  for (let file of fileToDelete) {
   await rmrf(file, (err)=>{})
  }
  await require('fs').mkdir("./src/route",(err)=>{});
};

del()