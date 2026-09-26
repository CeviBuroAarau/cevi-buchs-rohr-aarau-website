# Requirements

Requirements catalog for the website of Cevi Buchs-Rohr Aarau, derived from [vision.md](vision.md),
the use case specifications in [use_cases/](use_cases/) and the [entity model](entity_model.md).

**Roles:** *Visitor* (interested person, not a member), *Member* (child or parent of the section),
*Leader* (maintains the content in the content management system and receives the form entries),
*Maintainer* (keeps the software running).

## Functional Requirements

| ID     | Title                        | User Story                                                                                                                                                                    | Source  | Priority | Status      |
|--------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|-------------|
| FR-001 | Welcome Page                 | As a visitor, I want to see a welcome page with a randomly chosen picture of the section and its claim so that I get a first impression of the section.                        | UC-001  | High     | Implemented |
| FR-002 | Information Pages            | As a visitor, I want to reach the pages about the section, the members, the meeting place, Cevi Schweiz, donations, training and privacy from one navigation so that I can find every topic without searching. | UC-001  | High     | Implemented |
| FR-003 | Activity Gallery             | As a visitor, I want to browse a gallery of pictures of typical activities so that I can see what happens on an afternoon.                                                     | UC-001  | High     | Implemented |
| FR-004 | Enlarged Picture View        | As a visitor, I want to open a gallery picture enlarged with its title and step to the previous or next picture so that I can look at the activities in detail.                | UC-001  | Medium   | Implemented |
| FR-005 | Meeting Place Map            | As a visitor, I want to see the meeting place on a zoomable map with street and satellite view so that I can find the parish house.                                            | UC-001  | Medium   | Implemented |
| FR-006 | Page Not Found               | As a visitor, I want to get a "page not found" page with the full navigation when I open an unknown address so that I can return to the known pages.                           | UC-001  | Medium   | Implemented |
| FR-007 | Version Information          | As a maintainer, I want to see the released version, the build date and the source revision of the running website so that I can tell which build is deployed.                 | UC-001  | Low      | Implemented |
| FR-008 | Trial Visit Information      | As a visitor, I want to read the conditions of a trial visit and the answers to the frequent questions so that I can judge whether the section fits my child.                  | UC-002  | High     | Implemented |
| FR-009 | Trial Registration Form      | As a visitor, I want to register my child for a trial afternoon with name, email address, telephone number and a message so that the section can invite us.                    | UC-002  | High     | Implemented |
| FR-010 | Contact Form                 | As a visitor, I want to send a question or a remark with my name and email address so that the section can answer me.                                                          | UC-003  | High     | Implemented |
| FR-011 | Press Coverage Overview      | As a visitor, I want to see the press articles about the section with date and short description so that I can read what has been published about it.                          | UC-004  | Medium   | Implemented |
| FR-012 | Historic Document Overview   | As a visitor, I want to see the documents from the history of the section in a separate table so that I can consult them apart from the current press.                         | UC-004  | Medium   | Implemented |
| FR-013 | Open Media Document          | As a visitor, I want to open the document belonging to a media entry so that I can read the article or the historic document itself.                                           | UC-004  | Medium   | Implemented |
| FR-014 | Upcoming Events              | As a member, I want to see the next three upcoming events with date, time and short description, and show all further ones on request, so that I know when the next afternoons take place. | UC-005  | High     | Implemented |
| FR-015 | Event Announcement           | As a member, I want to open the announcement of an event for my group so that I know the meeting point, what to bring, when the afternoon ends and whom to inform in case of absence. | UC-005  | High     | Implemented |
| FR-016 | Programme Document           | As a member, I want to save all planned events as one document with the introduction, the event table and the contact details so that I can print it and keep it at home.      | UC-005  | Medium   | Implemented |
| FR-017 | Album Overview               | As a member, I want to see the photo albums as cards with preview picture, title, date and number of pictures, the most recent first, so that I find the album of an afternoon quickly. | UC-006  | High     | Implemented |
| FR-018 | Album Picture Viewer         | As a member, I want to look at the pictures of an album one by one with title and position, using buttons or the arrow and escape keys, so that I can go through the album comfortably. | UC-006  | High     | Implemented |
| FR-019 | Album Download               | As a member, I want to download a whole album so that I can keep the pictures of an afternoon.                                                                                 | UC-006  | Medium   | Implemented |
| FR-020 | Shop Catalogue               | As a member, I want to see the regular articles and the clearance items separately, each with picture, name, price and description, so that I know what the section offers.    | UC-007  | High     | Implemented |
| FR-021 | Article Search               | As a member, I want to search the articles by name across both categories so that I find a specific article without browsing.                                                  | UC-007  | Medium   | Implemented |
| FR-022 | Shop Order Form              | As a member, I want to order articles stating my name, email address, the wanted articles and whether I collect them or want them delivered so that the section can hand them over. | UC-007  | High     | Implemented |
| FR-023 | Leader Team Overview         | As a member, I want to see the active leaders grouped into the section leadership and the age groups, each with picture, name and scout name, so that I know who leads my child's group. | UC-008  | High     | Implemented |
| FR-024 | Leader Profile               | As a member, I want to open a short profile of a leader with function, group, age, place, profession, hobbies and personal statements so that I get to know them before the first afternoon. | UC-008  | Medium   | Implemented |
| FR-025 | Form Delivery to the Section | As a leader, I want every sent registration, contact message and order to be handed over to the section so that I can answer it without watching the website.                   | UC-002, UC-003, UC-007 | High | Implemented |
| FR-026 | Mandatory Field Enforcement  | As a leader, I want the website to block sending until every mandatory field of a form is filled in so that I receive requests I can actually answer.                           | UC-002, UC-003, UC-007 | High | Implemented |
| FR-027 | Submission Confirmation      | As a visitor, I want a confirmation after sending a form telling me within how many working days I get an answer so that I know my request arrived and when to expect a reply. | UC-002, UC-003, UC-007 | High | Implemented |
| FR-028 | Preserve Entries on Failure  | As a visitor, I want my entered values to be kept and an explanatory notice shown when a form cannot be delivered so that I can send them again without typing everything anew. | UC-002, UC-003, UC-007 | High | Implemented |
| FR-029 | Content Failure Notice       | As a visitor, I want a page whose content cannot be retrieved to show an explanatory notice while the rest of the site stays usable so that a backend problem does not block my whole visit. | UC-001, UC-004, UC-005, UC-006, UC-007, UC-008 | High | Implemented |
| FR-030 | Content Maintained Externally| As a leader, I want to publish events, announcements, albums, articles, media entries and leader profiles in the content management system so that new content appears without a software release. | Vision  | High     | Implemented |
| FR-031 | Anonymous Visit Counting     | As a leader, I want every page visit counted anonymously so that I can see which topics interest the readers without collecting personal data.                                  | UC-001 (BR-004) | Low | Open        |

