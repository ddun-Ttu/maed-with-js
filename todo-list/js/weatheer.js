const API_KEY = "4ea02e8a6f01b304c7cd90473752b704";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:last-child");
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${Math.floor(data.main.temp)}˚C`;})
    // Javascript가 브라우저에 요청하여 API url에 방문하지 않아도 url내부의 자체정보를 브라우저로 가져옴 (Network 탭에서 확인)
    }

//     fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//         const weather  = document.querySelector("#weather span:first-child");
//         const city  = document.querySelector("#weather span:last-child");
//         city.innerText = data.name;
//         weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
//     });
// }
function onGeoError() {
    alert("당신의 위치를 찾는데 실패하였습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);