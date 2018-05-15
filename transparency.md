---
layout: default
permalink: /transparency
title: Transparency
---
# Government Open Data Portals

### State Transparency Report 2017
In late 2017, we evaluated the status of open data policies in the states using sources, policies, and implementations in detail.
<br>
<a href="/transparency-scorecard">go to details</a>

### State Open Data Portals with their Transparency Scored 2018
Also <a target="_blank" href="https://uspirgedfund.org/reports/usf/following-money-2018">review the 2018 PIRG Government Spending Data report</a> and <a href="/scoring">the ODI Scoring methodology.</a>

<table cellpadding="10" border="1">
	<tr>
		<th>Government Organization</th>
		<th>ODI Transparency Score</th>
		<th>2018 PIRG Score</th>
		<th>Accessability</th>
		<th>Downloadability</th>
		<th>Comments</th>
	</tr>
{% for name in site.data.transparency %}
{% assign score = name.2016-pirg-score | times: 0.80 | plus: name.accessibility | plus: name.downloadability | round: 1 %}
  <tr>
  	<td class="tablecolumn"><a target="_blank" href="{{ name.source }}">{{ name.name }}</a></td>
  	<td class="tablecolumn">{{ score }}</td>
  	<td class="tablecolumn">{{ name.2018-pirg-score }}</td>
  	<td class="tablecolumn">{{ name.accessibility }}</td>
  	<td class="tablecolumn">{{ name.downloadability }}</td>
  	<td class="tablecolumn largetablecolumn" style="max-width:200 px">{{ name.comments }}</td>
  </tr>
{% endfor %}
</table>

**<a target="_blank" href="https://github.com/opendatainitiative/transparency/tree/0.7.0">revision 0.7.0</a>**