# UC-006 Browse Photo Albums

## Overview

| Field | Value |
|-------|-------|
| ID | UC-006 |
| Name | Browse Photo Albums |
| Primary Actor | Member |
| Supporting Actor | Content Backend |
| Goal | Look at the pictures of past afternoons and keep them |
| Status | Implemented |

## Preconditions

- The member has opened the album page.

## Main Success Scenario

1. System retrieves the published albums.
2. System shows the albums as cards with preview picture, title, date and number of pictures, the most recent album first.
3. Member selects an album.
4. System shows the first picture of the album enlarged, together with its title and its position within the album.
5. Member steps to the next or the previous picture.
6. System shows the selected picture with title and position.
7. Member closes the enlarged view and returns to the overview.
8. Member asks for a whole album.
9. System hands the album over for saving.

## Alternative Flows

### A1: Albums cannot be retrieved

- **Trigger:** At step 1 the albums are not available.
- **Steps:**
  1. System shows a notice that the albums cannot be retrieved at the moment and asks the member to try again later.
  2. System records the problem.
  3. The use case ends without an overview.

### A2: Member closes the enlarged view with the keyboard

- **Trigger:** At step 5 the member presses the escape key or clicks next to the picture.
- **Steps:**
  1. System closes the enlarged view.
  2. The scenario continues at step 8.

## Postconditions

### Success

- The member has seen the pictures of the selected album.
- Where requested, the album has been handed over for saving.

### Failure

- No overview is shown; an explanatory notice takes its place.

## Business Rules

| ID | Rule |
|----|------|
| BR-024 | Albums are ordered by their date, the most recent album first. |
| BR-025 | Stepping backwards is offered only from the second picture onwards, stepping forwards only up to the second-last picture. |
| BR-026 | Pictures can also be browsed and closed with the arrow keys and the escape key. |
| BR-027 | An album is requested for download by its identifier; the content backend packs all its pictures into one archive. |