## Non-Functional Requirements

| ID      | Title                     | Requirement                                                                                                                          | Category        | Priority | Status      |
|---------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------|-------------|
| NFR-001 | Page Load Time            | Every page must become interactive within 3 seconds over a 10 Mbit/s connection.                                                      | Performance     | High     | Open        |
| NFR-002 | Navigation Response       | Switching between two already loaded pages must render within 300 milliseconds without a full page reload.                            | Performance     | Medium   | Implemented |
| NFR-003 | Initial Bundle Size       | The JavaScript delivered for the first page view must not exceed 1 MB after compression.                                              | Performance     | Medium   | Open        |
| NFR-004 | Availability              | The website must be reachable at least 99% of the time measured over 30 days.                                                         | Availability    | High     | Open        |
| NFR-005 | Degradation on Backend Failure | When the content backend answers with an error or does not answer within 30 seconds, the affected page must show an explanatory notice and the remaining pages must stay usable. | Availability    | High     | Implemented |
| NFR-006 | Error Recording           | Every failed retrieval or form submission must be recorded in the browser console with the cause so that a maintainer can analyse it. | Maintainability | Medium   | Implemented |
| NFR-007 | Transport Encryption      | All traffic between the browser, the website and the content backend must use HTTPS with TLS 1.2 or higher.                           | Security        | High     | Implemented |
| NFR-008 | No Personal Data Stored   | The website must store zero personal data of visitors; registrations, contact messages and orders are forwarded and not persisted by the website. | Security        | High     | Implemented |
| NFR-009 | Read-Only Public Access   | Anonymous access to the content backend must grant only read access to published content and submission of the three forms, and neither read access to submitted forms nor write access to any other content. | Security        | High     | Implemented |
| NFR-010 | No Authentication Needed  | 100% of the pages must be reachable without registration or login.                                                                    | Security        | High     | Implemented |
| NFR-011 | Mobile Layout             | All pages must be usable without horizontal scrolling from a viewport width of 320 pixels upwards.                                    | Usability       | High     | Implemented |
| NFR-012 | Language                  | 100% of the user-visible texts must be in German.                                                                                     | Usability       | High     | Implemented |
| NFR-013 | Date Format               | All dates shown to the reader must use the Swiss notation day.month.year.                                                             | Usability       | Medium   | Implemented |
| NFR-014 | Accessibility             | All pages must satisfy WCAG 2.1 level AA.                                                                                             | Usability       | Medium   | Open        |
| NFR-015 | Unit Test Coverage        | Line coverage of the unit tests must be at least 80%, measured by the coverage report of the build.                                   | Maintainability | High     | Open        |
| NFR-016 | Coverage Regression Gate  | The build must fail when line coverage falls below 25%, function coverage below 25% or branch coverage below 5%.                       | Maintainability | High     | Implemented |
| NFR-017 | Static Analysis Gate      | Every build on the main branch must pass the SonarQube quality gate with zero blocker and zero critical issues.                       | Maintainability | High     | Open        |
| NFR-018 | Lint Cleanliness          | The linter must report zero errors for `src` and `tests` on every build.                                                              | Maintainability | High     | Implemented |
| NFR-019 | End-to-End Coverage       | Each of the eight use cases must be covered by at least one automated end-to-end test.                                                | Maintainability | Medium   | Open        |
| NFR-020 | Reproducible Deployment   | The website must be deployable as a single container image that starts and serves the site without further configuration steps.       | Portability     | High     | Implemented |
| NFR-021 | Offline Development       | The website must run against a mocked content backend so that development is possible without access to the production backend.       | Maintainability | Medium   | Implemented |
| NFR-022 | Concurrent Readers        | The website must serve at least 100 concurrent readers without an increase of the page load time beyond NFR-001.                      | Scalability     | Low      | Open        |

