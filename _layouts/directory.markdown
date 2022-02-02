---
layout: default
---

{% assign directory = site.artists %}
<div class="directory-wrapper">
  {% for artist in directory %}
    <div id="{{artist.title | downcase | slugify }}" class="artist-card-wrapper">
      <div class="artist-card">
        <h1>{{artist.title}}</h1>
        <h1>{{artist.Genre}}</h1>
        <h1>{{artist.Country}}</h1>
        <h1>{{artist.Label}}</h1>
      </div>
      <div class="artist-description">
        {{artist.content | markdownify}}
        <img src="{{artist.Image}}">
      </div>
    </div>
  {% endfor %}
</div>
