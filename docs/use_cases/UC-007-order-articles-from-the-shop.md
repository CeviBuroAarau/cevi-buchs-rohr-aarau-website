# UC-007 Order Articles from the Shop

## Overview

| Field | Value |
|-------|-------|
| ID | UC-007 |
| Name | Order Articles from the Shop |
| Primary Actor | Member |
| Supporting Actor | Content Backend |
| Goal | Find the offered articles and order them for delivery or collection |
| Status | Implemented |

## Preconditions

- The member has opened the shop page.

## Main Success Scenario

1. System retrieves the offered articles.
2. System shows the regular articles and the clearance items separately, states how many articles each of them holds and shows for every article its picture, name, price in francs and a short description.
3. Member switches between the regular articles and the clearance items.
4. Member searches for an article by name.
5. System shows the matching articles regardless of their category.
6. Member opens the order form.
7. System asks for name, the desired articles, whether the order is to be delivered or collected, the email address and — for a delivery — the delivery address.
8. Member fills in the form and sends the order.
9. System forwards the order to the section.
10. System confirms the receipt with the note that the order is normally handled within five working days and resets the form.

## Alternative Flows

### A1: Articles cannot be retrieved

- **Trigger:** At step 1 the articles are not available.
- **Steps:**
  1. System shows a notice that the articles cannot be retrieved at the moment and asks the member to try again later.
  2. System records the problem.
  3. The order form stays available; the scenario continues at step 6.

### A2: Search finds no article

- **Trigger:** At step 5 no article name matches the search term.
- **Steps:**
  1. System states that no article was found.
  2. The scenario continues at step 4.

### A3: Order is incomplete

- **Trigger:** At step 8 a mandatory entry is missing.
- **Steps:**
  1. System keeps the sending blocked.
  2. The scenario continues at step 8.

### A4: Order cannot be delivered

- **Trigger:** At step 9 the order cannot be handed over to the section.
- **Steps:**
  1. System closes the form and shows a notice that sending failed and that the member should try again later.
  2. System records the problem.
  3. The entered values are kept so that the member can send them again.

### A5: Member abandons the order

- **Trigger:** At any point between step 7 and step 8 the member cancels or closes the form.
- **Steps:**
  1. System closes the form without sending anything.
  2. The use case ends.

## Postconditions

### Success

- The order has been handed over to the section.
- The form is empty and set back to collection.

### Failure

- Nothing has been handed over to the section, and the entered values are still available in the form.

## Business Rules

| ID | Rule |
|----|------|
| BR-028 | Articles belong either to the regular articles or to the clearance items. |
| BR-029 | The search compares the search term with the article name irrespective of upper and lower case. |
| BR-030 | Name, email address, desired articles and the choice between delivery and collection are mandatory for an order. |
| BR-031 | The delivery address is mandatory only when a delivery is chosen. |
| BR-032 | Collection is preselected as the way of handing over. |
| BR-033 | Orders are normally handled within five working days. |
| BR-034 | Articles can also be bought directly after an afternoon without an order. |
