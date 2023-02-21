export function getDayofDate(dateShow, contentAppend, dateInput){
    const date = new Date(dateInput);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    contentAppend.innerHTML = `${dayOfWeek} (${dateShow})`;
};