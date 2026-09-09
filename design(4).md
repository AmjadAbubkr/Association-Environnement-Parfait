# Design Specification — Environmental Inspection Landing Page

## 1. Overview

A modern SaaS-style landing page for an environmental inspection platform focused on helping users select inspection sites, manage inspection teams, schedule inspections, and maintain regulatory compliance.

The visual direction is:

- Professional
- Clean
- Environmental / sustainability-oriented
- Trustworthy
- Minimal but polished
- Strong use of dark green and lime accents
- Large editorial headings
- Generous whitespace
- Rounded cards and controls
- Mobile-first responsive behavior

The page shown in the reference is a long-form landing page composed of multiple alternating light and dark sections.

---

## 2. Brand Direction

### Primary concept

Environmental compliance + operational efficiency.

### Visual personality

- Dark forest green for the main brand identity
- Bright lime green for calls to action and highlights
- Off-white backgrounds for content sections
- Very light blue-gray for secondary sections
- Dark green text on light backgrounds
- White text on dark backgrounds
- Rounded UI elements rather than sharp corporate boxes

### Suggested color tokens

```css
--color-primary: #003D20;
--color-primary-dark: #002D18;
--color-accent: #C7FF32;
--color-background: #FFFFFF;
--color-background-muted: #F2F6FA;
--color-text: #003D20;
--color-text-muted: #68736D;
--color-border: #D9E0DC;
--color-white: #FFFFFF;
```

The exact colors can be adjusted, but the overall contrast between dark green and lime green should remain.

---

## 3. Typography

Use a clean modern sans-serif font.

Recommended:

- Inter
- Manrope
- Plus Jakarta Sans
- DM Sans

### Typography hierarchy

#### Hero heading

Large, bold, compact heading:

```text
Fast Environmental
Inspections
```

Approximate desktop size:

- 52–64px
- Weight: 500–700
- Line height: 0.95–1.05

Mobile:

- 40–48px

#### Section headings

Approximate:

- Desktop: 38–48px
- Mobile: 32–38px
- Weight: 500–650
- Tight line height

#### Body text

- 13–16px
- Line height: 1.5–1.7
- Muted gray/green

#### Eyebrow labels

Small uppercase/title-case labels such as:

```text
Efficiency
Simple Steps.
Fast
Additional Capabilities
Happy Customer.
Here To Help.
Ready To Get Started?
```

Use:

- 9–12px
- Medium/bold
- Lime or dark green
- Slightly increased letter spacing where appropriate

---

## 4. Layout System

### Desktop

Maximum content width:

```text
1120–1200px
```

Horizontal page padding:

```text
40–64px
```

Most sections use a two-column or four-column grid.

### Mobile

Horizontal padding:

```text
20–24px
```

Columns collapse to one column.

### General spacing

Use generous vertical spacing:

- Small section: 64–96px
- Standard section: 100–140px
- Large feature section: 140–180px

---

# 5. Header / Navigation

The header sits inside the dark green hero section.

### Left

Brand logo:

- Small abstract environmental/globe-style icon
- Lime/green
- Brand name next to it

### Navigation

Links visible in the reference:

```text
Simple Processes
Fast Service
Transparent Dealings
```

"Transparent Dealings" has a small dropdown indicator.

### Right

Two actions:

```text
Login
Register
```

Register is the emphasized lime button.

### Styling

Header:

- Transparent/dark green background
- Compact height
- Max-width centered container
- Small typography
- Rounded CTA buttons

### Mobile

Replace navigation with a hamburger menu.

Keep Login/Register accessible.

---

# 6. Hero Section

The hero is dark forest green.

### Content

Centered vertically and horizontally.

Eyebrow:

```text
Efficiency
```

Main heading:

```text
Fast Environmental
Inspections
```

Supporting text:

```text
Focusing Compliance with Environmental Regulations in the USA.
```

Primary CTA:

```text
Create Account →
```

Secondary CTA:

```text
Login
```

### Hero image

Below the text is a large rounded image showing environmental/construction inspection professionals wearing safety equipment.

Image characteristics:

- Wide aspect ratio
- Rounded corners
- Thin dark border
- Slightly oversized relative to text container
- Positioned so it visually bridges the hero and following section

### Hero structure

```text
Dark Green Background
    ├── Navigation
    ├── Eyebrow
    ├── Large Heading
    ├── Supporting Text
    ├── CTA Group
    └── Large Inspection Image
```

---

# 7. Feature Section — Select Inspection Sites

Background: white.

Two-column layout.

### Left column

Eyebrow:

```text
Effortlessly Select
```

Heading:

```text
Inspection Sites and Gain
Access
```

Description explaining that users can access available inspection sites, select locations, and manage compliance-related inspection workflows.

Three checkmark benefits:

```text
Comprehensive Site Details
Streamline the Inspection Process
Ensure Compliance with Regulations
```

