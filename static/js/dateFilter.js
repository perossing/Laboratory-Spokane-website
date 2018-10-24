/* jshint esversion: 6 */

// with button or selection, target elements by class...

let filterItem = document.getElementsByClassName("filter-item");

// let Aug = document.querySelectorAll(".August2018");

// loop or get all...
// with button or selection, set display to none...
// Aug[0].style.display = "none";

// for (let i = 0; i < Aug.length; i++) {
//     Aug[i].style.display = "none";
// }


function useFilter(month) { 

    for (let i = 0; i < filterItem.length; i++) {

        if (filterItem[i].classList.contains(month)) {
            filterItem[i].style.display = "block";
        } else {
            filterItem[i].style.display = "none";
        }
    }
}


console.log("=== date filter ===");