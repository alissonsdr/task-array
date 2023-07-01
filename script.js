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

    let mapInfoPerson = infoPerson.map((infos, index) => {
        return index + " - " + infos + "<br>"
    }).join('')

    output.innerHTML = mapInfoPerson
}

function verify() {

    visibleOutput(true)

    let infoPersonVerify = infoPerson.map((infos) => {
        console.log(infos)
        return infos.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    })

    console.log(infoPersonVerify)

    let nameVerify = infoPersonVerify.indexOf("alisson")
    if (nameVerify != -1) {
        validName.innerHTML = "Nome encontrado."
        validName.style.backgroundColor = 'green'
        validName.style.boxShadow = '5px 10px 15px rgba(0, 0, 0, 0.11)'
    } else {
        validName.innerHTML = "Nome não encontrado."
        validName.style.backgroundColor = '#d10000'
        validName.style.boxShadow = '5px 10px 15px rgba(0, 0, 0, 0.11)'
    }

    let cityVerify = infoPersonVerify.indexOf("ararangua")
    if (cityVerify != -1) {
        validCity.innerHTML = "Cidade encontrada."
        validCity.style.backgroundColor = 'green'
        validCity.style.boxShadow = '5px 10px 15px rgba(0, 0, 0, 0.11)'
    } else {
        validCity.innerHTML = "Cidade não encontrada."
        validCity.style.backgroundColor = '#d10000'
        validCity.style.boxShadow = '5px 10px 15px rgba(0, 0, 0, 0.11)'
    }
}

function reset() {
    output.innerHTML = ""
    validName.innerText = ""
    validCity.innerText = ""
    infoPerson = []
}

function visibleOutput(isVisible) {
    if (isVisible) {
        validName.style.visibility = 'visible'
        validCity.style.visibility = 'visible'
    } else {
        validName.style.visibility = 'hidden'
        validCity.style.visibility = 'hidden'
    }
} 