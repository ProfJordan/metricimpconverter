function numberStringSplitter(input) {
  let number = input.match(/[\d./]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g)[0];
  return [number[0], string];
}

function checkDivision(possibleFraction) {
let nums = possibleFraction.split("/");
  if (nums.length > 2) {
    return false;
  } 
    return nums[0];
  }

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numberStringSplitter(input)[0];
    let nums = checkDivision(result);
    if (!nums) {
      return undefined;
  }
 let num1 = nums[0];
 let num2 = nums[1] || "1";
 result = parseFloat(num1) / parseFloat(num2);
 if (isNaN(num1) || isNaN(num2)) {
   return undefined;
 }
 return result;
};
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
