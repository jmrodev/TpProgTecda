let array = ["d","d","c","f","a","a","c",
    "f","d","d","c","f","a","a","c","f",
    "d","d","c","f","a","a","c","f","d",
    "d","c","f","d","d","c","c","f","d"]

function findIquals(array,item){
    let result = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == item) {
            result[result.length] = element
        }
    } 
    return result;
}

function pushArraystoOne(array){
    let MainArray = []
    for (let index = 0; index < array.length; index++) { 
        const item = array[index];            
        MainArray[MainArray.length] =  findIquals(array,item)  
    }
    return MainArray
} 
console.log(pushArraystoOne(array));
