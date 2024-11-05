//Uppgift 1

function gradeTest(name,score,maxScore) {
    if(score > maxScore * 0.5){
        console.log(name + "är godkänd!")        
    } else {
        console.log(name + " är underkänd.")
    }
}

// gradeTest("Angelo ", 55,100);

// 1.a
function advancedGradeTest(name,score,maxScore){
    if(score >= maxScore * 0.95) {
        console.log(name + " har fått betyget A. Bra jobbat!")
    }
    else if(score >= maxScore *0.75) {
        console.log(name + " har fått betyget C");
    } else if (score >= maxScore * 0.5) {
        console.log(name + " har fått betyget E");
    } else {
        console.log(name + " har fått betyget F");
    }
}

advancedGradeTest("Fredrika", 98,100);

// 1.b
let studentGrades = [39,55,80,99,56,51,33,84,75,88,45];

function gradeClass(arr){

    let gradeE = 0;
    let gradeC = 0;
    let gradeA = 0;
    let gradeF = 0;
    
    //start på loop
    for(let i=0; i < arr.length; i++){
        if(arr[i] >= 95) {
            gradeA++;
        }
        else if(arr[i] >= 75) {
            gradeC++;
        } else if (arr[i] >= 50) {
            gradeE++
        } else {
             gradeF++
        }
    } //slut på loop

    console.log(`
        A: ${gradeA}
        C: ${gradeC}
        E: ${gradeE}
        F: ${gradeF}
        ` )
}

// gradeClass(studentGrades)

//Uppgift 2 

function checkBalance(debit,credit){
    if(debit > credit){
        console.log("Debet är större än kredit");
    } else if(credit > debit) {
        console.log("Kredit är större än debet");
    } else {
        console.log("Balansrapport godkänd!")
    }
}

checkBalance(3000,3000)

let debit = [100,200,300,400,500];
let credit = [500,400,300,200,100];


//2.b
function balanceReport(debitArray,creditArray) {
    let totalDebit = 0;
    let totalCredit = 0;

    //Räkna ut debet
    for(let i = 0; i < debitArray.length; i++){
        totalDebit = totalDebit + debitArray[i];
    }
    //Räkna ut kredit
    for(let i=0; i < creditArray.length; i++){
        totalCredit = totalCredit + creditArray[i]
    } 
    console.log("Total debet är " + totalDebit)
    console.log("Total kredit är " + totalCredit)
    
    //Jämför kredit & debet
    if(totalCredit !== totalDebit){
        console.log("Debet och kredit har inte samma värden");
    } else {
        console.log("Balansrapport stämmer!");
    }

}

balanceReport(debit,credit)

//3

let school = {
    name: "Ankademin",
    amountOfStudents:38,
    amountOfTeachers:10,
    motto: "Anyone can code!",
    favoriteTeacher: "Aquaman",
    bestSchoolInSweden:true,
    dogFriendly:true,
    snakeFriendly: false,
    locations: ["Solna","Ankeborg","Duckville"],
    mascot: {
        name:"Miles",
        age:1,
        isCute:true
    }
}

//3A

function sendSchoolInfo(obj){
    //Exempel med Ternary Conditional Operator - What ? True : False
    console.log(
        `
        Name: ${obj.name}
        Teachers: ${obj.amountOfTeachers}
        Students: ${obj.amountOfStudents}
        ${obj.snakeFriendly === false ? "No snakes allowed!" : ""}
        ${obj.bestSchoolInSweden === true ? "This is the best school in Sweden!" : "It's not the best school, but still good."}
        `
    )
}

sendSchoolInfo(school)

//3B

function sendMascotInfo(mascot){
    console.log(
        `
        Name: ${mascot.name}
        Age: ${mascot.age}
        ${mascot.isCute === true ? `${mascot.name} is supercute!` : ""}
        `
    )
}

sendMascotInfo(school.mascot)