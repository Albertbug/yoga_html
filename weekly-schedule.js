// 定義固定的週課表
const weeklySchedule = {
    '週一': [
        { time: '09:00-09:30', duration: 0.5, name: '早晨冥想', teacher: 'Ash', credits: 1 },
        { time: '10:00-11:00', duration: 1, name: '重訓人的伸展課', teacher: 'Ash', credits: 2 },
        { time: '20:00-21:00', duration: 1, name: '流動瑜珈', teacher: 'DD', credits: 2 },
        { time: '21:10-22:10', duration: 1, name: '陰瑜珈', teacher: 'Sabina', credits: 2 }
    ],
    '週二': [
        { time: '07:00-07:30', duration: 0.5, name: '呼吸法', teacher: 'Sabina', credits: 1 },
        { time: '10:00-11:00', duration: 1, name: '肌力核心', teacher: 'Ash', credits: 2 }
    ],
    '週三': [
        { time: '09:00-09:30', duration: 0.5, name: '早晨冥想', teacher: 'Ash', credits: 1 },
        { time: '10:00-11:00', duration: 1, name: '重訓人的伸展課', teacher: 'Ash', credits: 2 },
        { time: '20:00-21:00', duration: 1, name: '流動瑜珈', teacher: 'Ash', credits: 2 },
        { time: '21:10-21:40', duration: 0.5, name: '睡前伸展', teacher: 'Ash', credits: 1 }
    ],
    '週四': [
        { time: '07:00-07:30', duration: 0.5, name: '呼吸法', teacher: 'Sabina', credits: 1 },
        { time: '09:00-10:00', duration: 1, name: '肌力核心', teacher: 'Ash', credits: 2 },
    ],
    '週五': [
        { time: '21:10-22:10', duration: 1, name: '陰瑜珈', teacher: 'Sabina', credits: 2 }
    ],
    '週六': [
        { time: '20:00-20:30', duration: 0.5, name: '衝浪瑜珈', teacher: 'DD', credits: 1 },
        { time: '21:10-22:10', duration: 1, name: '流動瑜珈', teacher: 'Sabina', credits: 2 }
    ],
    '週日': [
        { time: '20:00-21:00', duration: 1, name: '伸展瑜珈', teacher: 'DD', credits: 2 },
        { time: '21:10-21:40', duration: 0.5, name: '衝浪人的滾筒伸展', teacher: 'DD', credits: 1 }
    ]
};

function generateWeeklySchedule() {
    const scheduleContainer = document.getElementById('weekly-schedule');
    scheduleContainer.innerHTML = '';

    Object.entries(weeklySchedule).forEach(([day, classes]) => {
        const dayElement = document.createElement('div');
        dayElement.className = 'schedule-day';
        dayElement.innerHTML = `<h3>${day}</h3>`;

        classes.forEach(cls => {
            const classElement = document.createElement('div');
            classElement.className = 'class-item';
            classElement.innerHTML = `
                <p>${cls.time} <span class="duration">${cls.duration}hr</span></p>
                <h4>${cls.name}</h4>
                <p>${cls.teacher}</p>
                <span class="credits">${cls.credits}點</span>
            `;
            dayElement.appendChild(classElement);
        });

        scheduleContainer.appendChild(dayElement);
    });
}

document.addEventListener('DOMContentLoaded', generateWeeklySchedule);





// 创建月份日历
function createMonthlyCalendar(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    let calendarHTML = '<table class="calendar">';
    calendarHTML += '<tr><th colspan="7">' + year + '年' + month + '月</th></tr>';
    calendarHTML += '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';

    let day = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
                calendarHTML += '<td></td>';
            } else if (day > daysInMonth) {
                calendarHTML += '<td></td>';
            } else {
                calendarHTML += '<td>' + day + '</td>';
                day++;
            }
        }
        calendarHTML += '</tr>';
        if (day > daysInMonth) {
            break;
        }
    }

    calendarHTML += '</table>';
    return calendarHTML;
}

// 使用示例
document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = createMonthlyCalendar(2024, 9);
});
