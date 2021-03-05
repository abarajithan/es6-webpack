import './styles/main.scss';


window.initializeLogger = function (){
    return{
        stack:{},
        add:function(fn){
            this.stack[Object.keys(this.stack).length] = fn;
            return Object.keys(this.stack).length - 1;
        },
        remove: function(index){
            delete this.stack[index]
        },
        log: function(msg){
            for(let index in this.stack){
                msg = this.stack[index].apply(this,[msg]);
            }
            console.log(msg);
        }
    }
}

window.logger = window.initializeLogger();

logger.log("Hello");
let md1 = logger.add(function(msg){
    return msg+msg;
});
logger.log("Hello");
let md2 = logger.add(function(msg){
    return msg+"123";
});
logger.log("Hello");
logger.remove(md1);
logger.log("Hello");
logger.remove(md2);
logger.log("Hello");

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

    