// 模擬從服務器獲取的課程數據
const classes = [
    { id: 1, teacher: "張老師", date: "2024-09-01", startTime: "10:00", duration: 60, credits: 2 },
    { id: 2, teacher: "李老師", date: "2024-09-01", startTime: "14:00", duration: 30, credits: 1 },
    // 更多課程數據...
];

function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    let calendarHTML = '';

    // 添加星期幾的標題
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    weekdays.forEach(day => {
        calendarHTML += `<div class="calendar-day-header">${day}</div>`;
    });

    // 添加空白天數直到第一天
    for (let i = 0; i < firstDay.getDay(); i++) {
        calendarHTML += '<div class="calendar-day"></div>';
    }

    // 添加月份中的天數
    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const dayClasses = classes.filter(c => c.date === date);
        
        calendarHTML += `
            <div class="calendar-day">
                <div class="calendar-day-header">${day}</div>
                ${dayClasses.map(c => `
                    <div class="class-item" data-class-id="${c.id}">
                        ${c.startTime} - ${c.teacher}<br>
                        ${c.duration}分鐘 (${c.credits}點)
                    </div>
                `).join('')}
            </div>
        `;
    }

    document.getElementById('calendar').innerHTML = calendarHTML;
}

function updateMonth(year, month) {
    const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月",
                        "七月", "八月", "九月", "十月", "十一月", "十二月"];
    document.getElementById('current-month').textContent = `${year}年${monthNames[month]}`;
    generateCalendar(year, month);
}

let currentYear = 2024;
let currentMonth = 8; // 9月（0-indexed）

document.addEventListener('DOMContentLoaded', () => {
    updateMonth(currentYear, currentMonth);

    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateMonth(currentYear, currentMonth);
    });

    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateMonth(currentYear, currentMonth);
    });

    document.getElementById('calendar').addEventListener('click', (e) => {
        if (e.target.classList.contains('class-item')) {
            const classId = e.target.getAttribute('data-class-id');
            // 這裡可以添加預約課程的邏輯
            console.log(`預約課程：${classId}`);
        }
    });
});
