function goBackInTime(howManyDaysBack) {
  let today = new Date();
  let date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (today.getDate() - howManyDaysBack);
  console.log(date);
}
goBackInTime(1);
