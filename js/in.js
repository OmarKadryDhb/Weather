var myhttp=new XMLHttpRequest();
var SerachInput=document.getElementById("SerachInput");
var weatherData=document.getElementById("weatherData");
var myData=[]

searchWeather("cairo");

SerachInput.addEventListener("input",function(){
        searchWeather(SerachInput.value)
        
})

function searchWeather(city){
    
myhttp.open("GET"
,
`https://api.weatherapi.com/v1/forecast.json?key=e9d9b7626fc74d36a28113811230808&q=${city}&days=3`)

myhttp.send();

myhttp.addEventListener('readystatechange',function() {
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d2 = new Date();
let name = month[d2.getMonth()];
  
  if (myhttp.readyState==4 && myhttp.status==200) {
        myData=JSON.parse(myhttp.response);
        
        var card1=
        `  <div class="card-header d-flex justify-content-between p-2">
            <small class="">${day}</small>
            <small class="">${d.getDate()+name}</small>
          </div>
          <div class="card-body ps-2">
            <h5 class="card-title text-white">${myData.location.name}</h5>
            <h1 class="card-text text-white">${myData.current.temp_c}<i class="fa-solid fa-o fs-1"></i>C  <img src="${myData.current.condition.icon}" alt=""></h1>
            <h6 class="mt-3 text-info">${myData.forecast.forecastday[0].day.condition.text}</h6>
            <div class="card-footer w-50 d-flex justify-content-between">
            <div class="ineer">
              <i class="fa-solid fa-umbrella"></i>
              <small>${myData.current.wind_mph}%</small>
            </div>
            <div class="ineer">
              <i class="fa-solid fa-wind"></i>
              <small>${myData.current.wind_kph}km/h</small>
            </div>
            <div class="ineer">
              <i class="fa-brands fa-cloudscale"></i>
              <small>East</small>
            </div>
          </div>
          </div>
        `
        document.getElementById("data1").innerHTML=card1;
        
        var card2=
      `
        <div class="card-header text-center p-2">
          <small class="">${weekday[d.getDay()+1]}</small>
        </div>
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <img src="${myData.forecast.forecastday[1].day.condition.icon}" alt="">
        <h3 class="card-title text-white">${myData.forecast.forecastday[1].day.maxtemp_c}</h3>
        <span class="card-text text-white">${myData.forecast.forecastday[1].day.mintemp_c}</span>
        <h6 class="mt-3 text-info">${myData.forecast.forecastday[1].day.condition.text}</h6>
        </div>`
        document.getElementById("data2").innerHTML=card2    
        
        var card3=
        `<div class="card-header text-center p-2">
          <small class="">${weekday[d.getDay()+2]}</small>
        </div>
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="${myData.forecast.forecastday[2].day.condition.icon}" alt="">
          <h3 class="card-title text-white">${myData.forecast.forecastday[2].day.maxtemp_c}</h3>
          <span class="card-text text-white">${myData.forecast.forecastday[2].day.mintemp_c}</span>
          <h6 class="mt-3 text-info">${myData.forecast.forecastday[2].day.condition.text}</h6>
        </div>
          `
          document.getElementById("data3").innerHTML=card3;    
        
  }
})

}

/* <i>${myData.forecast.forecastday[1].day.condition.icon}</i> */
        