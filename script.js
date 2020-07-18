const check = () => {
    let p1 = document.getElementById("pw1");
    let p2 = document.getElementById("pw2");
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let signs = ["#", "$", "(", ")"];


    if (p1.value !== "" && p2.value !== ""){
        if (p1.value.length < 6){
            document.getElementById("info").innerHTML = "Your password isn't strong enough!";
            return false;
        }        
        if (p1.value !== p2.value){
            document.getElementById("info").innerHTML = "Your passwords do not match!";
            p1.value = "";
            p2.value = "";
            return false;       
        }
        if (p1.value === p2.value){
            alert("You are good to go! \n We'll redirect you to Sign-in now.");
            return true;
        }
    }
        
    document.getElementById("info").innerHTML = "Fill in the required sections";
    return false;
        
}