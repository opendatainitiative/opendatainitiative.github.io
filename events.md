---
layout: default
permalink: /events
title: Events
---

# Events
Online webinars, in person discussions, and conferences

<table>
    {% for post in site.categories.events %}
      <tr>
            <td>{{ post.date | date: '%B %d, %Y' }}</td>
            <td>{{ post.excerpt }}</td>
      <tr>
            <td colspan="2"><a href="{{ site.baseurl }}{{ post.url }}">go to details</a></td>
      </tr>
      <tr>
            <td colspan="2"><hr></td>
      </tr>
    {% endfor %}
    