Use small lime circular check icons.

### Right column

A dark green rounded visual/card containing a stylized map/globe graphic.

The reference uses:

- Dark green background
- Light dotted world map
- Bright lime location point
- Large rounded rectangle
- Thin dark border

---

# 8. Process Section

Background: very light blue-gray.

Eyebrow:

```text
Simple Steps.
```

Heading:

```text
Simple And Transparent
Inspections
```

Supporting text:

```text
Easily Conduct Environmental Inspections With Our Platform.
```

### Four-step grid

Desktop: 4 equal columns.

Mobile: 1 column or 2-column compact grid.

#### Step 1

Icon: globe/location

Title:

```text
Select Inspection Sites
```

Description:

```text
Supervisor Have The Ability To
Select A Site For Inspection And
View Site Details.
```

#### Step 2

Icon: team/users

Title:

```text
Choose Team Members
```

Description:

```text
Supervisors Can Choose A Team
Member From Available Teams.
```

#### Step 3

Icon: calendar/document

Title:

```text
Schedule Inspections
```

Description:

```text
Supervisor Can Specify The
Inspection Date, Start Time, And
Duration.
```

#### Step 4

Icon: calendar refresh

Title:

```text
Re-Schedule Inspections
```

Description:

```text
Change Inspection Date And Time
If Necessary.
```

### CTA

Centered or left-aligned depending on breakpoint:

```text
Get Started →
```

Bright lime rounded button.

---

# 9. Scheduling Feature Section

Background: white.

Two-column layout.

### Left

Eyebrow:

```text
Fast
```

Heading:

```text
Effortlessly Schedule
Inspections With Our
Intuitive Date And
Time Selection Feature.
```

Supporting paragraph describing the scheduling workflow.

### Right

Product UI mockup inside a soft light-gray rounded container.

The reference shows a mobile-style application screen containing:

```text
Specify Date
    ↓
Choose Time
    ↓
Inspection
    ↓
Inspectors
    ↓
Summary
```

Bottom CTA:

```text
Get Started →
```

### Design requirement

The UI mockup should look like a real product interface, not a generic illustration.

---

# 10. Additional Capabilities Section

Background: dark forest green.

Text is white.

### Centered heading

```text
Additional Capabilities
```

Supporting text explains that the platform provides additional tools for inspection management.

### Three-column feature grid

#### Feature 1

Icon: scheduling/clock

Title:

```text
Flexible Inspection
Scheduling
```

Description:

```text
Easily Reschedule Inspections And Make
Adjustments To The Date Or Time.
```

#### Feature 2

Icon: team/management

Title:

```text
Seamless Team
Management
```

Description:

```text
Choose The Right Team Members For
Your Inspection Processes.
```

#### Feature 3

Icon: location/site

Title:

```text
Comprehensive Site
Details
```

Description:

```text
Access All The Necessary Information About The
Site You're Inspecting.
```

### CTA

```text
Learn More →
```

Lime rounded button.

---

# 11. Testimonials Section

Background: white.

### Eyebrow

```text
Happy Customer.
```

### Heading

```text
Customer success is our
success
```

Supporting text:

```text
Read what our satisfied clients have to say
```

### Testimonial carousel

Four testimonial cards/items are visible on desktop.

Each contains:

- Lime star rating
- Short testimonial
- Circular avatar
- Customer name
- Company name

Example structure:

```text
★★★★★

"Short customer testimonial..."

[Avatar]

John Doe
ABC Company
```

### Carousel controls

Small circular arrow buttons appear toward the right side.

On mobile:

- Display one testimonial at a time
- Use swipe interaction
- Keep navigation arrows accessible

---

# 12. FAQ Section

Background: very light blue-gray.

Two-column layout.

### Left column

Eyebrow:

```text
Here To Help.
```

Heading:

```text
Common
Questions
```

Supporting text:

```text
Find Answers To Common Questions About Our
Environmental Inspection Services.
```

Help prompt:

```text
Need More Assistance?
```

CTA:

```text
Contact Us →
```

### Right column

Accordion list.

Questions shown in the reference:

```text
What is an environmental inspection?

How often should inspections be conducted?

What are the benefits of environmental inspections?

How can I schedule an inspection?

Can I reschedule an inspection?
```

### Accordion behavior

- First item open by default
- Question row has generous vertical padding
- Bottom border between items
- Chevron on the right
- Smooth open/close animation

Open answer uses small dark-gray body text.

---

# 13. Final CTA Section

Background: dark forest green.

Centered content.

Eyebrow:

```text
Ready To Get Started?
```

Heading:

```text
Start Inspection Today!
```

Supporting text:

```text
Register Or Login To Begin The Inspection Process,
Ensure Compliance With Regulations And Maintain
Environmental Standards.
```

CTA buttons:

```text
Register
Login
```

Register is lime.

Login is transparent/dark with a subtle border.

---

