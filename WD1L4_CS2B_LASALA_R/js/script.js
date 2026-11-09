/*
    WD1-L4 Finals Activity
    Student Grade Evaluation System
    This program uses arrays and a for loop to evaluate
    the grades of all enrolled students.
*/

// List of student names
const studentNames = [
    "Anna Reyes",
    "Ben Santos",
    "Carla Cruz",
    "David Lim",
    "Ella Ramos"
];

// List of student grades that match the names above
const studentGrades = [92, 85, 78, 97, 74];

// Check if the student passed or failed
function getRemark(grade) {
    // If grade is 75 or higher, they passed. Otherwise, they failed.
    let remark = grade >= 75 ? "Passed" : "Failed";

    return remark;
}

// Convert a number grade into a grade point equivalent
function getEquivalent(grade) {
    let equivalent = "";

    if (grade >= 97) {
        equivalent = "1.0";
    } else if (grade >= 94) {
        equivalent = "1.25";
    } else if (grade >= 91) {
        equivalent = "1.50";
    } else if (grade >= 88) {
        equivalent = "1.75";
    } else if (grade >= 85) {
        equivalent = "2.0";
    } else if (grade >= 82) {
        equivalent = "2.25";
    } else if (grade >= 79) {
        equivalent = "2.50";
    } else if (grade >= 76) {
        equivalent = "2.75";
    } else if (grade >= 75) {
        equivalent = "3.0";
    } else {
        equivalent = "5.0";
    }

    return equivalent;
}

// Figure out the academic leader award based on their grade equivalent
function getAcademicLeader(equivalent) {
    let leader = "";

    switch (equivalent) {
        case "1.0":
        case "1.25":
            leader = "1st Class Academic Leader";
            break;

        case "1.50":
            leader = "2nd Class Academic Leader";
            break;

        case "1.75":
            leader = "3rd Class Academic Leader";
            break;

        default:
            leader = "-";
    }

    return leader;
}

// Create and show the final results table on the page
function showGradeEquivalent() {

    // Start building the HTML for the title and table
    let output = "<h2>Grade Equivalents</h2>";
    output += "<table>";

    // Add table column headers
    output += "<thead><tr>";
    output += "<th>Student Name</th>";
    output += "<th>Grade</th>";
    output += "<th>Equivalent</th>";
    output += "<th>Remark</th>";
    output += "<th>Academic Leader</th>";
    output += "</tr></thead>";

    output += "<tbody>";

    // Go through each student one by one
    for (let i = 0; i < studentNames.length; i++) {

        // Get the current student's grade
        let grade = studentGrades[i];

        // Run the functions to get their status
        let equivalent = getEquivalent(grade);
        let remark = getRemark(grade);
        let leader = getAcademicLeader(equivalent);

        // Add a new row to the table with the student's info
        output += "<tr>";
        output += "<td>" + studentNames[i] + "</td>";
        output += "<td>" + grade + "</td>";
        output += "<td>" + equivalent + "</td>";
        output += "<td>" + remark + "</td>";
        output += "<td>" + leader + "</td>";
        output += "</tr>";
    }

    // Close the table tags
    output += "</tbody></table>";

    // Show the finished table inside the webpage box
    document.getElementById("result").innerHTML = output;
}