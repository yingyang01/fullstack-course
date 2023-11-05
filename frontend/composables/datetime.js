export const useYearOptions = (startYear) => {
    const currentYear = new Date().getFullYear();
    const years = [];

    startYear = startYear || 1980;
    while (startYear <= currentYear) {
        years.push({
            name: startYear,
            value: startYear,
        });

        startYear++;
    }

    return years;
}

export const useMonthOptions = () => {
    const months = [];

    for (let i = 1; i <= 12; i++) {
        const date = new Date();
        date.setMonth(i);

        months.push({
            name: date.toLocaleString('en-US', { month: 'long' }),
            value: i,
        })
    }

    return months;
}