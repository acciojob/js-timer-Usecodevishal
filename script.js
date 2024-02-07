// write js code here if required
let timeContent = document.getElementById("timer");
let time = new Date();
setInterval(() => {
	time = new Date();
	timeContent.innerText = `${time}`;
},1000)
//console.log(time);

