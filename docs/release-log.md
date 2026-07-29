# Release Log

## Unreleased

### Ready For QA

| ID | Date | Area | Summary | Verification | Release Notes | Status |
| --- | --- | --- | --- | --- | --- | --- |
| GOB-K2-001 | 2026-07-29 | K2 Style Profile / MOB.Request.New.Form | Replaced the malformed wrapper with valid standalone CSS and added an interactive local preview of the New Mobile Device Request form. | Browser parsed 79 stylesheet rules with no console errors. Reviewed default, employee, and mobile-device states at 1280px, 390px, and 320px; no horizontal overflow was detected. | The preview recreates the K2 structure but does not execute K2 rules or submit data. Link the CSS last in Style Profile external files, disable the legacy theme, and use a cache-busting query string during deployment testing. | Ready for QA |
| GOB-K2-002 | 2026-07-29 | K2 runtime compatibility | Corrected sizing, conditional visibility, and helper-text wrapping against the live SmartForm DOM. | Verified the K2 10px root, converted profile dimensions to explicit pixels, restored all `.hidden` controls, cleared inline section-cell backgrounds, and reviewed the corrected Style Profile preview at the intended 1024px form width. | K2 must use the cache-busted external-file URL for this revision. The CSS preserves K2 rule-driven visibility and does not change form business logic. | Ready for QA |

### QA Passed

| ID | Date | Area | Summary | Verification | Release Notes | Status |
| --- | --- | --- | --- | --- | --- | --- |

### Blocked

| ID | Date | Area | Summary | Blocker | Needed To Unblock | Status |
| --- | --- | --- | --- | --- | --- | --- |
