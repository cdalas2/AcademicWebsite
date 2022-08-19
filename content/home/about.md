---
# An instance of the About widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: about

# Activate this widget? true/false
active: true

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 1

design:
  # Slide height is automatic unless you force a specific height (e.g. '400px')
  slide_height: ''
  is_fullscreen: true
  # Automatically transition through slides?
  loop: true
  # Duration of transition between slides (in ms)
  interval: 3000

content:
  slides:
    - title: 👋 Welcome to the group
      content: Take a look at what we're working on...
      align: center
      background:
        position: top
        color: '#666'
        brightness: 0.7
        media: 2707951.jpg
        fit: contain
    - title: Lunch & Learn ☕️
      content: 'Share your knowledge with the group and explore exciting new topics together!'
      align: left
      background:
        position: center
        color: '#555'
        brightness: 0.7
        media: 2130180.jpg
        fit: contain
    - title: World-Class Semiconductor Lab
      content: 'Just opened last month!'
      align: right
      background:
        position: right
        color: '#333'
        brightness: 0.5
        media: maxresdefault.jpg
        fit: contain
      link:
        icon: graduation-cap
        icon_pack: fas
        text: Join Us
        url: /contact/

author: "cdalas"
---
