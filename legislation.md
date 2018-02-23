---
layout: default
permalink: /legislation
title: Legislation
---

# Open Data Legislation
Many open data implementations are the result of good management and their policies. But any good policy can be modified by a change in management. To make good policy permanent, the policy must be made into a law. The law must cover just enough detail to establish a framework that the open data implementation can be built upon. We highlight and review open data legislation.

<!-- ## Model Open Data Legislation
  * [How to create open data legislation](/open-data-legislation-how-to)
  * [Open data legislation implementation](/open-data-legislation-implementation)
-->

## Existing Open Data Legislation with analysis
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
</table>

    version 0.2