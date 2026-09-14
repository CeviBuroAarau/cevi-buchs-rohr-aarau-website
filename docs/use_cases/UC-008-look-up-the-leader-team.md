# UC-008 Look Up the Leader Team

## Overview

| Field | Value |
|-------|-------|
| ID | UC-008 |
| Name | Look Up the Leader Team |
| Primary Actor | Member |
| Supporting Actor | Content Backend |
| Goal | Know who leads the section and the own group, and get to know them personally |
| Status | Implemented |

## Preconditions

- The member has opened the leader team page.

## Main Success Scenario

1. System retrieves the leaders of the section.
2. System shows the active leaders separated into the section leadership and the groups Glühwürmli and Sprösslis, each with picture, name and scout name.
3. Member selects a leader.
4. System shows a short profile with function, group, year of birth, place of residence, profession or school, hobbies, since when the leader is in the section, why they are in the section and their best experiences.
5. Member closes the profile.

## Alternative Flows

### A1: Leaders cannot be retrieved

- **Trigger:** At step 1 the leaders are not available.
- **Steps:**
  1. System shows a notice that the leader list cannot be retrieved at the moment and asks the member to try again later.
  2. System records the problem.
  3. The use case ends without a leader list.

## Postconditions

### Success

- The member has seen the leaders and, where selected, the profile of a leader.

### Failure

- No leader list is shown; an explanatory notice takes its place.

## Business Rules

| ID | Rule |
|----|------|
| BR-035 | Only leaders marked as active are shown. |
| BR-036 | A leader whose function is section leader is listed under the section leadership; the remaining leaders are listed under the group they lead. |
| BR-037 | A leader is presented with their name and their scout name. |
| BR-038 | Leaders work on a voluntary basis; the functions are assistant leader from 15 years, group leader from 18 years and section leader from 18 years. |
