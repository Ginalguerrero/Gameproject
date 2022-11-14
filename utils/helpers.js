module.exports = {
    format_date: (date) => {return date.toLocaleDateString()},
    format_list: (list) => list.split(';').reduce((ac, str) => ac + `<li>${str}</li>`, '')
};