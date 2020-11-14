let resultField = $("#result");

function insertNumber(number){
    let existingNumbers = resultField.val();
    
    resultField.val(existingNumbers + number)
}

function clearResult(){
    resultField.val('')
}

function calculate(){
  let result = eval(resultField.val());
  resultField.val(result)
}

function deleteNumber(){
    let value = resultField.val();
    if (value!=''){
        resultField.val(value.slice(0,-1))
    }
}