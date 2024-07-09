let GUESTS:string[] =["ALIA","FARAH","SADIA","SARAH"];
console.log("you can invite only two people for dinner.");

while(GUESTS.length>2){
    const vistors =GUESTS.shift();
                      //The const keyword is used to declare guest as a constant 
                               //variable, meaning its value cannot be reassigned.
     if (vistors){
        console.log("Sorry, ",vistors,"You cant make it to dinner");

     } 
}    if(GUESTS.length==2){
    console.log(GUESTS[0]," and", GUESTS[1],"YOU ARE STILL INVITED");

}
   GUESTS.length=0;
    console.log("UPDATED GUEST LIST:",GUESTS);
   

