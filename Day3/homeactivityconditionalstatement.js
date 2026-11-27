// Create two functions : launchBrowser, runTests where

//1. `launchBrowser`, use `if-else` to check if `browserName` is "chrome"

function launchBrowser(browserName){
    if(browserName==="edge"){
        console.log("It's an edge browser");
    } else if(browserName==="firefox"){
        console.log("It's a firefox browser");
    }else if(browserName==="chrome"){
        console.log("It's a chrome browser");
    }else{
        console.log("It's an invalid browser");
    }
}
launchBrowser("chrome");  //function call with argument


//2. `runTests`, use a `switch` statement to handle different `testType` values

function runTests(testType){
switch (testType){
    case "smoke":
    console.log("It's a smoke test");
    break;
     case "sanity":
    console.log("It's a sanity test");
    break;
     case "regression":
    console.log("It's a regression test");
    break;
     default:
    console.log("It's a default test");
}
}
runTests(smoke);