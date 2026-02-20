const managementCredit = document.getElementById("hours-1");
const managementLetter = document.getElementById("Grade-A");
const managementPoint = document.getElementById("Grade-1");

const systemCredit = document.getElementById("hours-2");
const systemLetter = document.getElementById("Grade-B");
const infromationPoint = document.getElementById("Grade-2");

const webCredit = document.getElementById("hours-3");
const webLetter = document.getElementById("Grade-C");
const webPoint = document.getElementById("Grade-3");

const netCredit = document.getElementById("hours-4");
const netLetter = document.getElementById("Grade-D");
const netPoint = document.getElementById("Grade-4");

const gradeTotal = document.getElementById("total");

managementCredit.textContent = 3;
systemCredit.textContent = 3;
webCredit.textContent = 3;
netCredit.textContent = 3;

const gradePoint = 10.5;
managementPoint.textContent = gradePoint;

if (gradePoint === 10.5) {
  managementLetter.textContent = "A";
} else if (gradePoint === 10.5) {
  managementLetter.textContent = "B+";
} else if (gradePoint === 9) {
  managementLetter.textContent = "B";
} else if (gradePoint === 7.5) {
  managementLetter.textContent = "B-";
} else if (gradePoint === 6) {
  managementLetter.textContent = "C+";
} else if (gradePoint === 4.5) {
  managementLetter.textContent = "C";
} else if (gradePoint === 3) {
  managementLetter.textContent = "C-";
} else if (gradePoint === 1.5) {
  managementLetter.textContent = "D";
} else if (gradePoint === 0) {
  managementLetter.textContent = "F";
} else {
  managementLetter.textContent = "invalid";
}

const systemPoint = 10.5;
infromationPoint.textContent = systemPoint;

if (systemPoint === 10.5) {
  systemLetter.textContent = "A";
} else if (systemPoint === 10.5) {
  systemLetter.textContent = "B+";
} else if (systemPoint === 9) {
  systemLetter.textContent = "B";
} else if (systemPoint === 7.5) {
  systemLetter.textContent = "B-";
} else if (systemPoint === 6) {
  systemLetter.textContent = "C+";
} else if (systemPoint === 4.5) {
  systemLetter.textContent = "C";
} else if (systemPoint === 3) {
  systemLetter.textContent = "C-";
} else if (systemPoint === 1.5) {
  systemLetter.textContent = "D";
} else if (systemPoint === 0) {
  systemLetter.textContent = "F";
} else {
  systemLetter.textContent = "invalid";
}
const devPoint = 10.5;
webPoint.textContent = devPoint;

if (devPoint === 10.5) {
  webLetter.textContent = "A";
} else if (devPoint === 10.5) {
  webLetter.textContent = "B+";
} else if (devPoint === 9) {
  webLetter.textContent = "B";
} else if (devPoint === 7.5) {
  webLetter.textContent = "B-";
} else if (devPoint === 6) {
  webLetter.textContent = "C+";
} else if (devPoint === 4.5) {
  webLetter.textContent = "C";
} else if (devPoint === 3) {
  webLetter.textContent = "C-";
} else if (devPoint === 1.5) {
  webLetter.textContent = "D";
} else if (devPoint === 0) {
  webLetter.textContent = "F";
} else {
  webLetter.textContent = "invalid";
}

const networkPoint = 10.5;
netPoint.textContent = networkPoint;

if (networkPoint === 10.5) {
  netLetter.textContent = "A";
} else if (networkPoint === 10.5) {
  netLetter.textContent = "B+";
} else if (networkPoint === 9) {
  netLetter.textContent = "B";
} else if (networkPoint === 7.5) {
  netLetter.textContent = "B-";
} else if (networkPoint === 6) {
  netLetter.textContent = "C+";
} else if (networkPoint === 4.5) {
  netLetter.textContent = "C";
} else if (networkPoint === 3) {
  netLetter.textContent = "C-";
} else if (networkPoint === 1.5) {
  netLetter.textContent = "D";
} else if (networkPoint === 0) {
  netLetter.textContent = "F";
} else {
  netLetter.textContent = "invalid";
}