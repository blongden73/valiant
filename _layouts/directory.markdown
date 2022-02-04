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
        {% if artist.Track %}
          <div class="listen" data-track="{{artist.Track}}" data-artist="{{artist.title}}"><h1><svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M45.053 21.093a1 1 0 0 1 0 1.814L1.923 42.989A1 1 0 0 1 .5 42.082V1.918a1 1 0 0 1 1.422-.906l43.131 20.081Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h46v44H0z"/></clipPath></defs></svg>LISTEN</h1></div>
        {% endif %}
        <div class="socials flex">
        <div class="social-link"><a href="{{artist.Facebook}}">FACEBOOK</a></div>
        <div class="social-link"><a href="{{artist.Instagram}}">INSTAGRAM</a></div>
        <div class="social-link"><a href="{{artist.Youtube}}">YOUTUBE</a></div>
          <div class="social-link"><a href="{{artist.Spotify}}">SPOTIFY</a></div>
        </div>
        <img src="{{artist.Image}}">
      </div>
    </div>
  {% endfor %}
</div>
