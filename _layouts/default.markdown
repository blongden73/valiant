<!DOCTYPE html>
<html>

  {% include head.html %}

  <body class="layout--{{page.layout}}">

    {% include header.html %}

        {{ content }}

    {% include footer.html %}

  </body>

</html>
