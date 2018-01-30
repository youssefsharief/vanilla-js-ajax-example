

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        try {
            const data = JSON.parse(this.responseText)
            render(data)
        } catch (e) {
            alert(e);
        }

    }
};
xhttp.open("GET", "https://8g1mbztla2.execute-api.us-east-1.amazonaws.com/teams", true);
xhttp.send();


function render(data) {
    data.forEach(person => {
        renderPersonBox(person)
    })
}

function renderPersonBox(person){
    const newSquare = document.createElement('div');
    newSquare.appendChild(imgDiv(person.avatar_url))
    newSquare.appendChild(nameDOM(person.first_name, person.last_name))
    newSquare.appendChild(titleDOM(person.title))
    newSquare.className = 'item';
    document.body.appendChild(newSquare)
}

function imgDiv(src) {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'imgDiv'
    const img = document.createElement('img');
    img.src = src;
    imgDiv.appendChild(img)
    return imgDiv
}

function nameDOM(first_name, last_name) {
    const name = document.createElement('p')
    name.innerText = `${first_name} ${last_name}`
    return name
}

function titleDOM(titleValue) {
    const title = document.createElement('p')
    title.style.fontWeight = 'bold'
    title.innerText = titleValue
    return title
}