# UC-002 Register for a Trial Visit

## Overview

| Field | Value |
|-------|-------|
| ID | UC-002 |
| Name | Register for a Trial Visit |
| Primary Actor | Visitor |
| Supporting Actor | Content Backend |
| Goal | Announce a child for a trial afternoon and receive an answer from the section |
| Status | Implemented |

## Preconditions

- The visitor has opened the page about trial visits.

## Main Success Scenario

1. Visitor reads the conditions of a trial visit and the answers to the frequent questions — the groups by age, what the child has to bring, when and where the afternoons take place, how safety is ensured and how high the annual fee is.
2. Visitor opens the registration form.
3. System shows a form asking for name, email address, telephone number and a message, and points out that all fields have to be filled in.
4. Visitor fills in all fields, stating for instance the number and the age of the children and the preferred date.
5. System releases the registration as soon as every field contains a value.
6. Visitor sends the registration.
7. System forwards the registration to the section.
8. System confirms the receipt with the note that the request is normally answered within two working days and empties the form.

## Alternative Flows

### A1: Form is incomplete

- **Trigger:** At step 5 at least one of the four fields is empty.
- **Steps:**
  1. System keeps the registration blocked.
  2. The scenario continues at step 4.

### A2: Registration cannot be delivered

- **Trigger:** At step 7 the registration cannot be handed over to the section.
- **Steps:**
  1. System closes the form and shows a notice that sending failed and that the visitor should try again later.
  2. System records the problem.
  3. The entered values are kept so that the visitor can send them again.

### A3: Visitor abandons the registration

- **Trigger:** At any point between step 3 and step 6 the visitor cancels or closes the form.
- **Steps:**
  1. System closes the form without sending anything.
  2. The use case ends.

## Postconditions

### Success

- The registration has been handed over to the section.
- The form is empty and ready for a further registration.

### Failure

- Nothing has been handed over to the section, and the entered values are still available in the form.

## Business Rules

| ID | Rule |
|----|------|
| BR-005 | Name, email address, telephone number and message are all mandatory for a registration. |
| BR-006 | The first two trial afternoons are free of charge and non-binding. |
| BR-007 | The annual fee is 80 francs per child; when a child joins during the year the fee is reduced proportionally. |
| BR-008 | Requests are normally answered within two working days. |
| BR-009 | Children are assigned to a group by age — from 5 to 7 years the Sprösslis, from 8 years the Glühwürmli. |
| BR-010 | A group is led by at least two leaders, one of whom holds the group leader qualification. |
