---
layout: default
permalink: /detailed-legislation
title: Detailed Legislation
---

# Open Data Legislation
## Detailed Existing Open Data Legislation
Go back to the <a target="_blank" href="/legislation">Summary of Existing Open Data Legislation</a> and review the <a target="_blank" href="/scored-legislation">Scored Existing Open Data Legislation</a>
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
{% for Name in site.data.alpha-legislation %}
  <tr>
  	<td width="07%" align="center">{{ Name.session }}</td>
  	<td width="07%" align="center">{{ Name.bill-number }}</td>
  	<td width="07%" align="center">{{ Name.title }}</td>
  	<td width="07%" align="center">{{ Name.organization }}</td>
  	<td width="14%" align="center">{{ Name.review }}</td>
  	<td width="07%" align="center"><a target="_blank" href="{{ Name.bill-text }}">{{ Name.organization }}-{{ Name.session }}-{{ Name.bill-number }}</a></td>
  	<td width="07%" align="center"><a target="_blank" href="{ Name.source }}">{{ Name.organization }}-{{ Name.session }}-{{ Name.bill-number }}</a></td>
  	<td width="10%" align="center">{{ Name.sponsors }}</td>
  	<td width="10%" align="center">{{ Name.past-legislation }}</td>
  	<td width="10%" align="center">{{ Name.related-legislation }}</td>
  	<td width="07%" align="center">{{ Name.introduced }}</td>
  	<td width="07%" align="center">{{ Name.last-activity }}</td>
  	<td width="14%" align="center">{{ Name.comments }}</td>
  </tr>
{% endfor %}