# 14. Footer

Background: white.

### Top footer navigation

Small links:

```text
Fast Service
Simple Processes
Transparent Dealings
```

### Social icons

Right side:

- Facebook
- X/Twitter
- Instagram
- YouTube/LinkedIn

Use small circular icon buttons.

### Divider

Thin horizontal gray line.

### Copyright

Centered small text:

```text
Copyright © 2025 Environmental Inspections
```

---

# 15. Components

Recommended reusable components:

```text
Header
Button
Eyebrow
Hero
FeatureSection
CheckList
ProcessStep
ProcessGrid
ProductMockup
CapabilityCard
TestimonialCard
TestimonialCarousel
FAQAccordion
CTASection
Footer
SocialLinks
```

---

# 16. Button System

### Primary button

```css
background: var(--color-accent);
color: var(--color-primary);
border-radius: 999px;
font-weight: 600;
```

Include a small right arrow.

Example:

```text
Create Account →
```

### Secondary button

Dark background context:

```css
background: transparent;
color: white;
border: 1px solid rgba(255,255,255,.35);
border-radius: 999px;
```

Light background context:

```css
background: transparent;
color: var(--color-primary);
border: 1px solid var(--color-primary);
```

---

# 17. Iconography

Use simple line icons.

Recommended icon library:

- Lucide
- Phosphor
- Heroicons

Icons should be:

- Thin/medium stroke
- Minimal
- Consistent
- Usually placed inside small circular or rounded lime backgrounds

Avoid complex colorful icons.

---

# 18. Image Direction

The photography should communicate:

- Environmental inspection
- Construction/site inspection
- Professional inspectors
- Safety equipment
- Real-world compliance work
- Diverse professional teams

Photography should feel authentic and documentary rather than stock-photo-heavy.

### Image treatment

Use:

```css
border-radius: 14–20px;
object-fit: cover;
```

Avoid excessive shadows.

---

# 19. Responsive Behavior

### Desktop ≥ 1024px

- Full navigation
- 2-column feature sections
- 4-column process section
- 3-column capabilities
- 4 testimonial items
- Large hero typography

### Tablet 768–1023px

- Reduced heading sizes
- 2-column grids where practical
- Testimonials become 2-column
- Reduced section padding

### Mobile < 768px

- Hamburger navigation
- Hero content centered
- Single-column feature sections
- Process cards stacked
- Capabilities stacked
- Testimonials become carousel
- FAQ remains single-column
- Smaller CTA buttons
- Hero image remains full-width with rounded corners
- Reduce decorative elements rather than allowing horizontal overflow

---

# 20. Animation

Animations should be subtle.

Recommended:

### On scroll

- Fade + translate up for sections
- 400–700ms duration

### Buttons

- Slight scale or brightness change on hover
- Arrow moves 2–4px to the right

### Cards

- Small translateY on hover
- Very subtle shadow increase

### FAQ

- Smooth height transition
- Chevron rotation

Avoid excessive animation or parallax.

---

# 21. Accessibility

Requirements:

- WCAG-conscious contrast
- All buttons have accessible labels
- Navigation works with keyboard
- FAQ accordion works with keyboard
- Images have descriptive alt text
- Focus states are visible
- Do not rely on color alone for meaning
- Respect `prefers-reduced-motion`

---

# 22. Overall Page Structure

```text
Page
│
├── Header
│
├── Hero
│   ├── Eyebrow
│   ├── Heading
│   ├── Description
│   ├── CTA Buttons
│   └── Inspection Image
│
├── Inspection Site Feature
│   ├── Content
│   ├── Benefits
│   └── Map Visual
│
├── Simple Process
│   ├── Heading
│   ├── Step 1
│   ├── Step 2
│   ├── Step 3
│   ├── Step 4
│   └── CTA
│
├── Scheduling Feature
│   ├── Content
│   └── Product Mockup
│
├── Additional Capabilities
│   ├── Capability 1
│   ├── Capability 2
│   └── Capability 3
│
├── Testimonials
│   └── Testimonial Carousel
│
├── FAQ
│   ├── Intro / Contact
│   └── Accordion
│
├── Final CTA
│
└── Footer
```

---

# 23. Design Goal

The final implementation should feel like a polished environmental compliance SaaS product rather than a generic corporate website.

The most important visual characteristics to preserve from the reference are:

1. Dark forest-green hero and CTA sections.
2. Bright lime-green CTAs and small visual accents.
3. Large, confident typography.
4. Rounded image and UI containers.
5. Alternating white and pale blue-gray sections.
6. Clean two-column feature layouts.
7. Strong whitespace.
8. Minimal line icons.
9. Product UI mockup rather than abstract graphics for software features.
10. Consistent pill-shaped buttons.
11. Professional environmental/construction photography.
12. Simple, restrained animations.
13. Responsive layouts that preserve the same visual hierarchy on mobile.
