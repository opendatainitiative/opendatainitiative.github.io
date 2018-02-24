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
Review the <a target="_blank" href="/detailed-legislation">Detailed Existing Open Data Legislation</a> and review the <a target="_blank" href="/scored-legislation">Scored Existing Open Data Legislation</a>
<table cellpadding="10" border="1">
	<tr>
		<th>Session</th>
		<th>Bill Number</th>
		<th>Organization</th>
		<th>Bill Text</th>
		<th>Last Activity</th>
		<th>Score</th>
	</tr>
{% for Name in site.data.alpha-legislation %}
  <tr>
  	<td width="15%" align="center">{{ Name.session }}</td>
  	<td width="15%" align="center">{{ Name.bill-number }}</td>
  	<td width="15%" align="center">{{ Name.organization }}</td>
  	<td width="15%" align="center"><a target="_blank" href="{{ Name.bill-text }}">{{ Name.organization }}-{{ Name.session }}-{{ Name.bill-number }}</a></td>
  	<td width="15%" align="center">{{ Name.last-activity }}</td>
  	<td width="25%" align="center">{{ Name.score }}</td>
  </tr>
{% endfor %}

