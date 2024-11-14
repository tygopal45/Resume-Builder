//alert("loading");
function addNewWEField() {
    //console.log("AAing new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.parentNode.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.parentNode.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
    // console.log("generating CV")
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");
    let s = "";
    for(let e of wes) {
        s = s + `<li> ${e.value} </li>` ;
    }
    document.getElementById("weT").innerHTML = s;

    let aqs = document.getElementsByClassName("aqField");
    let t = "";
    for(let f of aqs) {
        t = t + `<li> ${f.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = t;

    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

  //set the image to template

    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;
    };

    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-template").style.display = 'block';
}

function printCV() {
    window.print();
}