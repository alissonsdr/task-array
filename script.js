let infoPerson = []
let validName = document.getElementById("verifyName")
let validCity = document.getElementById("verifyCity")
let output = document.getElementById("output")
let firstName = document.getElementById("name")
let subName = document.getElementById("subName")
let city = document.getElementById("city")

function save() {

    visibleOutput(false)

    infoPerson.push(firstName.value, subName.value, city.value)

    let createList = ''
    infoPerson.forEach(getValues)

    output.innerHTML = createList

    function getValues(value, index, array) {
        createList += index + " - " + value + "<br>"
    }
}

function verify() {

    visibleOutput(true)

    if (firstName.value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == "alisson") {
        validName.innerHTML = "Nome encontrado."
        validName.style.backgroundColor = 'green'
        validName.style.boxShadow = '5px 10px 15px rgba(0, 0, 0, 0.11)'
    } else {
        validName.innerHTML = "Nome não encontrado."
        validName.style.backgroundColor = '#d10000'
        validName.style.boxShadow = '5px 10px 15px rgba(0, 0, 0, 0.11)'
    }

    if (city.value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == "ararangua") {
        validCity.innerHTML = "Cidade encontrada."
        validCity.style.backgroundColor = 'green'
        validName.style.boxShadow = '5px 10px 15px rgba(0, 0, 0, 0.11)'
    } else {
        validCity.innerHTML = "Cidade não encontrada."
        validCity.style.backgroundColor = '#d10000'
        validName.style.boxShadow = '5px 10px 15px rgba(0, 0, 0, 0.11)'
    }

}

function reset() {
    output.innerHTML = ""
    validName.innerText = ""
    validCity.innerText = ""
    infoPerson = []
}


function visibleOutput(isVisible) {
    if (isVisible == true) {
        validName.style.visibility = 'visible'
        validCity.style.visibility = 'visible'
    } else {
        validName.style.visibility = 'hidden'
        validCity.style.visibility = 'hidden'
    }

} 