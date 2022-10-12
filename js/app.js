// condition
/*
//if,else if,else
var a = parseInt(prompt("enter value"));
if (a>0){
    console.log("its a positive");
}else if(a<0){
    console.log("its a negative");
}else{
    console.log("its not a number");
}

//nested if
        let a=parseInt(prompt("enter 1st value"));
		let b=parseInt(prompt("enter 2st value"));
		let c=parseInt(prompt("enter 3st value"));
		
		if((a>b)&&(a>c)){
			if(b>c){
				console.log("a is graterthan all")
				console.log("b is graterthan c")
				console.log("c is smallerthan all")
			}
		
			else{
				console.log("a is graterthan all")
				console.log("c is graterthan b")
				console.log("b is smallerthan all") 
			}
		}
		else{
			console.log("this consditon is failed")
		}
*/
//switch condition
var a = parseInt(prompt("enter a")),
    b = parseInt(prompt("enter b")),
    c = parseInt(prompt("enter c"));

    switch(c){
        case "+":
        console.log(a+b);
        break;

        case"-":
        console.log(a-b);
        break;

        case"*":
        console.log(a*b);
        break;

        case"/":
        console.log(a/b);
        break;

        default:
        console.log("unknown");
        break;
    }
