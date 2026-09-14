# UC-004 Review Press Coverage and Historic Documents

## Overview

| Field | Value |
|-------|-------|
| ID | UC-004 |
| Name | Review Press Coverage and Historic Documents |
| Primary Actor | Visitor |
| Supporting Actor | Content Backend |
| Goal | Read what has been published about the section and consult documents from its history |
| Status | Implemented |

## Preconditions

- The visitor has opened the media page.

## Main Success Scenario

1. System retrieves the published media entries.
2. System shows the current press articles in one table and the historic documents in a second table, each with the date of publication and a short description.
3. Visitor selects an entry.
4. System opens the document belonging to the entry.
5. Visitor returns to the overview and selects a further entry.

## Alternative Flows

### A1: Media entries cannot be retrieved

- **Trigger:** At step 1 the media entries are not available.
- **Steps:**
  1. System shows a notice that the media cannot be retrieved at the moment and asks the visitor to try again later.
  2. System records the problem.
  3. The use case ends without an overview.

## Postconditions

### Success

- The visitor has seen the overview and, where selected, the document belonging to an entry.

### Failure

- No overview is shown; an explanatory notice takes its place.

## Business Rules

| ID | Rule |
|----|------|
| BR-013 | An entry marked as a historic document appears under the historic documents; every other entry appears under the current press articles. |
| BR-014 | Both tables are ordered by date of publication, the most recent entry first. |
| BR-015 | Dates are shown in the Swiss notation day.month.year. |
