---
layout: default
---

<div class="background-image">
  {% if page.title != "About" %}
    <img src="assets/images/Paco_Amoroso.jpg">
  {% else %}
    <img src="assets/images/Blood-Wizard.png">
  {% endif %}
</div>

<div class="about-page-content">
  {{page.content | markdownify}}
</div>
