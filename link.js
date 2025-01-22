


let arr = null;
let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";
let capitalsmall = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// let fullmix = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@$%^&*";
let random = "!@$%^&*";
let numbers = "1234567890";
let passwordlength = 8;
let char = "";


function WeakPassword(passwordlength) {
    for (i = 0; i < passwordlength; i++) {
        let digit = Math.floor(Math.random() * capitalsmall.length)
        char = char + capitalsmall[digit];
    }
    // console.log(char)
    showthepass(char);

    char = "";
}


function StrongPassword(passwordlength) {

    if (passwordlength % 2 == 0) {
        
        let onehalf = passwordlength / 2;
        let anotherhalf = passwordlength - onehalf;
        let arr;

        for (i = 0; i < onehalf; i++) {
            let digit = Math.floor(Math.random() * capitalsmall.length)
            char = char + capitalsmall[digit];
        }

        for (i = 0; i <  anotherhalf; i++) {
            let digit = Math.floor(Math.random() *random.length)
            char = char + random[digit];
        }
        arr = char.split('');
        for(i=arr.length-1;i>0;i--){
            let j = Math.floor(Math.random()*(i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
         arr = arr.join('');
    // console.log(arr)
    showthepass(arr);

    char = "";

        
    } 

    else {
        let onehalf = Math.floor(passwordlength/2);
        let anotherhalf = passwordlength-onehalf;
        let arr;
        
        for (i = 0; i < onehalf; i++) {
            let digit = Math.floor(Math.random() * capitalsmall.length)
            char = char + capitalsmall[digit];
        }

        for (i = 0; i < anotherhalf; i++) {
            let digit = Math.floor(Math.random() *random.length)
            char = char + random[digit];
        }

        arr = char.split('');
        for(i=arr.length-1;i>0;i--){
            let j = Math.floor(Math.random()*(i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        arr =  arr.join('')
    // console.log(arr);
    showthepass(arr);

    char = ""
    }
}

function SuperStrongPassword(passwordlength) {

    let onehalf;
    let half;
    let anotherhalf;
    let otherhalf;
    
   if(passwordlength%2!=0){
    onehalf = Math.floor(passwordlength / 2);
    half = passwordlength - onehalf;
    otherhalf = Math.ceil(half / 2);
    anotherhalf = Math.floor(half / 2);
   }

   else if(passwordlength%2==0){

    if (passwordlength / 2 === 3 || passwordlength / 2 === 5 || passwordlength / 2 === 7){
         onehalf = passwordlength/2;
         half = passwordlength - onehalf;
         otherhalf = Math.ceil(half/2);
         anotherhalf = Math.floor(half/2);
    }
    else{
         onehalf = passwordlength/2;
         half = passwordlength - onehalf;
         otherhalf = half/2;
         anotherhalf = half/2;
    }
}    

        for (i = 0; i < onehalf; i++) {
            let digit = Math.floor(Math.random() * capitalsmall.length)
            char = char + capitalsmall[digit];
        }

        for (i = 0; i < otherhalf; i++) {
            let digit = Math.floor(Math.random() *random.length)
            char = char + random[digit];
        }

        
        for (i = 0; i < anotherhalf ; i++) {
            let digit = Math.floor(Math.random() *numbers.length)
            char = char + numbers[digit];
        }

        arr = char.split('');
        for(i=arr.length-1;i>0;i--){
            let j = Math.floor(Math.random()*(i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
         arr = arr.join('');
    // console.log(arr)
    showthepass(arr);
    char = "";
    

} 

let mainelement = document.getElementById('numberInput');
mainelement.addEventListener("input", function(){
    const value = this.value;
    if (parseInt(value)>15){
        mainelement.value = 15;
    }
})


let mainelement2 = document.getElementById('numberInput');
mainelement.addEventListener("input", function(){
    const value = this.value;
    if (parseInt(value)<6 && parseInt(value)!=1){
        mainelement.value = 6;
    }
})

let selectedradio = 0;


let submit = document.getElementsByClassName("classforbutton")[0];
let numberr = document.getElementById("numberInput");
submit.addEventListener("click", function(){
    let radios = document.querySelectorAll('input[type = "radio"]');


    radios.forEach((radio)=>{
        if(radio.checked){
            selectedradio = radio.value;
            // console.log(selectedradio);
        } 
    })
    
    if(numberr.value && selectedradio!=0){
      let passlength = numberr.value
        if (selectedradio == "WeakPassword"){
            WeakPassword(passlength)
        }

        if (selectedradio == "StrongPassword"){
            StrongPassword(passlength)
        }

        if (selectedradio == "SuperStrongPassword"){
            SuperStrongPassword(passlength)
        }


        radios.forEach((radio)=>{
            radio.checked = false;
        })
        selectedradio = 0;
        numberr.value  = null;
    }

    else if(!numberr.value && selectedradio!=0){
        alert("Please Enter the password length");

    }

    else if(selectedradio==0 && numberr.value){
        alert("Please Select the Password type")
    }
    else if( selectedradio==0 && !numberr.value){
        alert("Please enter the password type and length")
    }
})

function showthepass(arr){
 let showit = document.getElementById("showthepassword");
 showit.value = arr;
}

let wro = document.getElementsByClassName("wrong")[0];
wro.addEventListener("click",function(){
let arr = "";
showthepass(arr);
})

let clipboard = document.getElementsByClassName("copythetext")[0];
clipboard.addEventListener("click" , function(){
    let passs = document.getElementById("showthepassword");
    passs.select();
    document.execCommand("copy");
})

