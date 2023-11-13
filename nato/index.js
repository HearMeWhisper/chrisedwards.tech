const convert = () =>{
    let inputLen = document.getElementById("input").value.toLowerCase();
    let out = "";
    //alert(inputLen);
    for (i=0; i<inputLen.length; i++){
switch (inputLen.charAt(i)){
case "a":
    out += "alpha ";
    break;
case "b":
    out += "bravo ";
    break;
case "c":
    out += "charlie ";
    break;
case "d":
    out += "delta ";
    break;
case "e":
    out += "echo ";
    break;
case "f": 
    out += "foxtrot ";
    break;
case "g": 
    out += "golf ";
    break;
case "h":
    out += "hotel ";
    break; 
case "i":
    out += "india ";
    break; 
case "j":
    out += "juliett "
    break;
case "k":
    out += "kilo ";
    break; 
case "l":
    out += "lima ";
    break;
    case "m":
    out += "mike ";
    break;
    case "n": 
    out += "november ";
    break;
    case "o": 
    out += "oscar ";
    break;
    case "p": 
    out += "papa ";
    break;
    case "q": 
    out += "quebec ";
    break;
    case "r": 
    out += "romeo ";
    break;
    case "s": 
    out += "sierra ";
    break;
    case "t": 
    out += "tango ";
    break;
    case "u": 
    out += "uniform ";
    break;
    case "v": 
    out += "victor ";
    break;
    case "w": 
    out += "whiskey ";
    break;
    case "x": 
    out += "xray ";
    break;
    case "y": 
    out += "yankee ";
    break;
    case "z": 
    out += "zulu ";
    break;
    default: 
    out += inputLen.charAt(i);
    break;
}

    }
    document.getElementById("output").innerHTML = out;
}

const clearInput = () =>{
    document.getElementById("input").value = "";
    // alert(document.getElementById("input").value);
}