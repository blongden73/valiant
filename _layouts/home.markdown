---
layout: default
---

{% assign directory = site.artists %}

<div class="window-container">
  <div class="background-image-change">
    <img class="background-image-src">
    <img class="background-image-src-blur">
  </div>
  <div class="main_box">
    <div class="outer_box">
    {% for artist in directory %}
      <div class="in_box" data-image="/valiant/{{artist.Image}}">
        <p><a href="/valiant/directory#{{artist.title | downcase | slugify }}">{{artist.title}}</a></p>
      </div>
    {% endfor %}
    </div>
  </div>
</div>
