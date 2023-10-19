function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthDate;
  const ageInYears = Math.floor(ageInMilliseconds / 31536000000);
  const ageInMonths = Math.floor(
    (ageInMilliseconds % 31536000000) / 2628000000
  );
  const ageInDays = Math.floor((ageInMilliseconds % 2628000000) / 86400000);

  document.getElementById(
    "result"
  ).innerHTML = `<p>${ageInYears} years</p><p>${ageInMonths} months</p><p>${ageInDays} days</p>`;
}
