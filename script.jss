function calculateCGPA() {
    let ct1 = Number(document.getElementById("ct1").value);
    let ct2 = Number(document.getElementById("ct2").value);
    let ct3 = Number(document.getElementById("ct3").value);
    let ct4 = Number(document.getElementById("ct4").value);
    let project = Number(document.getElementById("project").value);
    let assignment = Number(document.getElementById("assignment").value);
    let midterm = Number(document.getElementById("midterm").value);
    let attendance = Number(document.getElementById("attendance").value);
    
    let classTests = [ct1, ct2, ct3, ct4].sort((a, b) => b - a).slice(0, 3);
    let bestCTAvg = classTests.reduce((a, b) => a + b, 0) / 3;
    let totalIncourse = bestCTAvg + project + assignment + midterm + attendance;
    
    let requiredScores = {
        "4.00": Math.max(0, ((80 - totalIncourse) / 0.4).toFixed(2)),
        "3.75": Math.max(0, ((75 - totalIncourse) / 0.4).toFixed(2)),
        "3.50": Math.max(0, ((70 - totalIncourse) / 0.4).toFixed(2)),
        "3.25": Math.max(0, ((65 - totalIncourse) / 0.4).toFixed(2)),
        "3.00": Math.max(0, ((60 - totalIncourse) / 0.4).toFixed(2)),
        "2.75": Math.max(0, ((55 - totalIncourse) / 0.4).toFixed(2)),
        "2.50": Math.max(0, ((50 - totalIncourse) / 0.4).toFixed(2)),
        "2.25": Math.max(0, ((45 - totalIncourse) / 0.4).toFixed(2)),
        "2.00": Math.max(0, ((40 - totalIncourse) / 0.4).toFixed(2)),
    };
    
    let resultText = `<h3>Total In-course Marks: ${totalIncourse.toFixed(2)}</h3>`;
    resultText += `<h4>Required Final Exam Scores:</h4>`;
    for (let [cgpa, score] of Object.entries(requiredScores)) {
        resultText += `<p><span class='cgpa-box'>CGPA ${cgpa}</span>: Need ${score} marks in the final exam</p>`;
    }
    
    document.getElementById("results").innerHTML = resultText;
}
