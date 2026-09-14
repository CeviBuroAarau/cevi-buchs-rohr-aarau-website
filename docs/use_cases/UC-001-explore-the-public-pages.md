# UC-001 Explore the Public Pages

## Overview

| Field | Value |
|-------|-------|
| ID | UC-001 |
| Name | Explore the Public Pages |
| Primary Actor | Visitor |
| Supporting Actor | Content Backend |
| Goal | Find out who the section is, what it does, where it meets and how it can be supported |
| Status | Implemented |

## Preconditions

- The visitor has opened the website. No registration or login is required.

## Main Success Scenario

1. Visitor opens the website.
2. System shows the welcome page with a randomly selected welcome picture, the section claim and the main navigation.
3. Visitor chooses a topic from the navigation — introduction for interested people, information for members, the meeting place, Cevi Schweiz, donations, training, or the privacy information.
4. System shows the selected page.
5. Visitor opens the activities page.
6. System shows a gallery of thumbnails of typical activities of an afternoon.
7. Visitor selects a thumbnail.
8. System shows the picture enlarged together with its title and lets the visitor step to the previous or next picture.
9. Visitor closes the enlarged picture and continues browsing.

## Alternative Flows

### A1: Welcome picture cannot be retrieved

- **Trigger:** At step 2 the welcome pictures are not available.
- **Steps:**
  1. System shows the welcome page without a background picture.
  2. System records the problem.
  3. Navigation stays fully usable; the scenario continues at step 3.

### A2: Activity pictures cannot be retrieved

- **Trigger:** At step 6 the activities are not available.
- **Steps:**
  1. System shows a notice that the activities cannot be retrieved at the moment and asks the visitor to try again later.
  2. System records the problem.
  3. The use case ends without a gallery.

### A3: Visitor opens the meeting place page

- **Trigger:** At step 4 the visitor selected the meeting place.
- **Steps:**
  1. System shows a map centred on the parish house with the assembly point marked.
  2. Visitor switches between street map and satellite view and zooms within the permitted range.
  3. The scenario continues at step 3.

### A4: Visitor opens an unknown address

- **Trigger:** At step 3 the requested address does not belong to any page.
- **Steps:**
  1. System shows a "page not found" page including the navigation back to the known pages.
  2. The scenario continues at step 3.

### A5: Visitor checks the released version

- **Trigger:** At step 3 the visitor opens the version page.
- **Steps:**
  1. System shows the released version, the build date and the source revision of the running website.
  2. The scenario continues at step 3.

## Postconditions

### Success

- The visitor has seen the requested information.
- No data of the visitor is stored by the system.

### Failure

- The affected page is shown with an explanatory notice instead of the missing content; the rest of the site stays reachable.

## Business Rules

| ID | Rule |
|----|------|
| BR-001 | The picture shown on the welcome page is picked at random from the published welcome pictures on every visit. |
| BR-002 | All information pages are public — none of them requires a registration or a login. |
| BR-003 | Stepping to the previous picture is offered only from the second picture onwards, stepping to the next one only up to the second-last picture. |
| BR-004 | Every visit of a page is counted anonymously for the visit statistics. |
