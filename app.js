const sum = require("./tutorial");
const tutorial = require('./tutorial');
//console.log(tutorial.pi);

const EventEmitter = require('events'); //already included in Node js -Event driven programming
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
}) //event,function


eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let marian = new Person('Marian');

pedro.on('name',()=>{
    console.log('my name is ' + pedro.name);
})

marian.on('name',()=>{
    console.log('my name is ' + marian.name);
})


pedro.emit('name'); //this get emited synchronously 
marian.emit('name');