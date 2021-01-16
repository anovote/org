export const sprintPlanningMarkdown = (sprintName: string) =>
  `
# ${sprintName}

## Plan

- 
`;

export const sprintReviewMarkdown = (sprintName: string) =>
  `
# ${sprintName}

## Review

### Has been done

- 

### Has not been done

- 

### Work that has been added

- 

### Work removed

- 

`;

export const sprintRetrospectiveMarkdown = (sprintName: string, date: string) =>
  `
# ${sprintName}

**Date:** ${date}

**Attendees:** *Steffen Holanger, Emil Elton, Sander Hurlen, Christoffer Træen*

## Retrospective

| What went well                                               | What could improve                                |
| ------------------------------------------------------------ | ------------------------------------------------- |
|  |  |
|  |  |
|  |  |

# Actions

- [ ] 
- [ ] 
- [ ] 

`;
