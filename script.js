function userDate(name, fatherName, rollNo, age, course) {//perimeter
    document.writeln(`<center><font face="Bolditalic" size="7" color="mehroon"><h1>Personal Information </h1></font> 
        <h1>User Name: ${name} </h1> <h1>Father Name: ${fatherName} </h1>
         <h1>Roll No: ${rollNo} </h1> <h1>Age: ${age} </h1> <h1>Course: ${course} </h1> </center>`);

}
userDate(prompt("Enter Your Name:"), prompt("Enter Your Father Name:"), prompt("Enter Your Roll No:"), 

prompt("Enter Your Age:"), ["Web Development", "AI"]);//argument
