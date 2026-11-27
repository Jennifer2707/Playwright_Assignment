//Declare a global variable and shadow it inside a function using both var and let

//var

//const browserVersion ="Chrome"
//function getBrowserVersion(){
    //if(browserVersion==="Chrome"){
        //console.log("It's a chrome browser");
        //var browserVersion=22.19    // try with var and let
    //}
    //console.log(browserVersion);
//}
//getBrowserVersion()

//let

const browserVersion = "Chrome";

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        let browserVersion = "1.5";
    }

    console.log(browserVersion);
}

getBrowserVersion()

