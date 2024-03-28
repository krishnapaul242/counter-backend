const getFormattedDate = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${currentDate.getDate()}`;
  return formattedDate;
};

module.exports = { getFormattedDate };
