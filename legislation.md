---
layout: default
permalink: /legislation
title: Legislation
---

# ODI Legislation
## Broken down into two major categories: Model and Existing
* Existing shows the list of open data legislation (metadata, summary, and comments coming soon)
* Model shows the ideal open data legislation developed by the Open Data Legislation Project (coming soon)

[Go to the Open Data Legislation Project development page](https://github.com/opendatainitiative/opendatainitiative.github.io/wiki/Open-Data-Legislation-Project)

## Existing Open Data Legislation
<table>
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
