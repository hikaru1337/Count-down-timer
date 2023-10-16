const Seasons = {
    3: "spring",
    6: "summer",
    9: "autumn",
    12: "winter"
};

const title = document.getElementById(`EventType`);
var video = document.getElementById('video');

const winterButton = document.getElementsByClassName(`Winter`)[0];
const springButton = document.getElementsByClassName(`Spring`)[0];
const summerButton = document.getElementsByClassName(`Summer`)[0];
const autumnButton = document.getElementsByClassName(`Autumn`)[0];

let date = getDate();
let nextDate = getNextSeasonDate();
let [days, hours, mins, seconds] = getStartOfNextSeason();

setSeason();

setInterval(timeRender, 1000);

function getDate() {
    return new Date();
}

function setSeason(TypeMonth) {
    date = getDate();
    nextDate = getNextSeasonDate(TypeMonth);
    [days, hours, mins, seconds] = getStartOfNextSeason();
    setTitle();
    setTime();
    setVideo();

    
}

function setTitle() {
    let NextMonth = nextDate.getMonth() + 1;
    title.innerHTML = `Time for ${Seasons[NextMonth]}`; //  ${SeasonNow}
}

function setTime() {
    const timeElements = document.getElementsByClassName(`Time`);
    [days, hours, mins, seconds] = getStartOfNextSeason();
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${mins}`;
    timeElements[3].textContent = `${seconds}`;
}

function setVideo() {
    const Month = nextDate.getMonth() + 1;
    const TypeMonth = Seasons[Month];
    let path = `./video/${TypeMonth}.mp4`;

    video.src = path;
    video.play();
}

function getNextSeasonDate(TypeMonth) {
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    
    let NextMonth = getNextSeasonType(currentMonth);
    if(TypeMonth)
    NextMonth = TypeMonth;

    if(NextMonth < currentMonth)
        currentYear += 1;
    
    const nextSeasonDate = new Date(currentYear, NextMonth - 1, 1, 0, 0);
    return nextSeasonDate;
}

function getStartOfNextSeason() {
    let dateTotalToNextSeason = nextDate - getDate();
    
    var days = Math.floor(dateTotalToNextSeason / (1000 * 60 * 60 * 24));
    dateTotalToNextSeason -=  days * (1000 * 60 * 60 * 24);
    
    var hours = Math.floor(dateTotalToNextSeason / (1000 * 60 * 60));
    dateTotalToNextSeason -= hours * (1000 * 60 * 60);
    
    var mins = Math.floor(dateTotalToNextSeason / (1000 * 60));
    dateTotalToNextSeason -= mins * (1000 * 60);
    
    var seconds = Math.floor(dateTotalToNextSeason / (1000));
    dateTotalToNextSeason -= seconds * (1000);

    return [days, hours, mins, seconds];
}

function timeRender() {
    setTime();
}

function getNextSeasonType(month) {
    const seasonsStartMonths = [3, 6, 9, 12]; 

    for (let i = 0; i < seasonsStartMonths.length; i++) {
        if (month < seasonsStartMonths[i]) {
            return seasonsStartMonths[i];
        }
    }
}

winterButton.addEventListener("click",e => setSeason(12));
springButton.addEventListener("click",e => setSeason(3));
summerButton.addEventListener("click",e => setSeason(6));
autumnButton.addEventListener("click",e => setSeason(9));