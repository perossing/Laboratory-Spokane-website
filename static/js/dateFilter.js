/* jshint esversion: 6 */

(function filterDates() {

    console.log("=== date filter ===");

    let filterItem = document.getElementsByClassName("filter-item");
    let yearSelect = document.getElementsByClassName("year-select");
    let dateSelect = document.getElementsByClassName("date-selector");
    let clearBtn = document.getElementById("clear-button");
    let resultStatus = document.getElementById("results-status");
    let result = false;
    let clickedList;

    for (let i = 0; i < yearSelect.length; i++) {
        restoreSeasonList(i);
    }

    function restoreSeasonList(i) {
        yearSelect[i].onmouseover = (() => {
            if (clickedList) {
                clickedList.style.display = "block";
            }
        });
    }

    for (let i = 0; i < dateSelect.length; i++) {
        dateSelectClick(i);
    }

    function dateSelectClick(i) {
        dateSelect[i].onclick = (() => {
            result = false;
            clickedList = dateSelect[i].parentElement;
            clickedList.style.display = "none";
            checkResults(dateSelect[i].id);
            useFilter(dateSelect[i].id);
        });
    }

    function checkResults(season) {
        for (let i = 0; i < filterItem.length; i++) {
            if (filterItem[i].classList.contains(season)) {            
                result = true;
                return;
            }
        }
    }

    function useFilter(season) {
        for (let i = 0; i < filterItem.length; i++) {
            filterItem[i].style.opacity = 0;
            if (filterItem[i].classList.contains(season)) {
                changeDisplay(i, 'block');
                changeOpacity(i);
                resultStatus.style.display = "none";
            } else {
                if (result === false) {
                    resultStatus.style.display = "block";
                }
                changeDisplay(i, 'none');
            }
        }
    }

    clearBtn.onclick = (() => {
        for (let i = 0; i < filterItem.length; i++) {
            filterItem[i].style.opacity = 0;
            changeDisplay(i, 'block');
            changeOpacity(i);
            result = false;
            resultStatus.style.display = "none";
            console.log("=== CLEARED ===");
        }
    });

    function changeOpacity(i) {
        setTimeout(() => {
            filterItem[i].style.opacity = 1;
        }, 100);
    }

    function changeDisplay(i, value) {
        setTimeout(() => {
            filterItem[i].style.display = value;
        }, 100);
    }

})();