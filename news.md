---
layout: default
permalink: /news
title: News
---

# ODI News
      
<table>
    {% for post in site.categories.news %}
      <tr>
            <td>{{ page.date | date: '%B %d, %Y' }}</td>
            <td>{{ post.excerpt }}</td>
      <tr>
            <td colspan="2"><a href="{{ site.baseurl }}{{ post.url }}">go to news details</a></td>
      </tr>
      <tr>
      </tr>
    {% endfor %}
</table>