## Constraints

| ID    | Title                        | Constraint                                                                                                                        | Category    | Priority | Status      |
|-------|------------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------------|----------|-------------|
| C-001 | Frontend Framework           | The website must be built as a Vue 3 single-page application written in TypeScript.                                                | Technical   | High     | Implemented |
| C-002 | Build Toolchain              | The build must use Vite; unit tests must run with Vitest and end-to-end tests with Playwright.                                     | Technical   | High     | Implemented |
| C-003 | Content Backend              | All content must be read from the Payload content backend at `cms.cevi-buro-aarau.ch`; the website has no own database. | Technical   | High     | Implemented |
| C-004 | Form Delivery Channel        | The three forms must be submitted to the backend collections `form-join`, `form-contact` and `form-shoporder`.                     | Technical   | High     | Implemented |
| C-005 | Album Download Service       | Whole albums must be downloaded as ZIP archive from the content backend (`/api/albums/<id>/zip`).                                  | Technical   | Medium   | Implemented |
| C-006 | Static Hosting               | The built website must be servable as static files behind a web server with single-page-application fallback; no server-side rendering. | Technical   | High     | Implemented |
| C-007 | Browser Support              | The website must work in the latest two versions of Chrome, Firefox, Safari and Edge.                                             | Technical   | High     | Implemented |
| C-008 | No Backend Credentials       | The website accesses the backend anonymously; no token or other secret may be shipped with the frontend.                           | Technical   | High     | Implemented |
| C-009 | Data Protection             | Handling of the entered personal data must comply with the Swiss Data Protection Act and the GDPR, and the website must carry a privacy page. | Regulatory  | High     | Implemented |
| C-010 | Open Source Licence          | The source code must remain published under the MIT licence.                                                                      | Business    | Medium   | Implemented |
| C-011 | Volunteer Operation          | The site must be operable and maintainable by volunteers without a dedicated operations budget or a paid service contract.         | Business    | High     | Implemented |
| C-012 | Content Ownership            | Content changes must be possible for leaders without developer involvement and without a software release.                          | Operational | High     | Implemented |
| C-013 | Continuous Delivery          | Releases must be produced by the GitHub Actions pipeline and published as tagged container images.                                 | Operational | Medium   | Implemented |

## Open Points

| Point                                                                                                        | Affects          |
|--------------------------------------------------------------------------------------------------------------|------------------|
| The anonymous visit counting from BR-004 is stated in the use cases but no counting mechanism was found in the source; confirm whether it is done by the web server, the backend or not at all. | FR-031           |
| The thresholds of NFR-001, NFR-003, NFR-004 and NFR-022 are proposals derived from a small volunteer site; please confirm or correct them. | NFR-001, NFR-003, NFR-004, NFR-022 |
| Accessibility (NFR-014) and full end-to-end coverage (NFR-019) are targets, not verified today; the e2e suite currently covers routing only. | NFR-014, NFR-019 |
| The coverage gate enforced in `vite.config.ts` is 25% lines / 25% functions / 5% branches, far below the 80% target of NFR-015. | NFR-015, NFR-016 |
| The CI pipeline runs the SonarCloud scan but does not wait for the quality gate, so a failing gate does not break the build. | NFR-017 |
