// ITCS227 Source Code Template for 2T AY 2022 - 2023

/*
        Program:                Computation of Grades using Function
        Programmer:             Paredes, Ralph Amiel T.
        Section:                BCS22
        Start Due:              April 17, 2023
        End Date:               April 25, 2023

*/

console.log("============================================================");

let student;
student = "Juan Dela Cruz";
console.log("Student Name: " + student);

var enabling = 0;
var summative = 0;
var exam = 0;

// ENABLING ASSESSMENT

var enablingAssessment = [[85], [88], [85], [78], [100]];
console.log("Enabling Assessments: " + enablingAssessment);


for (var i=0; i < enablingAssessment.length; i++) {
        enabling += enablingAssessment[i][0];
        var ENA = (enabling/enablingAssessment.length);

}

// SUMMATIVE ASSESSMENT

var summativeAssessment = [[85], [89], [95]];
console.log("Summative Assessments: " + summativeAssessment);

for (var i=0; i < summativeAssessment.length; i++) {
        summative += summativeAssessment[i][0];
        var SUM = (summative/summativeAssessment.length);

}

// EXAM GRADE

var examGrade = [[89]];
console.log("Major Exam Score: " + examGrade);

for (var i=0; i < examGrade.length; i++) {
        exam += examGrade[i][0];
        var EXA = (exam/examGrade.length);

}

console.log("============================================================");

console.log("Class Participation: " + (enabling) / enablingAssessment.length);
console.log("Summative Assessment: " + (summative) / summativeAssessment.length);
console.log("Exam Grade: " + (exam) / examGrade.length);

console.log("============================================================");

var avg = (ENA * 0.3) + (SUM * 0.3) + (EXA * 0.4);
console.log("Grade Score: " + avg)

        if (avg < 59){
          console.log("Grade : F");      
          } 
        else if (avg < 69) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 79) 
             {
                console.log("Grade : C"); 
        } else if (avg < 89) {
                console.log("Grade : B"); 
        } else if (avg < 99) {
                console.log("Grade : A"); 
}


const student1 = {Name: 'Juan Dela Cruz', CP: 87, SA: 89, ExamGrade: 89, GradeScore: 88, Grade:"B"}

console.table([student1]);