const assert =require("assert");
const ganache = require("ganache-cli");
const Web3= require("web3");

const web3= new Web3(ganache.provider());

class Car {
    park (){
        return 'stoped';
    }

    drive(){return 'vrrom'}
}
let car
beforeEach(()=>{
    car=new Car();
})

describe('Car',()=>{
    it ('park',()=>{
       
        assert.equal(car.park(), 'stoped');
    })
})  