# Damodar Academy & Tuitions — Website Package

## Files
- `index.html`, `index.css`, `index.js`: Home page
- `about.html`, `about.css`, `about.js`: About page
- `courses.html`, `courses.css`, `courses.js`: Courses page
- `gallery.html`, `gallery.css`, `gallery.js`: Gallery page
- `contact.html`, `contact.css`, `contact.js`: Contact page
- `assets.js`: Central public settings for page URLs, phone/WhatsApp, social links, photos, demo video, watermark and optional content.
- `assets/`: folders for your own image, icon and video files.

## Acode / GitHub Pages
1. Extract this ZIP.
2. Open the extracted `Damodar_Academy_Complete` folder in Acode.
3. Keep all HTML, CSS, JS files in the same root folder.
4. Upload the complete folder contents to the same GitHub repository root.
5. Open `index.html` through GitHub Pages.

## Important: edit `assets.js`
- Replace the demo image URLs with your own hosted image URLs.
- Add the academy's public email and confirmed contact/social URLs.
- `whatsapp` must contain country code + number, without `+`.
- `demoVideoUrl` is reserved for your YouTube demo link.
- Never place Supabase `service_role`, secret API keys, passwords or private credentials in `assets.js`; it is public in the browser.

## Watermark
The footer watermark is configured as:
`Designed by Shankar Singh Rajput — Under Along Digital`
Gallery watermark can be switched on/off in `assets.js`.

## Notes
- Existing home/about/courses/gallery/contact content, navigation, course enquiry and WhatsApp contact form are retained and split into separate pages.
- Gallery slots are placeholders until you set the actual photo URLs in `assets.js`.
- Teachers, testimonials and achievements arrays are optional and intentionally empty until verified names, details and photos are supplied.
- The package is frontend-only; no secure admin panel or database write functionality is included.
