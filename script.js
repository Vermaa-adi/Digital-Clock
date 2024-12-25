let hours=document.getElementById("hrs");
let minutes=document.getElementById("min");
let second=document.getElementById("sec");
let date=document.getElementById("date");
let month=document.getElementById("month");
let day=document.getElementById("day");
let year=document.getElementById("year");

let months=["January","February","March","April","May","June","July","August","September",
    "October","November","December"];
let days=["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];


setInterval(()=>{
    let time=new Date;

    hours.innerHTML=time.getHours();
    minutes.innerHTML=time.getMinutes();
    second.innerHTML=time.getSeconds();
    date.innerHTML=time.getDate();
    month.innerHTML=months[time.getMonth()];
    year.innerHTML=time.getFullYear();
    day.innerHTML=days[time.getDay()];
    am.innerHTML=time.getHours()>=12?"PM":"AM";
},1000)

