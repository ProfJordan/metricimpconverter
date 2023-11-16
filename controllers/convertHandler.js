function numberStringSplitter(input) {
  if (!input) {
    return ["1", "invalid unit"];
  }
  let number = input.match(/[\d./]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g)[0];

  return [number[0], string];
}


function checkDivision(possibleFraction) {
  let nums = possibleFraction.split("/");
  if (nums.length > 2) {
    return false;
  }
  return nums;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numberStringSplitter(input)[0];
    let nums = checkDivision(result);
    console.log('nums:', nums);
  
    if (!nums) {
      return undefined;
    }
  
    let num1 = nums[0];
    let num2 = nums[1] || "1";
    console.log('num1:', num1);
    console.log('num2:', num2);
  
    result = parseFloat(num1) / parseFloat(num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return undefined;
    }
  
    return result;
  };
  

  this.getUnit = function(input) {
    let result = numberStringSplitter(input)[1].toLowerCase();
    console.log('result:', result);

    switch (result) {
      case "gal":
        return "gal";
        break;
      case "l":
        return "L";
        break;
      case "mi":
        return "mi";
        break;
      case "km":
        return "km";
        break;
      case "lbs":
        return "lbs";
        break;
      case "kg":
        return "kg";
        break;
      default:
        return undefined;
    }   
  };
  
  this.getReturnUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    console.log('unit:', unit);

    switch(unit) {
      case "gal":
        return "L";
        break;
      case "l":
        return "gal";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    console.log('unit:', unit);
    
    switch(unit) {
      case "gal":
        return "gallons";
      case "l":
        return "liters";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      default:
        return "🤷‍♂️";
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    let result;

    console.log('unit:', unit);
    console.log('initNum:', initNum);
    console.log('initUnit:', initUnit);
    console.log('galToL:', galToL);
    console.log('lbsToKg:', lbsToKg);
    console.log('miToKm:', miToKm);
    
    switch(unit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result =  initNum / galToL;
        break;
      case "mi":
        result =  initNum * miToKm;
        break;
      case "km":
        result =  initNum / miToKm;
        break;
      case "lbs":
        result =  initNum * lbsToKg;
        break;
      case "kg":
        result =  initNum / lbsToKg;
        break;
      default:
        result = undefined;
    }
    console.log('result:', result);
    console.log('result.toFixed(5):', result.toFixed(5));
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
  };
  
}

module.exports = ConvertHandler;
