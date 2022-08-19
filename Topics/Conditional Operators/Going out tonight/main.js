function condition(){
    return "Sorry, but you are a minor.";
}
function condition2(){
    return "That's ok. You can enter the pub.";
}

let age = 18;
let reply;

if ( age<18){
    reply = condition();
    console.log(reply);
} else if (age>=18) {
    reply=condition2();
    console.log(reply);
}
