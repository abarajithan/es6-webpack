import './styles/main.scss';

window.changeDetails = () => {
    let value = {
        details : {}
    }
    document.getElementById('change-name').innerText = "Hello John";
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        value.details = {
            ...json
        }
        console.log("Value:",value)
    })

}

    