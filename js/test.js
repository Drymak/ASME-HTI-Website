const request=require("request");
const bodyParser=require("body-parser");
const express=require("express")
const app=express()
const fs=require("fs")
const path = require('path')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("../../ASME-HTI-Website"))

app.get("/" ,function(req,res){
	res.sendFile('registration.html', {root: '../Pages'})

})

	for(var i=0;i<=1;i++){
app.post("/",function(req,res){
	var name=req.body.Name
	var id=req.body.ID
	var mob=req.body.Mob
	var uni=req.body.Uni
	var fac=req.body.Fac
	var learn=req.body.learn
	var email=req.body.Email
	var first=req.body.First
var second=req.body.Second
	var why=req.body.why
	var why2=req.body.why2
	var experience=req.body.experience
	var comments=req.body.comments
	console.log(name)
//	console.log(id)
//	console.log(email)
//	console.log(mob)
//	console.log(uni)
//	console.log(fac)
//	console.log(first)
//	console.log(second)
//	console.log(why)
//	console.log(why2)
//	console.log(experience)
//	console.log(comments)
	var account={"Name":name
				 ,"ID":id,
				 "email":email
				,"Mobile":mob
				,"University":uni
				,"Faculty":fac
				 ,"What will you learn from ASME-HTI?":learn
				 ,"First Commitee":first
				 ,"why the first commitee":why
				 ,"Second Commitess":second
				 ,"why the second commitee":why2
				 ,"experience":experience
				 ,"comments":comments

				}

	fs.readFile('Registration.json', function (err, data) {
    var dat = JSON.parse(data)

	dat.push(account)


    fs.writeFile("Registration.json", JSON.stringify(dat,null,4),
				 function(){console.log("done")
	})
})

	res.sendFile('success.html', {root: '../Pages/'})
		}	)}


app.listen(3000,function(){
	console.log("ASME Machine On Port 3000")
})
