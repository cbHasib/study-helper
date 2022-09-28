const addBreakTimeToDb = (time) => {
  localStorage.setItem("break-time", JSON.stringify(time));
};

const getBreakTimeDb = () => {
  let breakTime = 0;

  const storedTime = localStorage.getItem("break-time");
  if (storedTime) {
    breakTime = JSON.parse(breakTime);
  }
  return +breakTime;
};

export { addBreakTimeToDb, getBreakTimeDb };
