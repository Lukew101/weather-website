const timeAndDate = document.querySelector(".time-date");

export function obtainDateAndTime(){
    setInterval(()=>{
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (minutes < 10){
            minutes = '0' + minutes;
        };
        if (seconds < 10){
            seconds = '0' + seconds;
        }

        const displayDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = daysOfWeek[date.getDay()];
        timeAndDate.innerHTML = `<h2>${displayDate}</h2>
                            <h2>${dayOfWeek}</h2>
                            <h2>${hours}:${minutes}:${seconds}</h2>`
    }, 1000)
}
obtainDateAndTime();