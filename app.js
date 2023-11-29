function gradeCalc(grade, unit) {
    if (grade === "4.00 (A+)") {
      return 4.00 * unit;
    } else if (grade === "3.75 (A)") {
      return 3.75 * unit;
    } else if (grade === "3.50 (A-)") {
      return 3.50 * unit;
    } else if (grade === "3.25 (B+)") {
      return 3.25 * unit;
    } else if (grade === "3.00 (B)") {
      return 3.00 * unit;
    } else if (grade === "2.75 (B-)") {
      return 2.75 * unit;
    }else if (grade === "2.50 (C+)") {
      return 2.50 * unit;
    }else if (grade === "2.25 (C)") {
      return 2.25 * unit;
    }else if (grade === "2.00 (D)") {
      return 2.00 * unit;
    }else if (grade === "0.00 (F)") {
      return 0.00 * unit;
    }
  }
  
  let counter = 1;
  
  function addCourse() {
    let addNew = document.createElement("form");
    addNew.classList.add("add_new", `key-${counter}`);
    const course_name = `
    <form class="add_new key-${counter}">
      <div><input type="text" placeholder="Course Code" class="courses key-${counter}" required></div>
      <div><input type="number" placeholder="Credit Unit" class="credit-units key-${counter}" required></div>
      <div><select class="grade key-${counter}" required>
        <option value="select">Select</option>
        <option value="4.00">4.00 (A+)</option>
        <option value="3.75">3.75 (A)</option>
        <option value="3.50">3.50 (A-)</option>
        <option value="3.25">3.25 (B+)</option>
        <option value="3.00">3.00 (B)</option>
        <option value="2.75">2.75 (B-)</option>
        <option value="2.50">2.50 (C+)</option>
        <option value="2.25">2.25 (C)</option>
        <option value="2.00">2.00 (D)</option>
        <option value="0.00">0.00 (F)</option>
      </select></div> 
    </form>
    `;
    addNew.innerHTML = course_name;
    document.getElementById("course-wrapper").appendChild(addNew);
    counter++;
  }
  
  function removeCourse() {
    let mainForm = document.querySelector("form.add_new");
    mainForm?.remove();
  }
  
  const reports = [];
  
  /**
   * @description calculates cgpa
   */
  function calcCgpa() {
    const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");
  
    const courseReport = {};
  
    const listOfGrades = [];
    const listOfUnits = [];
    let totalUnits = 0;
  
    GRADESSELECT.forEach((e) => {
      let GRADES = e.options;
      const selectedIndex = e.selectedIndex;
      const selectedGrade = GRADES[selectedIndex];
      const gradeValue = selectedGrade.text.toUpperCase();
      listOfGrades.push(gradeValue);
    });
    console.log(listOfGrades);
  
    UNIT.forEach((e) => {
      const unitValue = parseInt(e.value);
      totalUnits += unitValue;
      listOfUnits.push(unitValue);
    });
    console.log(listOfUnits);
  
    let totalEarnedUnits = 0;
  
    for (let i = 0; i < listOfUnits.length; i++) {
      totalEarnedUnits += gradeCalc(listOfGrades[i], listOfUnits[i]);
    }
    const gpa = totalEarnedUnits / totalUnits;
    
    if (gpa >= 0){
      CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(2);
    } else {
      CGPAPARAGRAPH.textContent = "Please Enter a Valid Grade and Credit Units.";    
    }
    
  }
  