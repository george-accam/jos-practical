const managementCredit = document.getElementById("hours-1")
const managementLetter = document.getElementById("Grade-A")
const managementPoint = document.getElementById("Grade-1")

const gradeTotal = document.getElementById("total")

managementCredit.textContent = 3;

const gradePoint = 12;
managementPoint.textContent = gradePoint;

if(gradePoint === 12){
    managementLetter.textContent ="A"

}else if(gradePoint === 10.5){
    managementLetter.textContent = "B+"
}
else if(gradePoint === 9){
    managementLetter.textContent = "B"
}
else if(gradePoint === 7.5){
    managementLetter.textContent = "B-"
}
else if(gradePoint === 6){
    managementLetter.textContent = "C+"
}
else if(gradePoint === 4.5){
    managementLetter.textContent = "C"
}
else if(gradePoint === 3){
    managementLetter.textContent = "C-"
}
else if(gradePoint === 1.5){
    managementLetter.textContent = "D"
}
else if(gradePoint === 0){
    managementLetter.textContent = "F"
}else{
    managementLetter.textContent = "invalid"
}
