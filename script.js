function addStudent() {

    let name = document.querySelector("input[placeholder='Enter Student Name']").value;
    let regNo = document.querySelector("input[placeholder='Enter Register Number']").value;
    let department = document.querySelector("input[placeholder='Enter Department']").value;
    let year = document.querySelector("select").value;

    if (name === "" || regNo === "" || department === "") {
        alert("Please fill all the fields.");
        return;
    }

    let table = document.querySelector("table");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = regNo;
    cell3.innerHTML = department;
    cell4.innerHTML = year;

    document.querySelector("input[placeholder='Enter Student Name']").value = "";
    document.querySelector("input[placeholder='Enter Register Number']").value = "";
    document.querySelector("input[placeholder='Enter Department']").value = "";
    document.querySelector("select").selectedIndex = 0;

    alert("Student Added Successfully!");
}

document.querySelector("button").addEventListener("click", addStudent);