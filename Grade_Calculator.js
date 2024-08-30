/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const studentScore = 71;

if(studentScore >= 100 || studentScore >= 90){
    console.log('A')
}
else if(studentScore >= 80){
    console.log('B')
}
else if(studentScore >= 70){
    console.log('C')
}
else if(studentScore >= 60){
    console.log('C')
}
else{
    console.log('F')
}