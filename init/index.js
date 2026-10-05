const mongoose = require("mongoose");   
const initData = require("./data.js");
const Listings = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listings.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner: "6aa2ec01ae52a2328f41fdbf"}));
    await Listings.insertMany(initData.data);
    console.log("Data initialised");

};

initDB();