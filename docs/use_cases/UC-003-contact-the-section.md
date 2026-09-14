# UC-003 Contact the Section

## Overview

| Field | Value |
|-------|-------|
| ID | UC-003 |
| Name | Contact the Section |
| Primary Actor | Visitor |
| Supporting Actor | Content Backend |
| Goal | Send a question or a remark to the section and receive an answer |
| Status | Implemented |

## Preconditions

- The visitor has opened the contact page.

## Main Success Scenario

1. System shows a form asking for name, email address and the message.
2. Visitor fills in all three fields.
3. System releases the sending as soon as every field contains a value.
4. Visitor sends the message.
5. System forwards the message to the section.
6. System confirms the receipt with the note that the request is normally answered within two working days and empties the form.

## Alternative Flows

### A1: Form is incomplete

- **Trigger:** At step 3 at least one of the three fields is empty.
- **Steps:**
  1. System keeps the sending blocked.
  2. The scenario continues at step 2.

### A2: Message cannot be delivered

- **Trigger:** At step 5 the message cannot be handed over to the section.
- **Steps:**
  1. System shows a notice that sending failed and that the visitor should try again later.
  2. System records the problem.
  3. The entered values are kept so that the visitor can send them again.

## Postconditions

### Success

- The message has been handed over to the section.
- The form is empty and ready for a further message.

### Failure

- Nothing has been handed over to the section, and the entered values are still available in the form.

## Business Rules

| ID | Rule |
|----|------|
| BR-011 | Name, email address and message are all mandatory for a contact message. |
| BR-012 | Contact messages are normally answered within two working days. |
