let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistered = false;
let runnerAge = 18;

if (runnerAge > 18 && earlyRegistered) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegistered) {
  console.log(`You will race with number ${raceNumber} at 9:30 am`);
} else if (runnerAge > 18 && !earlyRegistered) {
  console.log(`You will race with number ${raceNumber} at 11:00 am`);
}

if (runnerAge < 18) {
  console.log("Youth registrants run at 12:30 pm (regardless of registration)");
} else {
  console.log("You need to came at registration desk");
}
