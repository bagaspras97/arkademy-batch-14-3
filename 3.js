//bagian 1 
var formatInput = ("Hello {0} {1}", "Arkademian", "Fighters!")
formatInput = ["Hello {0} {1}", "Arkademian", "Fighters!"]
var a = formatInput.slice(0,1).join("").split("").slice(0,6).join("")
var b = formatInput.slice(1,3).join(" ")
var c = a + b;
console.log(c)


//bagian 2
var formatInput = ("This is an {2}","Halangan","Rintangan","Exercise")
formatInput = ["This is an {2}","Halangan","Rintangan","Exercise"]
var a = formatInput.slice(0,1).join("").split("").slice(0,10).join("")
var b = formatInput.slice(3).join(" ")
var c = a + " " + b;
console.log(c)