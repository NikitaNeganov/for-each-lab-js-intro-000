function logStuff(item, index,array){
  console.log(`${index}: ${item}`);
}
function iterativeLog(array){
  array.forEach((item, index, array) =>{
    console.log(`${index}: ${item}`)
  })
}
