let infoPerson = []

function save() {

    document.getElementById("verifyName").style.visibility = 'hidden'
    document.getElementById("verifySubName").style.visibility = 'hidden'
    document.getElementById("verifyCity").style.visibility = 'hidden'
    //PEGUEI OS VALORES DOS INPUTS
    let name = document.getElementById("name").value
    let subName = document.getElementById("subName").value
    let city = document.getElementById("city").value

    //ADICIONEI OS VALORES NA ARRAY
    infoPerson.push(name, subName, city)

    //CRIEI UMA VARIAVEL PARA A LISTA E CHAMEI A FUNÇÃO PARA PASSAR OS VALORES
    let createList = ''
    infoPerson.forEach(getValues)

    //
    document.getElementById("output").innerHTML = createList

    //FUNÇÃO PARA CRIAR A LINHA COM INDEX E VALOR DO ITEM DO ARRAY
    function getValues(value, index, array) {
        createList += index + " - " + value + "<br>"
    }
}

function verify() {

    document.getElementById("verifyName").style.visibility = 'visible'
    document.getElementById("verifySubName").style.visibility = 'visible'
    document.getElementById("verifyCity").style.visibility = 'visible'

    let name = document.getElementById("name").value
    let subName = document.getElementById("subName").value
    let city = document.getElementById("city").value

    if (infoPerson.indexOf(name) != -1) {
        document.getElementById("verifyName").innerHTML = "Nome encontrado."
    }

    if (infoPerson.indexOf(subName) != -1) {
        document.getElementById("verifySubName").innerHTML = "Sobrenome encontrado."
    }

    if (infoPerson.indexOf(city) != -1) {
        document.getElementById("verifyCity").innerHTML = "Cidade encontrada."
    }

}

function reset() {
    //DEIXO AS DUAS DIVS DE RESULTADO E O ARRAY SEM CONTEÚDO
    document.getElementById("output").innerHTML = ""
    document.getElementById("verifyName").innerText = ""
    document.getElementById("verifySubName").innerText = ""
    document.getElementById("verifyCity").innerText = ""
    infoPerson = []
}
