---
layout: default
permalink: /news
title: News
---

# ODI News
All the news about government financial transparency

<table>
    {% for post in site.categories.news %}
      <tr>
            <td>{{ post.date | date: '%B %d, %Y' }}</td>
            <td>{{ post.excerpt }}</td>
      <tr>
            <td colspan="2"><a href="{{ site.baseurl }}{{ post.url }}">go to news details</a></td>
      </tr>
      <tr>
            <td colspan="2"><hr></td>
      </tr>
    {% endfor %}
