/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


const weight = 150;
const height =2.5;

const bmi = weight /(height*height);
console.log(bmi);

if(bmi <= 18.5){
    console.log('you are underweight')
}
else if(bmi <= 18.5 || bmi <=24.9){
    console.log('you are normal')
}
else if( bmi <=25 || bmi <= 29.9){
    console.log('you are overWeight')
}
else{
    console.log('you are obese.')
}
