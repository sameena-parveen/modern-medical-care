let form=document.getElementById("form")
form.addEventListener("submit",function(){
    event.preventDefault()
    let username=form.username.value;
    let number=form.number.value;
    
    let userobj={username,number}
    fetch("https://stone-crystal-eater.glitch.me/")

.then((res)=>res.json())
    .then((data)=>{
        let user =data.filter((el,i) =>el.email==email);
        if(user.length!=0){
            //user present
            alert ("user already registered,please login")
        }else{
            //user is not present
            fetch("https://stone-crystal-eater.glitch.me/",{
                method:"post",
                headers:{
                    "content-type":"application/json",
                },
                body:json.stringify(userobj),
            }).then(()=>{
                alert("login succeessful")
            })
        }
    }).catch((err)=>{
        console.log(err);
        alert("something went wrong,please try again later")
    })
})


// alert("login successful")
// })