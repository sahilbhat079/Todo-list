const  inputtext = document.querySelector('#add-text');

const container = document.querySelector('.list-container');



function fun(){
if(inputtext.value=== ""){

    alert ("must enter some task");
}
else{
    const li=document.createElement('li');
    li.innerText=`${inputtext.value}`;
    container.appendChild(li);
   
    let span = document.createElement("span")
    span.innerHTML= "\u00d7";
    li.appendChild(span);
}
inputtext.value="";
savedata();
}



container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
});



function savedata(){
    localStorage.setItem("data",container.innerHTML);
}

function showdata(){
container.innerHTML =localStorage.getItem("data");
}

showdata();