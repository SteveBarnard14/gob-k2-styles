# Release Log

## Unreleased

### Ready For QA

| ID | Date | Area | Summary | Verification | Release Notes | Status |
| --- | --- | --- | --- | --- | --- | --- |
| GOB-K2-001 | 2026-07-29 | K2 Style Profile / MOB.Request.New.Form | Replaced the malformed wrapper with valid standalone CSS and added an interactive local preview of the New Mobile Device Request form. | Browser parsed 79 stylesheet rules with no console errors. Reviewed default, employee, and mobile-device states at 1280px, 390px, and 320px; no horizontal overflow was detected. | The preview recreates the K2 structure but does not execute K2 rules or submit data. Link the CSS last in Style Profile external files, disable the legacy theme, and use a cache-busting query string during deployment testing. | Ready for QA |

### QA Passed

| ID | Date | Area | Summary | Verification | Release Notes | Status |
| --- | --- | --- | --- | --- | --- | --- |

### Blocked

| ID | Date | Area | Summary | Blocker | Needed To Unblock | Status |
| --- | --- | --- | --- | --- | --- | --- |
