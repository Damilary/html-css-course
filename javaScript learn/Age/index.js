// ========        Age in One        =======//
const age = document.querySelector("#your-age-by-next-year");
const nextAge = document.querySelector("#next-age-in-one");


// ==========   Age in two   ==========//
const ageTwo = document.querySelector("#your-age-in-two")
const nextAgeTwo = document.querySelector("#next-age-in-two");

//============ Next Year Age Value  ==========//
age.addEventListener("keyup", () => {
    nextAge.textContent = getNextAge(age.value);
});

//============ Next 2 Year Age Value  ==========//
ageTwo.addEventListener("keyup", () => {
    nextAgeTwo.textContent = getNextAgetwo(ageTwo.value);
});



//==========       Age    ==========//


// age in one FUNCTION //
 function getNextAge(age) {
    return Number.parseInt(age, 10) + 1;
}

// age in two FUNCTION //
function getNextAgetwo(age) {
    return Number.parseInt(age, 10) + 2;
}