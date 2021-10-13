let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {
    
    let min=1;
    let max=5;
    let x=Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
            st = "What is algorithm";
            break;
        case 2:
            st = "Characterstics of algorithm";
            break;
        case 3:
            st = "What is pseudocode";
            break;
        case 4:
            st = "What is algorithm complexity";
            break;
        case 5:
            st = "Different operations in data structure";
            break;
        case 6:
            st = "";
            break;
        case 7:
            st = "";
            break;
        case 8:
            st = "";
            break;
        case 9:
            st = "";
            break;
        case 10:
            st = "";
            break;
        case 11:
            st = "";
            break;
        case 12:
            st = "";
            break;
        case 13:
            st = "";
            break;
        case 14:
            st = "";
            break;
        case 15:
            st = "";
            break;
        case 16:
            st = "";
            break;
        case 17:
            st = "";
            break;
        case 18:
            st = "";
            break;
        case 19:
            st = "";
            break;




        default:
            st="default case";
            break;
    }

    document.getElementById("qus").innerHTML=st;
}