# Release Log

## Unreleased

### Ready For QA

| ID | Date | Area | Summary | Verification | Release Notes | Status |
| --- | --- | --- | --- | --- | --- | --- |
| GOB-K2-001 | 2026-07-29 | K2 Style Profile / MOB.Request.New.Form | Replaced the malformed wrapper with valid standalone CSS and added an interactive local preview of the New Mobile Device Request form. | Browser parsed 79 stylesheet rules with no console errors. Reviewed default, employee, and mobile-device states at 1280px, 390px, and 320px; no horizontal overflow was detected. | The preview recreates the K2 structure but does not execute K2 rules or submit data. Link the CSS last in Style Profile external files, disable the legacy theme, and use a cache-busting query string during deployment testing. | Ready for QA |
| GOB-K2-002 | 2026-07-29 | K2 runtime compatibility | Corrected sizing, conditional visibility, and long-text wrapping against the live SmartForm DOM. | Verified the K2 10px root, converted profile dimensions to explicit pixels, restored all `.hidden` controls, cleared inline section-cell backgrounds, and tested default, employee, and mobile-device branches at the intended 1024px form width. | K2 must use the cache-busted external-file URL for this revision. The CSS preserves K2 rule-driven visibility and does not change form business logic. | Ready for QA |
| GOB-K2-003 | 2026-07-29 | K2 visual parity | Matched the live MOB request form to the local reference with a compact branded header, white form body, consistent 44px controls, policy callout, and grouped actions. | Compared local and live views; verified a 118px live header against the 119px reference, a 74px inner header grid, 44px inputs and buttons, a 12px action gap, and no horizontal overflow in the default, employee, role, Mobile Phone, MiFi, or SIM Card states. | BahamasStyle version 3.0 uses the cache-busted stylesheet URL ending in `?v=47f0b07`. Authored copy, K2 grid row placement, default selections, and complete mobile reflow remain Designer-owned. | Ready for QA |
| GOB-K2-004 | 2026-07-29 | K2 editable list views | Added reusable styling for K2 list headers, toolbars, column headings, zebra rows, selected rows, inline editing, action focus, and responsive overflow while generalizing the shared form header. | Verified MOB.Request.Approval.Form with a 119px header, 52px toolbar, 44px column header, 50px rows, aqua selection state, four 44px edit inputs, primary Save state, and no horizontal overflow. Regression-tested MOB.Request.New.Form at a 119px header with no overflow. | BahamasStyle version 4.0 is checked in with the cache-busted URL ending in `?v=c58ee45`. Column definitions, list titles, paging availability, and data behavior remain controlled by K2 Designer. | Ready for QA |
| GOB-K2-005 | 2026-07-29 | K2 runtime shell | Increased the shared desktop content width from 1024px to 1280px while retaining responsive gutters and small-screen behavior. | At a 1711px viewport, verified both live forms at a 1280px runtime width with no horizontal overflow. The approval grid measured 1232px with approximately 298px columns and 284px inline-edit inputs; the request form measured three 394px authored columns. | BahamasStyle version 5.0 is checked in with the cache-busted URL ending in `?v=ec5044d`. The shell remains fluid below 1280px and preserves existing mobile breakpoints. | Ready for QA |

### QA Passed

| ID | Date | Area | Summary | Verification | Release Notes | Status |
| --- | --- | --- | --- | --- | --- | --- |

### Blocked

| ID | Date | Area | Summary | Blocker | Needed To Unblock | Status |
| --- | --- | --- | --- | --- | --- | --- |
