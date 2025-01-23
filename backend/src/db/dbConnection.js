import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connect to mongo")
}).catch(()=>{
    console.log("not connect to mongo")
})