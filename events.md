---
layout: default
permalink: /events
title: Events
---

# Events
      
{% if post.categories in site.posts == "events" %}
      * [{{ post.title }}]({{ post.url }})
      {{ post.excerpt }}
      {{ page.next }}
{% endif %}
