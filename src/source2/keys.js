let oldKeys = ['A','B','C'];
let newKeys = ['B','C','D'];
let patches = [];
for(let key in oldKeys){
    if(!newKeys.includes(oldKeys[key])){
        patches.push({type:'REMOVE',key:oldKeys[key]});
    }
}
for(let key in newKeys){
    if(!oldKeys.includes(newKeys[key])){
        patches.push({type:'ADD',key:newKeys[key]});
    }
}
console.log(patches);