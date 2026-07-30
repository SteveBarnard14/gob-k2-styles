# K2 SmartForms Slider Pattern

## Current Files

Use these Data Label-ready files:

- `k2-slider-styles.datalabel.css`
- `k2-slider-library.datalabel.js`
- `k2-slider-row-click-new-device.datalabel.js`
- `k2-slider-loaded-new-device.datalabel.js`
- `k2-slider-close-new-device.datalabel.js`
- `k2-slider-notify-helper.datalabel.js`

Each file already includes its required `<style>` or `<script>` wrapper.

## Form Initialized Rule

Set these Literal Data Labels:

1. `slider css` = `k2-slider-styles.datalabel.css`
2. `slider js` = `k2-slider-library.datalabel.js`
3. Optional notification helper label = `k2-slider-notify-helper.datalabel.js`

If K2 Designer adds a datetime token to force re-execution, keep it inside Designer and do not place text before the `<script>` tag.

## Row Click Rule

Use this order:

1. Set `Slider Row Click JS` = `k2-slider-row-click-new-device.datalabel.js`
2. Run the K2 actions that populate the item view.
3. Set `Hide Loader JS` = `k2-slider-loaded-new-device.datalabel.js`

The open script shows the slider and loader. The loaded script hides only the loader after K2 finishes populating the view.

## Action Close Rule

For action buttons that should close the slider:

1. Run the K2 save/submit action.
2. Optionally show a notification.
3. Set `Slider Close JS` = `k2-slider-close-new-device.datalabel.js`.

## Notifications

After loading `k2-slider-notify-helper.datalabel.js`, call:

```html
<script>
if(window.K2SliderNotify){
window.K2SliderNotify.success("Saved","The request was saved successfully.",4200);
}
</script>
```

For errors:

```html
<script>
if(window.K2SliderNotify){
window.K2SliderNotify.error("Unable to save","The request could not be saved. Review the details and try again.",0);
}
</script>
```

`duration:0` keeps the banner visible. Use `success`, `error`, `warning`, or `info`.

## Notes

- To show the included crest while loading, add `logoUrl:"assets/bahamas-coat-of-arms.png"` to the open options in `k2-slider-row-click-new-device.datalabel.js`.
- `slider js` may render as a script tag without executing during Form Initialized. The action scripts bootstrap it from the `slider js` label when needed.
- The item view must exist in the DOM before the slider can move it.
- The backdrop blocks clicks to rows behind the slider and does not close the slider.
