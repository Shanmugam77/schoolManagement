let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
let bodyparser=require("body-parser")
let studentlist=require("./modules/studentSchema")
let teacherlist=require("./modules/teacherSchema")
let admin=require("./modules/adminSchema")


mongoose.connect("mongodb+srv://shanmugam070702:atlas1234@shanmugam.mo4ojoq.mongodb.net/SchoolManagement?retryWrites=true&w=majority&appName=shanmugam")
mongoose.connection
.once("open",()=>{console.log("db connected");})
.on("error",()=>{console.log("error in db connection");})



let app=express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.post("/teacherregister",(req,res)=>{
    teacherlist.findOne({phone:req.body.phone})
    .then((x)=>{
        if (x!=null) {
            res.json("alreadyateacher")
        }
        else{
            console.log(req.body);
            let details=new teacherlist(req.body)
            details.save()
            .then((x)=>{res.json(x)})
            .catch((err)=>{res.json(err)})
        }
    })
    
})
app.get("/getteacherlist",(req,res)=>{
    teacherlist.find()
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})

app.get("/singleteacher/:id",(req,res)=>{
    let id=req.params.id
    teacherlist.findOne({_id:id})
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})

app.post("/updateteacher/:id",(req,res)=>{
     let id=req.params.id
     teacherlist.updateOne({_id:id},req.body)
     .then((x)=>{res.json(x)})
     .catch((err)=>{res.json(err)})
})
app.delete("/deleteteacher/:id",(req,res)=>{
    let id=req.params.id
    teacherlist.deleteOne({_id:id})
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})

app.post("/loginteacher",(req,res)=>{
    console.log(req.body.phone);
    teacherlist.findOne({phone:req.body.phone})
    .then((x)=>{
        if (x!=null) {
            res.json(x)
        }
        else{
            res.json("usernotfound")
        }
    })
})
//  --------------------------------------------studen---------------------------------------
app.post("/studentregister",(req,res)=>{
    studentlist.findOne({studentid:req.body.studentid})
    .then((x)=>{
        if (x!=null) {
            res.json("alreadyastudent")
        }
        else{
            console.log(req.body);
            let details=new studentlist(req.body)
            details.save()
            .then((x)=>{res.json(x)})
            .catch((err)=>{res.json(err)})
        }
    })
    
})
app.get("/getstudentlist",(req,res)=>{
    studentlist.find()
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})
app.get("/singlestudent/:id",(req,res)=>{
    let id=req.params.id
    studentlist.findOne({_id:id})
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})
app.post("/updatestudent/:id",(req,res)=>{
    let id=req.params.id
    studentlist.updateOne({_id:id},req.body)
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})
app.delete("/deletestudent/:id",(req,res)=>{
    let id=req.params.id
    studentlist.deleteOne({_id:id})
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})
app.post("/loginstudent",(req,res)=>{
    console.log(req.body.studentid);
    studentlist.findOne({studentid:req.body.studentid})
    .then((x)=>{
        if (x!=null) {
            res.json(x)
        }
        else{
            res.json("usernotfound")
        }
    })
})
// ---------------------------admin-------------------
app.post("/loginadmin",(req,res)=>{
    console.log(req.body.phone);
    admin.findOne({phone:req.body.phone})
    .then((x)=>{
        if (x!=null) {
            res.json(x)
        }
        else{
            res.json("usernotfound")
        }
    })
})

app.listen(9424,()=>{console.log("server listen at port no 9424");})