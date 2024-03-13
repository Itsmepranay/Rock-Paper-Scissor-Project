let buttons=document.querySelectorAll(".button");
buttons.forEach(i => {
    i.addEventListener("mouseover",()=>{
        i.style.backgroundColor="lightGray";
        i.style.color="white";
    })
    i.addEventListener("mouseleave",()=>{
        i.style.backgroundColor="";
        i.style.color="black"
    })
    
});
let selected;
let comscore=0;
let myscore=0;
let count=0;
let newnode=document.createElement("p");
newnode.setAttribute("id","colo");
for(let i=0;i<(document.getElementsByClassName("button").length);i++){
    document.getElementsByClassName("button")[i].addEventListener("click",(count)=>{
        selected=document.getElementsByClassName("button")[i].getAttribute("id");
        let random=Math.floor(Math.random(1)*3);
        console.log(random)
        let computer;
        if(random==0){
            computer="btn1";
        }else if(random==1){
            computer="btn2";
        }else if(random==2){
            computer="btn3";
        }
        console.log("computer "+computer);
        console.log(selected)
        if(computer==selected){
            console.log("its a draw");
            document.getElementById("para1").innerHTML="its a draw";
            newnode.innerHTML=" "+myscore+" :"+" "+comscore;
            
        }else if(computer=="btn1" && selected=="btn3"){
            console.log("you lost");
            document.getElementById("para1").innerHTML="you lost";
            comscore++;
            newnode.innerHTML=" "+myscore+" :"+" "+comscore;
        }else if(computer=="btn1" && selected=="btn2"){
            console.log("you won");
            document.getElementById("para1").innerHTML="you won";
            myscore++;
            newnode.innerHTML=" "+myscore+" :"+" "+comscore;
        }else if(computer=="btn2" && selected=="btn1"){
            console.log("you lost");
            document.getElementById("para1").innerHTML="you lost";
            comscore++;
            newnode.innerHTML=" "+myscore+" :"+" "+comscore;
        }else if(computer=="btn2" && selected=="btn3"){
            console.log("you won");
            document.getElementById("para1").innerHTML="you won";
            myscore++;
            newnode.innerHTML=" "+myscore+" :"+" "+comscore;
        }else if(computer=="btn3" && selected=="btn1"){
            console.log("you won");
            document.getElementById("para1").innerHTML="you won";
            myscore++;
            newnode.innerHTML=" "+myscore+" :"+" "+comscore;
        }else if(computer=="btn3" && selected=="btn2"){
            console.log("you lost");
            document.getElementById("para1").innerHTML="you lost";
            comscore++;
            newnode.innerHTML=" "+myscore+" :"+" "+comscore;
        }
        count++;
        
    })
    

}
document.getElementById("para2").append(newnode);
if(count>=10){
    
}
let colo=document.getElementById("colo");
colo.style.borderBlock="red";