// date
const clockTitle = document.querySelector(".js-clock");
const mainDate = document.querySelector(".main");



// function dDay() {
//   const ChristmasDate = new Date("saveUserDate");
//   const toDay = new Date();

//   const dDayDate = ChristmasDate - toDay;

//   const dDay = Math.floor(dDayDate / (1000 * 60 * 60 * 24));
//   const dHour = Math.floor((dDayDate / (1000 * 60 * 60 )) % 24);
//   const dMin = Math.floor((dDayDate / (1000 * 60 )) % 60 );
//   const dSec = Math.floor(dDayDate / 1000 % 60);

//   clockTitle.innerText = `${dDay}일 ${dHour}시간 ${dMin}분 ${dSec}초`
  
// }

// dDay()
// setInterval(dDay, 1000);

// day-input

const loginForm = document.querySelector(".login-form");
const dDayInput = document.querySelector(".login-form input");
const clickBtn = document.querySelector(".click-btn");

function onDateSubmit(event) {
  const dateVlaue = dDayInput.value;
  mainDate.classList.remove("hidden");
  loginForm.classList.add("hidden");
  localStorage.setItem("userDate", dateVlaue);

  const saveUserDate = localStorage.getItem("userDate");

  const ChristmasDate = new Date(saveUserDate);
  const toDay = new Date();
  const dDayDate = ChristmasDate - toDay;

  const dDay = Math.floor(dDayDate / (1000 * 60 * 60 * 24));
  const dHour = Math.floor((dDayDate / (1000 * 60 * 60 )) % 24);
  const dMin = Math.floor((dDayDate / (1000 * 60 )) % 60 );
  const dSec = Math.floor(dDayDate / 1000 % 60);

  clockTitle.innerText = `${dDay}일 ${dHour}시간 ${dMin}분 ${dSec}초`
  
  setInterval(onDateSubmit, 1000);
}

clickBtn.addEventListener("click", onDateSubmit);

