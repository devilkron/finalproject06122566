async function getHolidays() {
    const url = "https://holidayapi.com/v1/holidays?key=f1bf8d7c-9441-4825-9798-ff0abe5a1164&country=TH&year=2022&";
    const response = await fetch(url);
    const data = await response.json();
    
    const holidays = data.holidays;
    const list = document.createElement("ul");
    
    holidays.forEach((holiday) => {
        const item = document.createElement("li");
        const name = document.createTextNode(holiday.name);
        const date = document.createTextNode(holiday.date);
        const type = document.createTextNode(holiday.type);
        
        item.appendChild(name);
        item.appendChild(document.createElement("br"));
        item.appendChild(date);
        item.appendChild(document.createElement("br"));
        item.appendChild(type);
        
        list.appendChild(item);
    });
   
    // console.log(countN);
    document.getElementById("countN").innerHTML = countN;
    document.body.appendChild(list);
}