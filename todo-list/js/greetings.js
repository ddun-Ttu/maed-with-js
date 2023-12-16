const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetings = document.querySelector("#greetings");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 브라우저의 기본 호출 동작을 막아주는 function
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "안녕 " + username; 구식 코드

  // 반복되는 코드이기 때문에 function paintGreeting을 만들어 코드를 축소시킴
  // greeting.innerText = `안녕 ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME)

  paintGreeting(username);
}
sasddasda;
function paintGreeting(username) {
  const salutation = [
    "오늘 기분은 어때요?",
    "오늘도 좋은하루 보내세요",
    "즐거운 하루가 시작되었어요!",
    "할 수 있어요! 화이팅!",
    "오늘 날씨는 어때요?",
    "잘 주무셨나요?",
    "오늘은 어떤 목표를 세웠나요?",
    "꿈은 이루어질 거예요!",
  ];
  const greetingsHi = salutation[Math.floor(Math.random() * salutation.length)];

  greeting.innerText = `${username}님 ${JSON.stringify(greetingsHi)}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreeting(savedUsername);

  // 반복되는 코드이기 때문에 function paintGreeting을 만들어 코드를 축소시킴
  // greeting.innerText = `반가워 ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
}

// html 자체 기능(input)을 쓰지않고 js로만 구현한 코드

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// function onLoginBtnClick() {
//     const username = loginInput.value;
//     if (username === "") {
//         alert("이름을 적어주세요");
//     } else if (username.length > 15) {
//         alert("이름이 너무 길어요")
//     }
// }

// loginButton.addEventListener("click", onLoginBtnClick);
