import { prompt } from "./dep.ts";

/**
 * Returns a date object from STD in prompt. 
 * If date is invalid, it will prompt for input again
 */
export async function getDate(): Promise<Date> {
  const dayInput = await prompt("Day");
  const monthInput = await prompt("Month");
  const yearInput = await prompt("Year");
  let parsedDate = new Date(`${monthInput}/${dayInput}/${yearInput}`);
  if (isNaN(parsedDate.getTime())) {
    console.log("\n\nInvlaid date, try again.\n\n");

    parsedDate = await getDate();
  }
  return parsedDate;
}

/**
 * Returns the week number from the provided date object
 * @param date the date to get week number from
 */
export function getWeekNumber(date: Date) {
  const weekNumber = Math.floor(daysIntoYear(date) / 7);
  return weekNumber > 9 ? weekNumber : `0${weekNumber}`;
}

/**
   * Retrun DDMMYYYY date string with with optional seperator
   * @param date date to get string from
   */
export function getDMYDateString(date: Date, seperator: string = ""): string {
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const actualMonth = date.getMonth() + 1;
  const month = actualMonth > 9 ? actualMonth : `0${actualMonth}`;
  return `${day}${seperator}${month}${seperator}${date.getFullYear()}`;
}

/**
 * Returns number of days into the current year from the date object provided
 * 
 * @param date the date object to get days into year from
 */
// https://stackoverflow.com/a/40975730/3946892
export function daysIntoYear(date: Date) {
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
    Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}
