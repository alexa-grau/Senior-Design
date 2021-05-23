let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Enero", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Agosto", "Sept", "Oct", "Nov", "Dic"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                cell.classList.add("hover");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-primary");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
    hoverableCells();
}


//enable Calendar cells to be clickable
function hoverableCells() {
    document.querySelectorAll('.hover').forEach(item => {
        item.addEventListener('click', () => {
            //remove any bg-primary cells
            document.querySelectorAll('.hover').forEach(hoverable => {
                hoverable.classList.remove('bg-primary');
            });
    
            //set clicked cell to bg-primary
            item.classList.add('bg-primary');
            //run function to show reports
            displayReports(item.innerHTML);
        });
    });
}

//Display report based on clicked date
function displayReports(displayDay) {
    let displayYear = selectYear.value;
    let displayMonth = parseInt(selectMonth.value) + 1;

    if(displayMonth < 10){
        displayMonth = ("0" + displayMonth);
    }
    if(displayDay < 10){
        displayDay = ("0" + displayDay);
    }
    let displayDate = (displayYear + "-" + displayMonth + "-" + displayDay);
    let URL = "http://localhost:3004/weather/"+displayYear+"/"+displayMonth+"/"+displayDay;
    console.log("URL:", URL);
    $.get(URL, function(data){
        console.log("Data: " + data[0].date);
      });
    //hardcoding weather reports to display
    document.getElementById('morningReportDate').innerHTML = displayDate;
    document.getElementById('eveningReportDate').innerHTML = displayDate;
    document.getElementById('morningReportTemp').innerHTML = Math.floor(Math.random() * (10) + 20);
    document.getElementById('eveningReportTemp').innerHTML = Math.floor(Math.random() * (10) + 20);
    document.getElementById('morningReportTempHigh').innerHTML = parseInt(document.getElementById('morningReportTemp').innerHTML) + 2;
    document.getElementById('eveningReportTempHigh').innerHTML = parseInt(document.getElementById('eveningReportTemp').innerHTML) + 2;
    document.getElementById('morningReportTempLow').innerHTML = parseInt(document.getElementById('morningReportTemp').innerHTML) - 2;
    document.getElementById('eveningReportTempLow').innerHTML = parseInt(document.getElementById('eveningReportTemp').innerHTML) - 2;
    document.getElementById('morningReportHum').innerHTML = Math.floor(Math.random() * (15) + 47);
    document.getElementById('eveningReportHum').innerHTML = Math.floor(Math.random() * (15) + 47);
    document.getElementById('morningReportHeatIndex').innerHTML = Math.floor(Math.random() * (5) + 20);
    document.getElementById('eveningReportHeatIndex').innerHTML = Math.floor(Math.random() * (5) + 20);
    document.getElementById('morningReportColdWind').innerHTML = Math.floor(Math.random() * (7) + 20);
    document.getElementById('eveningReportColdWind').innerHTML = Math.floor(Math.random() * (7) + 20);
    document.getElementById('morningReportDewPoint').innerHTML = Math.floor(Math.random() * (8) + 14);
    document.getElementById('eveningReportDewPoint').innerHTML = Math.floor(Math.random() * (8) + 14);
    document.getElementById('morningReportBar').innerHTML = Math.floor(Math.random() * (48) + 1000);
    document.getElementById('eveningReportBar').innerHTML = Math.floor(Math.random() * (48) + 1000);
    document.getElementById('morningReportWindSpeed').innerHTML = Math.floor(Math.random() * (6) + 1);
    document.getElementById('eveningReportWindSpeed').innerHTML = Math.floor(Math.random() * (6) + 1);
    //Wind Direction
    document.getElementById('morningReportHighWind').innerHTML = parseInt(document.getElementById('morningReportWindSpeed').innerHTML) + 2;
    document.getElementById('eveningReportHighWind').innerHTML = parseInt(document.getElementById('eveningReportWindSpeed').innerHTML) + 2;
    document.getElementById('morningReportTenMinWind').innerHTML = Math.floor(Math.random() * (63) + 680);
    document.getElementById('eveningReportTenMinWind').innerHTML = Math.floor(Math.random() * (63) + 680);
    document.getElementById('morningReportRain').innerHTML = Math.floor(Math.random() * (5) + 1);
    document.getElementById('eveningReportRain').innerHTML = Math.floor(Math.random() * (5) + 1);
    document.getElementById('morningReportDayRain').innerHTML = document.getElementById('morningReportRain').innerHTML;
    document.getElementById('eveningReportDayRain').innerHTML = document.getElementById('eveningReportRain').innerHTML;
    document.getElementById('morningReportMonthRain').innerHTML = parseInt(document.getElementById('morningReportRain').innerHTML) * 30;
    document.getElementById('eveningReportMonthRain').innerHTML = parseInt(document.getElementById('eveningReportRain').innerHTML) * 30;
    document.getElementById('morningReportYearRain').innerHTML = parseInt(document.getElementById('morningReportRain').innerHTML) * 365;
    document.getElementById('eveningReportYearRain').innerHTML = parseInt(document.getElementById('eveningReportRain').innerHTML) * 365;
    document.getElementById('morningReportUV').innerHTML = Math.floor(Math.random() * (4) + 5);
    document.getElementById('eveningReportUV').innerHTML = Math.floor(Math.random() * (3) + 1);
    document.getElementById('morningReportUVHigh').innerHTML = parseInt(document.getElementById('morningReportUV').innerHTML) + 1;
    document.getElementById('eveningReportUVHigh').innerHTML = document.getElementById('eveningReportUV').innerHTML;
}

//Display Report Time options for date clicked - requires query database
function reportTimeOptions(date){
    //PLAN
    /*
    query database for reports on date
    foreach time, document.getElementById('viewReports') - add a button child label with time
        add a class to classList

    //should split into two functions
        1. to display reportTimeOption buttons
        2. populate report info

    query all reportTimeOptions buttons 
        use innerHTML to query database and bring up weather info
        populate report info with database info
    */
}
