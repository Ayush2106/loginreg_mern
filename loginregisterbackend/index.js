import express from "express"
import cors from "cors"
import {MongoClient}  from "mongodb"
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName="myLoginRegDB";
main().catch(err => console.log(err));
const db = client.db(dbName);
const userCollection = db.collection('User');
async function main() {

try {
    await client.connect();
    console.log('Mongo connected')
} catch(error) {
    console.log(error)
    process.exit()
}

}

//routes..
app.get("/",(req,res)=>{
    res.send("hello ji ")
})
app.post("/login",async (req,res)=>{
    // res.send("MY API login ")
    try{
        const {email , password} = req.body // isse value uthai 
        const user={
            email:email,
            password:password
        };
        const userExists=(await userCollection.find({email:email}).toArray()).length!=0?true:false;
        // console.log(userExists);
        if(userExists){
            const passsame = (await userCollection.find({password:password}).toArray()).length!=0?true:false;
            if(passsame){
              return  res.send({
            'status':'login successful',user:user
                })
            }else{
               return  res.send({
                     'status':'password didnt match'
               })
            }
        }
       return res.send({
            'status':'user not registered'
        })
    }catch(e){
console.log(e);
return res.send({
    'error':e
})
    }
    
})
 app.post("/register",async (req,res)=>{
   try{
     
    const {name ,email , password} = req.body // isse value uthai 
    const user={
        name:name,
        email:email,
        password:password
    };
    const userExists=(await userCollection.find({email:email}).toArray()).length!=0?true:false;
    console.log(userExists);
    if(userExists){
        // console.log('already registered')
      return  res.send({
            'status':"Already existed"
        });
    }else{
        await userCollection.insertOne(user);
      return  res.send({
            'status':"Registered"
        });
    }

   }catch(e){
console.log(e)
  return  res.send({
        'error':e
    });
   }
  
   
})
app.listen(9002,()=>{
    console.log("backend started at 9002")
})