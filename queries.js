const getCounterValue = (formattedDate) =>
    `SELECT * FROM counter.static WHERE date = '${formattedDate}'`;

const increaseCounterValue = (formattedDate, value) => `UPDATE counter.static SET counterValue = ${value + 1} WHERE date = '${formattedDate}'` 

module.exports = { getCounterValue, increaseCounterValue }
