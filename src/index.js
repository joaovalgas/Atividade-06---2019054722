class TestArray {
  constructor(ArrayToBeTested) {
    this.ArrayToBeTested = ArrayToBeTested;
  }


  get GetIsSomeItemInArray(){
    return this.FirstItemOfArray;
  }

  get VerifyIsArrayIsMadeByString() {
    return this.VerifyIsArrayIsMadeByString()
  }

  VerifyIsArrayIsMadeByString() {
      return this.ArrayToBeTested.every(index => typeof(index) == "string");    
  }

  FirstItemOfArray(param) {
    return this.ArrayToBeTested.includes(param);
  }
  

}

module.exports = TestArray;