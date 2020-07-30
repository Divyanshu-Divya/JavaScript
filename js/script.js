//Comments In Java Script 
//This is Singal Line Comment.
/*This is Multiple Lines Comment. */
// document.write('Hellow world') //Explained Below

// This Command is use to write in the documents. And HTML Tags can be directitly inseted in this Command.


//  Variables In JavaScript
// There are three ways of Declaaring Variables / Types of Varables.
//     1.var //Not used these Days.
//     2.let
//     3.const 

//   1.  Declaration of Variables
//     e.g.-  var x = "Data"
//                |     |
//     Variable name    Value Of the Vriable
//     Note:(i) Variable Name should not contain any space between them.
//         (ii)Variable Name Should Not Begin With Numbers.
//         (iii)Variable Name can start with letters , numbers , _ , $.
//         (iv) Variable Name are case Sensitive.
//         *(v)*Hyphens are not allowed in JavaScript Variables names.
//         (vii)Can use Most Common Used Cases:
//              1.camelCase
//              2.kabab-case
//              3.snake_case
//              4.PascalCase
//
//

 
    // 1.        var x = "This is the value of a Variable"; // 'var' has a global scope.
    //         x = 'Reassigned value of the Variable' //Vaiables Assined by 'var'can be reassigned .And var is not needed to be writen next time(multiple time) during Reassignment of the varible.
    //         var y , z;  // In This(var) type of variable ,its is also posible that variables Can be fist made at other place and Decleared at other place. And Multiple variables can also be made during this process.
    //         y = 10;//And Any Type of Varables(Explain Later) can be Declared By using var.
    //         z = true;
    //         var z = 8; //Value of 'var' can also be declared Multiple Times (Unlike 'let').
    //         document.write('x'); //This will print the vlaue of the variable 'x'.
       
    // 2.      let a = "This is the value of the variable a" ; // 'let' has a block lavel scope .
    //          // The Only difference between 'var' and 'let' regardless of scope is that 'var' can be reassigned and redeclared also but  'let' can be Reassigned but can not redeaclared.
    //          // e.g.- var b = "true"  //variable declared and assigned
    //          //           b = "true 2" //variable reassigned
    //          //       var b = "true 3" //variable redeclared
    //          //         but||
    //          //       let c = "true"  //variable declared and assigned
    //          //           c = "true 2"  //variable reassigned
    //          //      * let c = "false" *  //variable redeclared not possible.
             
    // 3.      const d = "";  //   'const'  Constant Variable and has a global scope.
    //          // Value of 'const' neither be reassigned  nor be redeclared.That's why 'const' is known as Constant Variable. 
    //          // 
    //          // e.g.-  let c = "true"  //variable declared and assigned
    //          //           *c = "true 2" *  //variable reassignment  not possible.
    //          //      * let c = "false" *  //variable redeclared not possible.

                // Data Types of the Variable's Value
                // 1.Primitive Data Type (Memory Alloction - Stack)
                //    (i)String          "Priyanshu"
                //    (ii)Numbers        34
                //    (iii)Boolean       true/false
                //    (iv)Null           null 
                //    (v)Undefined       undefined/0
                //    (vi)Symbol         //New in ES6
                //
                // 2.Reference Data Type (Memory Alloction - Heap)Derived
                //    (i)Arrays                 ["HTML","CSS","JS"];
                //    (ii)Object Literals       {firstName:"Priyanshu",lastName:"Priya"}
                //    (iii)Functions
                //    (iv)Dates

                // Type of Operator Return TTHe Data Type of Any data

                //  Strings
                    let e = "Pryanshu" 
                    condole.log("My String is " + e);
                    codole.log("Data Type is" + (typeof e));
                //