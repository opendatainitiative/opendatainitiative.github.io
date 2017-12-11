---
layout: default
permalink: /blog
title: Blog
---

# ODI Blog
Blog posts on government financial transparency

<table>
    {% for post in site.categories.blog %}
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
      
