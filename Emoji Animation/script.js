let emo = document.querySelector(".emo")

const emos = ["🥹",
"🙃",
"😛",
"😬",
"😆",
"😁",
"🫠",
"😇",
"🥰",
"🤫",
"🫣",
"🤑",
"😷",
"🤢",
"🥵",
"🥶",
"😵",
"🥳",
"😎",
"🧐",
"😱",
"😣",
"😓",
"😤",
"😡",
"👿",
"☠️",
"🙊"];
  
emo.addEventListener('mouseover', ()=>{
  emo.innerHTML = emos[Math.floor(Math.
  random() * emos.length)];
});