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

## Summary of Existing Open Data Legislation
Review the <a href="/detailed-legislation">Detailed Existing Open Data Legislation</a>, <a href="/scored-legislation">Scored Existing Open Data Legislation</a>, and <a href="/scoring">ODI Scoring methodology.</a>
<table cellpadding="10" border="1">
	<tr>
		<th>Session</th>
		<th>Bill Number</th>
		<th>Organization</th>
		<th>ODI Review</th>
		<th>Bill Text</th>
		<th>Last Activity</th>
		<th>Score [100]</th>
	</tr>

{% for name in site.data.legislation %}
{% assign score = name.public-default | plus: name.tech-standards | plus: name.accounting-standards | plus: name.metadata-standards | plus: name.annual-report | plus: name.bi-annual-meetings | plus: name.incentives | plus: name.passed-house | plus: name.passed-senate | plus: name.signed-law | round: 1 %}
  <tr>
  	<td class="tablecolumn" align="center">{{ name.session }}</td>
  	<td class="tablecolumn" align="center">{{ name.bill-number }}</td>
  	<td class="tablecolumn" align="center">{{ name.organization }}</td>
  	<td class="tablecolumn largetablecolumn" align="center"><a target="_blank" href="{{ name.review }}">{{ name.review }}</a></td>
  	<td class="tablecolumn largetablecolumn" align="center"><a target="_blank" href="{{ name.bill-text }}">{{ name.organization }}-{{ name.session }}-{{ name.bill-number }}</a></td>
  	<td class="tablecolumn largetablecolumn" align="center">{{ name.last-activity }}</td>
  	<td class="tablecolumn" align="center">{{ score }}</td>
  </tr>
{% endfor %}
</table>

**<a target="_blank" href="https://github.com/opendatainitiative/opendatalegislation/tree/0.8.0">revision 0.8.0</a>**
