// Your task in order to complete this Kata is to write a function which formats a duration,
// given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now".
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
function durationUnitText(duration, unit) {
  if (duration === 0) {
    return '';
  }
  return duration > 1 ? `${duration} ${unit}s` : `${duration} ${unit}`;
}

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const numYears = Math.floor(seconds / 31536000);
  const numDays = Math.floor((seconds % 31536000) / 86400);
  const numHours = Math.floor((seconds % 86400) / 3600);
  const numMinutes = Math.floor((seconds % 3600) / 60);
  const numSeconds = seconds % 60;

  const durationParts = [
    durationUnitText(numYears, "year"),
    durationUnitText(numDays, "day"),
    durationUnitText(numHours, "hour"),
    durationUnitText(numMinutes, "minute"),
    durationUnitText(numSeconds, "second"),
  ];
  const responseText = durationParts.filter(s => s.length).join(', ');
  const idx = responseText.lastIndexOf(',');
  return idx > 0 ? responseText.slice(0, idx) + ' and ' + responseText.slice(idx + 2) : responseText; 
}

console.log(formatDuration(0));
console.log(formatDuration(3662));
console.log(formatDuration(3599));
console.log(formatDuration(60));
console.log(formatDuration(15731080));
console.log(formatDuration(2130358));
console.log(formatDuration(132030240));

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
    assert.strictEqual(
      formatDuration(15731080),
      "182 days, 1 hour, 44 minutes and 40 seconds",
    );
    assert.strictEqual(
      formatDuration(2130358),
      "24 days, 15 hours, 45 minutes and 58 seconds",
    );
    assert.strictEqual(
      formatDuration(132030240),
      "4 years, 68 days, 3 hours and 4 minutes",
    );
  });
});
