# Vision

## Purpose

The website of Cevi Buchs-Rohr Aarau is the public face and the everyday information channel of a
volunteer-run youth section. It shall convince interested families that the section is worth a visit,
and it shall give the families who already belong to the section everything they need for the next
afternoon — dates, announcements, pictures, the leader team and the shop.

## Problem Statement

A section run entirely by volunteers has neither the time nor the budget for a website that has to be
edited by a developer. At the same time the two audiences ask very different questions:

- **Interested families** want to know what a Jungschar afternoon is, whether their child fits into a
  group, what it costs, where it takes place — and they want an easy way to announce a trial visit.
- **Member families** want the next dates, the announcement with meeting point and equipment, the
  pictures of the last afternoon and a way to order a T-shirt.

Without a common place for this information, the answers are scattered over telephone calls, chat
groups and paper slips, and every question ends up with the same few leaders.

## Product Overview

A publicly readable website — no registration, no login — that presents all content of the section
and hands three kinds of form entries over to the section: a trial-visit registration, a contact
message and a shop order. All content is maintained by the leaders in an external content management
system and is read by the website at display time, so that publishing a new album, an event or an
announcement never requires a software release.

## Target Users and Stakeholders

| Stakeholder             | Interest                                                                                |
|-------------------------|-----------------------------------------------------------------------------------------|
| Visitor                 | Understand the section, judge whether it fits the own child, register for a trial visit |
| Member (child, parents) | Dates, announcements, albums, leader team, shop                                          |
| Leader team             | Maintain content without developer help; receive registrations, messages and orders      |
| Section leadership      | Represent the section publicly; recruit new children and new leaders                     |
| Maintainer              | Keep the site running with a very small maintenance effort                               |

## Key Capabilities

1. **Present the section** — welcome page, information pages, gallery of typical activities and the
   meeting place on a map (UC-001).
2. **Win new children** — the conditions of a trial visit with the frequent questions, and a
   registration form that reaches the section directly (UC-002).
3. **Stay reachable** — a contact form for questions and remarks (UC-003).
4. **Show the public record** — press articles and documents from the history of the section (UC-004).
5. **Announce the programme** — the upcoming events with their announcements per group, and the whole
   programme as a document to print or keep (UC-005).
6. **Keep the memories** — photo albums of past afternoons, browsable picture by picture and
   downloadable as a whole (UC-006).
7. **Sell the section articles** — the shop catalogue with a search and an order form for delivery or
   collection (UC-007).
8. **Introduce the leaders** — the active leader team by group, each with a short personal profile
   (UC-008).

## Success Criteria

- An interested family can go from the welcome page to a sent trial registration without asking
  anybody a question.
- A leader can publish an event, an announcement, an album or an article without a software release.
- A member finds the date and the announcement of the next afternoon within a few seconds.
- A failure of the content backend degrades single pages with an explanatory notice instead of taking
  the site down.

## Scope

### In Scope

- Public, read-only presentation of all section content.
- The three forms — trial registration, contact message, shop order — handed over to the section.
- Producing the programme overview as a document and downloading a whole photo album.
- Anonymous counting of page visits for the section statistics.

### Out of Scope

- Editing content on the website itself; content is maintained in the content management system.
- User accounts, login, personalisation or member administration.
- Online payment or a shopping cart; orders are settled directly with the section.
- Storing registrations, messages or orders in the website; they are forwarded and not kept.
- Multilingual content; the website addresses a German-speaking region.

## Assumptions and Dependencies

- The content management system (Cockpit) is reachable and holds the published content; the website
  reads it with a public, read-only token and posts the three forms to it.
- A separate download service provides whole photo albums as an archive.
- Leaders keep the content up to date — in particular the announcements, which are published about a
  week before a regular afternoon.
- The site is delivered as a static single-page application in a container image; there is no own
  server-side database.
