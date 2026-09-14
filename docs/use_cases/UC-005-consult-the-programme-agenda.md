# UC-005 Consult the Programme Agenda

## Overview

| Field | Value |
|-------|-------|
| ID | UC-005 |
| Name | Consult the Programme Agenda |
| Primary Actor | Member |
| Supporting Actor | Content Backend |
| Goal | Know when the next afternoons take place and what has to be prepared for them |
| Status | Implemented |

## Preconditions

- The member has opened the agenda page.

## Main Success Scenario

1. System retrieves the planned events.
2. System shows the next three upcoming events in chronological order, each with its date, time and a short description.
3. System offers, for every event for which detailed information exists, a link per addressed group or for the whole section.
4. Member opens the detailed information of an event.
5. System shows the announcement for the addressed group — meeting point, what to bring, end of the afternoon and whom to inform in case of absence.
6. Member closes the announcement.
7. Member asks for further events.
8. System shows all upcoming events.
9. Member asks for all planned events as a document.
10. System produces a document containing the section logo, the introduction for parents and children, the table of all upcoming events, the contact details for cancellations, the invitation to bring a friend along and the note about the announcements, and hands it over for saving.

## Alternative Flows

### A1: Events cannot be retrieved

- **Trigger:** At step 1 the events are not available.
- **Steps:**
  1. System shows a notice that the agenda cannot be retrieved at the moment and asks the member to try again later.
  2. System records the problem.
  3. The use case ends without an agenda.

### A2: Detailed information cannot be retrieved

- **Trigger:** At step 3 the detailed information is not available.
- **Steps:**
  1. System shows the events without links to detailed information.
  2. System records the problem.
  3. The scenario continues at step 7.

### A3: No detailed information published yet

- **Trigger:** At step 3 no announcement exists for the day of an event.
- **Steps:**
  1. System shows the event without a link to detailed information.
  2. The scenario continues at step 7.

## Postconditions

### Success

- The member knows the dates of the next afternoons and the announcements published for them.
- Where requested, the overview of all planned events has been handed over as a document.

### Failure

- No agenda is shown; an explanatory notice takes its place.

## Business Rules

| ID | Rule |
|----|------|
| BR-016 | Only events from the current day onwards are shown; past events disappear from the agenda. |
| BR-017 | Events are shown in chronological order, the next one first. |
| BR-018 | Three events are shown initially; the remaining upcoming events are shown on request. |
| BR-019 | An announcement is shown with an event when it is published for the same calendar day; announcements for past days are not shown. |
| BR-020 | An announcement is addressed either to a single group or to the whole section. |
| BR-021 | The document with the planned events is named after the day of its creation and carries the creation date and time. |
| BR-022 | Children should be excused with their group leader ideally one week before the afternoon. |
| BR-023 | An announcement with detailed information is published about one week before a regular afternoon, and several weeks before a special event. |
