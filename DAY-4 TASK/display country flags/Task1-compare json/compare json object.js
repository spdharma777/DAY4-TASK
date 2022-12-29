

var isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    
    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}

var obj1 = {a:1,b:2,c:3};
var obj2 = {a:1,b:2,c:3}; 

console.log("json is equals: "+ isEqualsJson(obj1,obj2));
alert("json is equals: "+ isEqualsJson(obj1,obj2));