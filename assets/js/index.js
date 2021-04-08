"use strict";


class RangeValidator{

  constructor(from, to){
    this._from = from;
    this._to = to;
  }

  set from(newValue){
    this._from = newValue;
  }

  get from(){
    return this._from;
  }

  set to(newValue){
    this._to = newValue;
  }

  get to(){
    return this._to;
  }

  get range(){
    return [this.from, this.to];
  }

  validate(num){
    if(num < this.from || num > this.to){
      throw new RangeError("Число не выходит в диапазон!");
    }
    return num;
  }
}


const validator = new RangeValidator(20, 70);
console.log(validator.range);
console.log(validator.from);
console.log(validator.to);
console.log(validator.validate(34));
console.log(validator.validate(11));