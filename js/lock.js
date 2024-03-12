let gifPlay = document.getElementById("gifPlay");
const gifes = [
  "../pictures/whatis.gif",
  "../pictures/silly.gif",
  "../pictures/huh.gif",
  "../pictures/ghose.gif",
  "../pictures/come.gif",
  "../pictures/boo.gif",
  "../pictures/think.gif",
  "../pictures/scary.gif",
  "../pictures/idk.gif",
];

const multiText = [
    "Huhhhhhhhhhh?",
    "Reaaaaaaaaly?",
    "Are you serious?",
    "🙂🙂🙂🙂🙂",
    "Do you even love me?",
    "Forgive it.",
    "I will tell you!",
    "you are not her!👻"
]


let submitText = document.getElementById("submit");
let anni = document.getElementById("anni");
let kokobd = document.getElementById("kokobd");
let kalaybd = document.getElementById("kalaybd");
let favc = document.getElementById("favc");
let failCount = 0
gifPlay.src = gifes[failCount];

submitText.onclick = () => {
  if (
    anni.value.length != 0 &&
    kokobd.value.length != 0 &&
    kalaybd.value.length != 0 &&
    favc.value.length != 0
  ) {
    if (
      anni.value.trim().toUpperCase() == "1242022" &&
      kokobd.value.trim().toUpperCase() == "261998" &&
      kalaybd.value.trim().toUpperCase() == "9122009" &&
      favc.value.trim().toUpperCase() == "PURPLE"
    ) {
        submitText.href = "./login.html"
    } else {
        
        failCount++;
        if (failCount < gifes.length) {
            gifPlay.src = gifes[failCount];
            submitText.innerHTML = multiText[failCount-1];
        }else {
            return;
        }
    }
  } else {
    submitText.innerHTML = "Care to fill? 🙂"
  }
};
