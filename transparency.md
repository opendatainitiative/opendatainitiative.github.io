---
layout: default
permalink: /transparency
title: Transparency
---
# {{ page.title }}

### State Transparency Report 2017
In late 2017, we evaluated the current status of open data policies in the states and municipalities using sources, policies, and implementations in detail.
<br>
<a href="/transparency-scorecard">go to details</a>

### State Open Data Portals with their Transparency Scored 2017
Note that we have not scored some of the open data portals, as were focused on the lower PIRG scoring open data portals for this review. <a target="_blank" href="https://uspirgedfund.org/reports/usp/following-money-2016-0">Review 2016 PIRG Government Spending Data report</a> and <a target="_blank" href="/scoring">review the ODI Scoring methodology.</a>
<table cellpadding="10" border="1">
	<tr>
		<th>Government Organization</th><th>ODI Transparency Score</th><th>2016 PIRG Score</th><th>Accessability</th><th>Downloadability</th><th>Comments</th>
	</tr>
{% for Name in site.data.alpha-transparency %}
  <tr>
  	<td width="15%" align="center">{{ Name.name }}</td>
  	<td width="15%" align="center">{{ Name.score }}</td>
  	<td width="15%" align="center">{{ Name.2016-pirg-score }}</td>
  	<td width="15%" align="center">{{ Name.accessibility }}</td>
  	<td width="15%" align="center">{{ Name.downloadability }}</td>
  	<td width="25%" align="center">{{ Name.comments }}</td>
  </tr>
{% endfor %}
</table>

**<a target="_blank" href="https://github.com/opendatainitiative/transparency/tree/0.2">revision 0.2</a>**