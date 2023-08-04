const currentDateFunc = () => {
  // Current Date
  const currentDate = new Date();
  const monthText = currentDate.toLocaleString('en', { month: 'long' });

  const month = document.querySelector('#month');
  const date = document.querySelector('#date');
  const hour = document.querySelector('#hour');
  const minute = document.querySelector('#minute');

  month.textContent = monthText;
  date.textContent = currentDate.getDate();
  hour.textContent = currentDate.getHours();
  minute.textContent = currentDate.getMinutes();
}

export default currentDateFunc;