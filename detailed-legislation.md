---
layout: default
permalink: /detailed-legislation
title: Detailed Legislation
---

# Open Data Legislation
## Detailed Existing Open Data Legislation
Go back to the <a target="_blank" href="/legislation">Summary of Existing Open Data Legislation</a>, <a target="_blank" href="/scored-legislation">Scored Existing Open Data Legislation</a>, and <a target="_blank" href="/scoring">ODI Scoring methodology.</a>
<table cellpadding="10" border="1">
	<tr>
		<th>Session</th>
		<th>Bill Number</th>
		<th>Title</th>
		<th>Organization</th>
		<th>ODI Review</th>
		<th>Bill Text</th>
		<th>Source</th>
		<th>Sponsors</th>
		<th>Past Legislation</th>
		<th>Related Legislation</th>
		<th>Introduced</th>
		<th>Last Activity</th>
		<th>Comments</th>
	</tr>
{% for name in site.data.legislation %}
  <tr>
  	<td class="tablecolumn" align="center">{{ name.session }}</td>
  	<td class="tablecolumn" align="center">{{ name.bill-number }}</td>
  	<td class="tablecolumn largetablecolumn" align="center">{{ name.title }}</td>
  	<td class="tablecolumn" align="center">{{ name.organization }}</td>
  	<td class="tablecolumn largetablecolumn" align="center"><a target="_blank" href="{{ name.review }}">{{ name.review }}</a></td>
  	<td class="tablecolumn" align="center"><a target="_blank" href="{{ name.bill-text }}">{{ name.organization }}-{{ name.session }}-{{ name.bill-number }}</a></td>
  	<td class="tablecolumn" align="center"><a target="_blank" href="{{ name.source }}">{{ name.organization }}-{{ name.session }}-{{ name.bill-number }}</a></td>
  	<td class="tablecolumn" align="center">{{ name.sponsors }}</td>
  	<td class="tablecolumn" align="center">{{ name.past-legislation }}</td>
  	<td class="tablecolumn" align="center">{{ name.related-legislation }}</td>
  	<td class="tablecolumn largetablecolumn" align="center">{{ name.introduced }}</td>
  	<td class="tablecolumn largetablecolumn" align="center">{{ name.last-activity }}</td>
  	<td class="tablecolumn largetablecolumn" align="center">{{ name.comments }}</td>
  </tr>
{% endfor %}
</table>

**<a target="_blank" href="https://github.com/opendatainitiative/opendatalegislation/tree/0.9.0">revision 0.9.0</a>**
