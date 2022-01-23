---
layout: default
---

{% assign directory = site.artists %}

<div class="mobile-home-wrapper">
{% for artist in directory %}
  <div class="artist-home-mobile" data-image="{{artist.Image}}">
    <img class="background-image-src" src="{{artist.Image}}">
    <img class="background-image-src-blur" src="{{artist.Image}}">
    <p><a href="/directory#{{artist.title | downcase | slugify }}">{{artist.title}}</a></p>
  </div>
{% endfor %}
</div>

<div class="window-container">
  <div class="background-image-change">
    <img class="background-image-src">
    <img class="background-image-src-blur">
  </div>
  <div class="main_box">
    <div class="outer_box">
    {% for artist in directory %}
      <div class="in_box" data-image="{{artist.Image}}">
        <p><a href="/directory#{{artist.title | downcase | slugify }}">{{artist.title}}</a></p>
      </div>
    {% endfor %}
    </div>
  </div>
</div>
