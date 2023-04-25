const getSleepHours = (day) => {
    if (day === "saturday" || day === "sunday") {
      return 10;
    } else {
      return 8;
    }
  };
  
  const getActualSleepHours = () => {
    let hoursSlept =
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday");
  
    return hoursSlept;
  };
  
  const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You sleep enough!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        "You got " +
          (actualSleepHours - idealSleepHours) +
          " hour(s) more sleep than you needed this week. Wake up early."
      );
    } else {
      console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) less sleep than you needed this week. Get some rest."
      );
    }
  };
  
  calculateSleepDebt();
  