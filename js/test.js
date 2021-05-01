const request=require("request");
const bodyParser=require("body-parser");
const express=require("express")
const mongoose=require('mongoose')
const app=express()
const fs=require("fs")
const path = require('path')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("../../ASME-HTI-Website"))


mongoose.connect("mongodb+srv://AsmeDB:asme2020DB@cluster0.vt4oj.mongodb.net/AsmeDB?retryWrites=true&w=majority",{
	useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:true})

const asmeSchema=new mongoose.Schema({
	name:{type:String}
	,HTI_id:{type:String}
	,mob:{type:String}
	,university:{type:String}
	,faculty:{type:String}
	,What_will_you_learn_from_ASME_HTI:{type:String}
	,email:{type:String}
	,first_committee:{type:String}
	,why_first_committee:{type:String}
	,second_committee:{type:String}
	,why_first_committee:{type:String}
	,experience:{type:String}
	,comments:{type:String}

})

const student=mongoose.model("student",asmeSchema)

app.get("/registeration_asme" ,function(req,res){
	res.sendFile('registration.html', {root: '../Pages'})

})

//	for(var i=0;i<=1;i++){
app.post("/registeration_asme",function(req,res){
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
	

const entry=new student({
	name:name
	,HTI_id:id
	,email:email
	,mob:mob
	,university:uni
	,faculty:fac
	,What_will_you_learn_from_ASME_HTI:learn
	,first_committee:first
	,why_first_committee:why
	,second_committee:second
	,why_first_committee:why2
	,experience:experience
	,comments:comments

})
entry.save()

	res.sendFile('success.html', {root: '../'})
		}	)


app.listen(3000,function(){
	console.log("ASME Machine On Port 3000")
})
