export function formatted_date(datestring: string): string {
    const date = new Date(datestring);
    const currentDate = new Date();

    let formattedDate = '';

    if (date.toDateString() === currentDate.toDateString()) {
        // If the date is today, format as time only
        formattedDate = date.toLocaleTimeString();
        console.log(formattedDate);
    } else if (date.getFullYear() === currentDate.getFullYear()) {
        // If the date is within the current year, format as month and date
        formattedDate = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        console.log(formattedDate);
    } else {
        // If the date is not within the current year, format as dd mm yyyy
        formattedDate = date.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
        console.log(formattedDate);
    }

    return formattedDate;
}

export function renderFullName(row: any): string {
    const fullName = row.first_name + ' ' + row.last_name;
    return row.is_read ? fullName : `<strong>${fullName}</strong>`;
};