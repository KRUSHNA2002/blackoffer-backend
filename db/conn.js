

require('dotenv').config();
const mongoose=require("mongoose");


const DB="mongodb+srv://waghumbarekrushna143:Krushna@cluster0.n7hc9to.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect(DB,{

    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{console.log("connection start")}).catch((error)=>{console.log(error.message)})