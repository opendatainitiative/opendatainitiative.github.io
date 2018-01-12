---
layout: default
permalink: /legislation
title: Legislation
---

# Open Data Legislation
<table cellpadding="10">
    {% for post in site.categories.legislation %}
      <tr>
            <td>{{ post.date | date: '%B %d, %Y' }}</td>
            <td>{{ post.title }}</td>
      <tr>
            <td colspan="2"><a href="{{ site.baseurl }}{{ post.url }}">go to details</a></td>
      </tr>
      <tr>
            <td colspan="2"><hr></td>
      </tr>
    {% endfor %}
