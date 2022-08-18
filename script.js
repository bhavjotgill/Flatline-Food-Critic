function login(){
    window.open("login.html","_parent");
}
function signup(){
    window.open("signup.html","_parent");
}
function ordernow(){
    window.open("order_now_button/testing.html","_parent");
}

// 
function decrement(){
	document.getElementById("input").stepDown();
}
function increment(){
	document.getElementById("input").stepUp();
}
 
// 
function decrement2(){
	document.getElementById("input2").stepDown();
}
function increment2(){
	document.getElementById("input2").stepUp();
}
// 
function decrement3(){
	document.getElementById("input3").stepDown();
}
function increment3(){
	document.getElementById("input3").stepUp();
}
 // 
function decrement4(){
	document.getElementById("input4").stepDown();
}
function increment4(){
	document.getElementById("input4").stepUp();
}
 // 
function decrement5(){
	document.getElementById("input5").stepDown();
}
function increment5(){
	document.getElementById("input5").stepUp();
}
 // 
function decrement6(){
	document.getElementById("input6").stepDown();
}
function increment6(){
	document.getElementById("input6").stepUp();
}
 // 
function decrement7(){
	document.getElementById("input7").stepDown();
}
function increment7(){
	document.getElementById("input7").stepUp();
}
 // 
function decrement8(){
	document.getElementById("input8").stepDown();
}
function increment8(){
	document.getElementById("input8").stepUp();
}
 // 
function decrement9(){
	document.getElementById("input9").stepDown();
}
function increment9(){
	document.getElementById("input9").stepUp();
}
 
// JQuery Dark mode
$(document).ready(function(){
    $("#adjust").click(function(){
        $("body").toggleClass("dark1");
        $("#adjust").toggleClass("dark1");
        $("#search-input").toggleClass("dark1");
        $(".search-bar").toggleClass("dark1");
        $("input").toggleClass("dark2");
        $(".fa-search").toggleClass("dark3");
        $(".fa-microphone").toggleClass("dark3");
        $("#navbar ul li a").toggleClass("dark1");
        $("h1").toggleClass("dark3");
        $("label").toggleClass("dark3");
        $(".pqr").toggleClass("dark1");
        $("input").toggleClass("dark5");
        $("textarea").toggleClass("dark5");
        $("input").toggleClass("dark6");
        $("textarea").toggleClass("dark6");
        // $(".fa-adjust").toggleClass("dark5");
        // $("").toggleClass("");
        // $("").toggleClass("");
        // $("").toggleClass("");
        // $("").toggleClass("");
    })
})
