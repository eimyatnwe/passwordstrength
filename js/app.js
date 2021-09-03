// UI
const background = document.getElementById("background");
const password = document.getElementById("password");
const email = document.getElementById("email");
const eyeicon = document.getElementById("eye");
const form = document.querySelector(".form");


password.addEventListener("input",(e)=>{
	// console.log(e.target);
	// console.log(e.target.value);

	let input = e.target.value;
	let inputlength = input.length;
	// console.log(inputlength);

	const blur = 20 - inputlength * 2;
	background.style.filter = `blur(${blur}px)`;
});

eyeicon.addEventListener("click",()=>{
	if(eyeicon.classList.contains("fa-eye")){

		eyeicon.classList.replace("fa-eye","fa-eye-slash");
		password.setAttribute("type","text");

	}else{

		eyeicon.classList.replace("fa-eye-slash","fa-eye");
		password.setAttribute("type","password");
	}
});


// function checkemail(input){

// 	 const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     // return re.test(String(email).toLowerCase());

//     if(re.test(input.value)){
//     	showsuccess(input);
//     }else{
//     	showerror(input,"Email is not valid");
//     }
// }



// form.addEventListener("submit",(e)=>{

// 	e.preventDefaut();

// 	checkemail(email);

// });