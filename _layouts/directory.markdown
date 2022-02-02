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
          <div class="artist-audio__player">
            <audio controls>
              <source src="{{artist.track}}" type="audio/ogg">
              <source src="{{artist.track}}" type="audio/mpeg">
            </audio>
          </div>
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
