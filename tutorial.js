const sum = (num1,num2) => num1 + num2;
const pi = 3.14;
class SomeMath {
    constructor(){
        console.log('math object');
    }
}

module.exports.sum = sum;
module.exports.pi = pi;
module.exports.SomeMath = SomeMath;

//another sintax

module.exports = {
                    sum:sum,
                    pi:pi,
                    SomeMath:SomeMath,
}