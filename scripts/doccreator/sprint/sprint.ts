import { getDate, getDMYDateString } from "../dep.ts";
import { prompt } from "../dep.ts";
import {
  sprintPlanningMarkdown,
  sprintRetrospectiveMarkdown,
  sprintReviewMarkdown,
} from "./markdown.ts";

export async function createSprint() {
  console.log("Creating sprint....\n");
  await Deno.mkdir("./sprints").catch(() => {});

  const d = await getDate();
  const sprintNumber = Number.parseInt(await prompt("Sprint number"));

  const sprintFolderName = `sprint_${sprintNumber}`;
  const sprintName = `Sprint ${sprintNumber}`;

  try {
    await Deno.mkdir(`./sprints/${sprintFolderName}`);
    const baseFolder = `sprints/${sprintFolderName}`;

    Deno.writeFile(
      `${baseFolder}/review.md`,
      new TextEncoder().encode(sprintReviewMarkdown(sprintName)),
    );

    Deno.writeFile(
      `${baseFolder}/planning.md`,
      new TextEncoder().encode(sprintPlanningMarkdown(sprintName)),
    );

    Deno.writeFile(
      `${baseFolder}/retrospective.md`,
      new TextEncoder().encode(
        sprintRetrospectiveMarkdown(sprintName, getDMYDateString(d, "/")),
      ),
    );
  } catch (error) {
    console.log(`Sprint ${sprintNumber} already exist!`);
  }
}
