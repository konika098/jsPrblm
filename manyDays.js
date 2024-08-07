function getDays(startDate, endDate) {
    const totalTime = startDate.getTime() - endDate.getTime();
    console.log(totalTime);
    const totalDays = totalTime / (1000 * 3600 * 24);
    return totalDays;
  }
  const days = getDays(new Date("June 14, 2019"), new Date("June 1, 2019"));
  console.log(days); 
