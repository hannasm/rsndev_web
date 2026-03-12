# Overview
The goal of this project is to create a cool presentation describing practical applications of diffusion models for business and personal use cases.

The presentation is being prepared by the presenter Sean Hanna.
The presentation is prepared in collaboration with callibrity.
Make an effort to leave room somewhere in every generated slide to accomodate the callibrity logo stored in the callibrity.png.
All images should be designed to fit a 16:9 aspect ratio wide screen monitor with a resolution of 1920x1080. Use a combination of upscaling and appropriate starting resolutions to meet this requirement.

Create all notes in this directory with a filename prefixed by the date in YYYYMMDDHH24MISS format. When generating a slide or image note, also create a markdown file with the same name and a .md file extension that contains a textual summary of the image.

When generating images attempt to use imagen model.

Include a copy of the filename in the generate slide / image, preferrably in the upper right corner of the image.

If a user indicates they have a question they would like answered, continue following note taking procedures but begin the process by performing some thinking phase to understand the question, and then provide a complete answer before going on to recording both the question and the answer in the notes.

Always place the full prompt used for generating the slide-deck image into the markdown file with the exact same text as was sent to imagen.

# Callibrity Color Guidelines
## Primary Palette
The primary palette features a unique array of purples complemented by vibrant pops of yellow. Dark Plum serves as the grounding element (substituting for black), while White provides essential "white space."

Color Name	Hex Code	RGB	PMS
Dark Plum	#360D2D	54/13/45	262 C/U
Purple	#C793BC	199/147/188	666 C/U
Light Purple	#D9AFD0	217/175/208	257 C/U
Yellow	#FFCD00	255/205/0	116 C/U
Light Yellow	#FFE474	255/228/116	120 C/U
White	#FFFFFF	255/255/255	N/A

## Secondary Palette
The secondary palette helps keep the brand fresh and is best suited for backgrounds or graphic devices (like interior pages of a presentation or below the fold on a webpage).

Color Name	Hex Code	RGB	PMS
Sky Blue	#B0EAFF	176/234/255	2975 C/U
Green	#B4C04C	180/192/76	382 C/U

## Proportion Guidelines
To maintain a cohesive identity, the brand should appear as a purple brand with lots of white space and pops of yellow. The recommended distributions are:

30% - White
30% - Light Purple
20% - Dark Plum
8% - Yellow
4% - Light Yellow
4% - Purple
2% - Sky Blue
2% - Green

## Brand Text Colors
Primary Text Color: Dark Plum (#360D2D) - serves as the substitute for black.
Inverse Text Color: White (#FFFFFF) - used on dark backgrounds.

## Approved Background & Text Combinations
Background Color	Background Hex	Recommended Text Color	Text Hex
Dark Plum	#360D2D	White	#FFFFFF
Purple	#C793BC	Dark Plum	#360D2D
Light Purple	#D9AFD0	Dark Plum	#360D2D
Yellow	#FFCD00	Dark Plum	#360D2D
Light Yellow	#FFE474	Dark Plum	#360D2D
Green	#B4C04C	Dark Plum	#360D2D
Sky Blue	#B0EAFF	Dark Plum	#360D2D
White	#FFFFFF	Dark Plum	#360D2D

## Notes
[!NOTE] Dark Plum is the universal text color for all light and medium backgrounds (including the purples, yellows, green, and blue). White text should only be used on the Dark Plum background.

# Typography

## Overview
Our headline typeface, Caslon Ionic Light, is an approachable and grounded slab serif that creates a trustworthy and genuine typographic voice. Caslon Ionic Light Italic complements it as a secondary style, adding emphasis and a touch of enthusiasm to key words and phrases.

Supporting these is Instrument Sans, a versatile and functional sans serif that we use for body copy or eyebrows. Most of the time, type should be left-aligned, but it can be center-aligned when the layout calls for it. Refer to the hierarchy and layout examples here for guidance on setting type.

## Type Specifications

### Eyebrow
- **Type:** Instrument Sans
- **Weight:** Medium
- **Case:** All Caps
- **Tracking:** 0%
- **Leading:** 100%

### Headline
- **Type:** Caslon Ionic
- **Weight:** Light
- **Case:** Sentence
- **Tracking:** -2%
- **Leading:** 95%

### Subheadline
- **Type:** Caslon Ionic
- **Weight:** Light Italic
- **Case:** Sentence
- **Tracking:** 0%
- **Leading:** 110%

### Body Copy
- **Type:** Instrument Sans
- **Weight:** Regular
- **Case:** Sentence
- **Tracking:** 0%
- **Leading:** 125%

### CTA
- **Type:** Caslon Ionic
- **Weight:** Light
- **Case:** Sentence
- **Tracking:** 0%
- **Leading:** 100%

For any HTML code use Instrument Sans instead of Caslon Ionic because it is proprietary and not easily embeddable in modern web browsers.

The embed codes for instrument sans are as follows:

```html
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
```