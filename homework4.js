// String Methods
// Includes

function myInclude(str, checkStr,indexFrom = 0){
  for(let i = indexFrom; i < str.length - (checkStr.length - 1); i++){
    let tmpStr = '';
      for(let j = 0; j < checkStr.length; j++ ){
        tmpStr += str[j + i]
      }
      if(tmpStr === checkStr){
        return true
      }
  }
  return false
}


// console.log(myInclude('asdaf','r',1))

// IndexOf
function myIndexOf(str, checkStr,indexFrom) {
    
  for(let i = indexFrom; i < str.length - (checkStr.length - 1); i++){
    let tmpStr = '';
      for(let j = 0; j < checkStr.length; j++ ){
        tmpStr += str[j + i]
      }
      if(tmpStr === checkStr){
        return i;
      }
  }
  return -1;
}

// console.log(myIndexOf(string,'r',1)) 

// ReplaceAll
function myReplaceAll(text, str, changeStr) {
    
  let replacedTxt = '';
  let tempCuted = '';
  for (let i = 0, j = 0; i < text.length; i++) {
      if(str[j] === text[i]){
          tempCuted += text[i]
          j++
      }else{
          if(j !== str.length){
            replacedTxt += tempCuted
          }else{
            replacedTxt += changeStr
          }
          replacedTxt += text[i]
          tempCuted = ''
          j = 0
      }

  }
  console.log(replacedTxt)
}

// myReplaceAll(string,'barev', 'hajox')


function myReplace(text, str, changeStr) {
    
  let replacedTxt = '';
  let tempCuted = '';
  let isFinded = false;
  for (let i = 0, j = 0; i < text.length; i++) {
      if(str[j] === text[i] && !isFinded){
          tempCuted += text[i]
          j++
      }else{
          if(j !== str.length){
            replacedTxt += tempCuted
          }else{
            replacedTxt += changeStr
            isFinded = true;
          }
          replacedTxt += text[i]
          tempCuted = ''
          j = 0
      }

  }
  console.log(replacedTxt)
}

// Array Methods

// Includes

const array = [1,2,'fsa',4,5]

function myIncludeForArray(arr,element,indexFrom = 0){
  for(let i = indexFrom; i < arr.length;i++){
    if(typeof element == 'number' && typeof arr[i] == 'number' && isNaN(element)  && isNaN(arr[i])){
        return true;
    }
    if(arr[i] === element){
      return true
    }
  }
  return false
}
console.log(myIncludeForArray(array, NaN)) 

// IndexOf

function myIndexOfForArray(arr,element,indexFrom = 0){
  for(let i = indexFrom; i < arr.length;i++){
    if(arr[i] === element){
      return i
    }
  }
  return -1
}

// console.log(myIndexOfForArray(array,NaN)) 

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

function mySlice(arr,a,b){
  let newArr = []
  for(let i = a; i < b; i++){
    newArr.push(arr[i])
  }
  return newArr
}

// const slicedFruits = mySlice(fruits,1,3)

fruits.splice(1,1,'aaa')

console.log(fruits)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
// console.log(months);
