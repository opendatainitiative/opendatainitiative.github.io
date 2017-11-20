---
layout: default
permalink: /
title: Home
---

## The Open Data Initiative works to ensure government finance data is consistent, transparent, and easily available

{% for post in site.categories.events %}
  {{ post.excerpt }}<br>
  <a href="{{ site.baseurl }}{{ post.url }}">go to event details</a>
  {% break %}
{% endfor %}
 
