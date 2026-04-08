function validate(){
let n=document.getElementById("name").value.trim()
let e=document.getElementById("email").value.trim()
let m=document.getElementById("msg").value.trim()
if(n==""||e==""||m==""){
alert("Please fill all fields")
return false
}
alert("Message sent successfully!")
return true
}
