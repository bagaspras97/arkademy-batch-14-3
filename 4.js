//bagian 1
var findSome = ["cat", "listen", "code", "act", "silent", "tac"]
​
var kata1 = findSome.shift().split("").sort().join("")//act
var kata2 = findSome.shift().split("").sort().join("")//eilnst
var kata3 = findSome.shift().split("").sort().join("")//cdeo
var kata4 = findSome.shift().split("").sort().join("")//act
var kata5 = findSome.shift().split("").sort().join("")//eilnst
var kata6 = findSome.shift().split("").sort().join("")//act
​
var findSome = ["cat", "listen", "code", "act", "silent", "tac"]
if (kata1==kata4&&kata6){
  console.log(findSome[0] +" "+ findSome[3] + " " + findSome[5])
}else{
  console.log(false)
}
​
if (kata2==kata5){
  console.log(findSome[1] + " " + findSome[4] )
}else{
  console.log(false)
}
​
//bagian 2
var findSame = ["try", "fire", "dark"]
​
var kata1 = findSame.shift().split("").sort().join("")//rty
var kata2 = findSame.shift().split("").sort().join("")//efir
var kata3 = findSame.shift().split("").sort().join("")//adkr
 
var findSame = ["try", "fire", "dark"]
if (kata1==kata2&&kata3){
  console.log(findSame[0] + " "+ findSame[1] + " " + findSame[2])
} else{
  console.log("Tidak ditemukan!")
}
  
