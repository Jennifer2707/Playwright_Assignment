//Declare a global variable and shadow it inside a function using both var and let

const browserVersion = "Chrome";

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        var browserVersion = "Edge";
    }

    console.log(browserVersion);
}

getBrowserVersion();
