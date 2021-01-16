import { parse } from "https://deno.land/std/flags/mod.ts";
import { createMeeting } from "./meeting/meeting.ts";
import { createSprint } from "./sprint/sprint.ts";

// Destructs args from Deno
const { args } = Deno;
// Parse args into key value pair
const parsedArgs = parse(args);

async function main() {
  const firstArg = Object.keys(parsedArgs)[1];

  switch (firstArg) {
    case "meeting":
    case "m":
      createMeeting();
      break;
    case "sprint":
    case "s":
      createSprint();
      break;
    default:
      console.log(
        `
Help:\n\n
Create meeting: -m or -meeting\n
Create sprint: -s or -sprint
      `,
      );

      break;
  }
}

main();
