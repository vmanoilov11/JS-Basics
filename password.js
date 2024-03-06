function pass(input){
    let pass = (input[0])
    
    if (pass === "s3cr3t!P@ssw0rd"){
        
        console.log("Welcome")
    
    } else if(pass !== "s3cr3t!P@ssw0rd"){

        console.log("Wrong password!")   
    }
}
pass(["s3cr3t!P@ssw0rd"])

