addStudent = () => {
    let first = document.getElementById("first").value
    let last = document.getElementById("Last").value
    let age = +document.getElementById("age").value
    let subject = document.getElementById("subject").value

    console.log(first, last, age, subject);


    if(age >= 18){
        alert("student: " + first + last + " has been added to " + subject);
    }else{
        alert("Student is not old enough to enroll!")
    }
}