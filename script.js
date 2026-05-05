const markets = [
    {n: "MACAU P1", r: "4432", s: "OPEN"},
    {n: "SYDNEY", r: "1092", s: "OPEN"},
    {n: "SGP", r: "5567", s: "CLOSED"},
    {n: "HK", r: "8821", s: "OPEN"},
    {n: "TAIWAN", r: "3310", s: "OPEN"},
    {n: "CHINA", r: "4522", s: "CLOSED"}
];

const tbody = document.getElementById('data-pasaran');
markets.forEach(m => {
    tbody.innerHTML += `
        <tr>
            <td><b>${m.n}</b></td>
            <td style="color:gold; font-weight:bold">${m.r}</td>
            <td style="color:${m.s === 'OPEN' ? '#0f0' : '#f00'}">${m.s}</td>
        </tr>
    `;
});

setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);
