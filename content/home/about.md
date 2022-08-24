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

about_title: 'About Me'

author: 'cdalas'

design:
  # Slide height is automatic unless you force a specific height (e.g. '400px')
  slide_height: '400px'
  is_fullscreen: false
  # Automatically transition through slides?
  loop: true
  # Duration of transition between slides (in ms)
  interval: 5000
  # view of recent activity column
  view: masonry

  #background:
#    # Name of image in `assets/media/`.
#    image: "maxresdefault.jpg"
#    # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
#    image_darken: 0.4
#    #  Options are `cover` (default), `contain`, or `actual` size.
#    image_size: cover
#    # Options include `left`, `center` (default), or `right`.
#    image_position: center
#    # Use a fun parallax-like fixed background effect on desktop? true/false
#    image_parallax: true
#    # Text color (true=light, false=dark, or remove for the dynamic theme color).
#    text_color_light: true
recent_title: 'Recent Activity'
content:
  slides:
    - title: '<br><br><br><p style = "font-size: 24px"><b>[Stochastic lattice model for emerin nanodomains](/research/#emerin-nanodomains)</b></p>'
      content: '<p style = "font-size: 16px; color: white;">Can we use a stochastic lattice model to study how defective emerin organization and self-assembly can lead to muscle degenerative diseases?</p>'
      align: left
      background:
        position: top
        color: '#333'
        brightness: 1.2
        media: StochasticLatticeModel_ProteinDomains.png
        fit: contain
    - title: '<br><br><br><p style = "font-size: 24px"><b>[Membrane thermosensing](/research/#membrane-thermosensing)</b></p>'
      content: '<p style = "font-size: 16px; color: white;">Can a temperature-dependent protein-bilayer mechanical model account for the temperature sensing of cells?</p>'
      align: left
      background:
        position: top
        color: '#333'
        brightness: 0.95
        media: thermosensing_cover.png
        fit: contain
    - title: '<br><br><br><p style = "font-size: 24px"><b>[Protein-induced bilayer deformations](/research/#protein-bilayer-deformations)</b></p>'
      content: '<p style = "font-size: 16px; color: white;">How can we calculate bilayer deformations due to the protein shapes obtained from structural biology?</p>'
      align: left
      background:
        position: top
        color: '#333'
        brightness: 1.2
        media: BilayerDeformationColorMaps.png
        fit: contain
    - title: '<br><br><br><p style = "font-size: 24px"><b>[Swimming of microorganisms in quasi-2D membranes](/research/emerin-nanodomains)</b></p>'
      content: '<p style = "font-size: 16px; color: white;">How do microorganisms propagate in quasi-2D membranes?</p>'
      align: left
      background:
        position: top
        color: '#333'
        brightness: 0.95
        media: swimmers_in_quasi2D.png
        fit: contain
#    - title: '<br><br><br><br><br><p style = "font-size: 20px">Stochastic lattice model for emerin nanodomains</p>'
#      content: '<p style = "font-size: 12px">Can we use a stochastic lattice model to study how defective emerin organization and self-assembly can produce muscle degenerative diseases?</p>'
#      align: center
#      background:
#        position: top
#        color: '#666'
#        brightness: 0.7
#        media: maxresdefault.jpg
#        fit: contain
#      link:
#        icon: graduation-cap
#        icon_pack: fas
#        text: '<p style = "font-size: 32px">Join Us</p>'
#        url: /contact/]
  filters:
    folders:
      - research
      - pda-gallery
      - pda
      - contact
  count: 10

videotitle: '<p><b>My talk at APS Annual March Meeting (Chicago 2022)</b></p>'

---
