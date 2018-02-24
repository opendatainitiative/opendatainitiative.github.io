---
layout: default
permalink: /scored-legislation
title: Scored Legislation
---

# Open Data Legislation
## Detailed Existing Open Data Legislation
Go back to the <a target="_blank" href="/legislation">Summary of Existing Open Data Legislation</a> and review the <a target="_blank" href="/detailed-legislation">Detailed Existing Open Data Legislation</a>
<table cellpadding="10" border="1">
	<tr>
		<th>Session</th>
		<th>Bill Number</th>
		<th>Title</th>
		<th>Organization</th>
		<th>Total Score</th>
		<th>Score Public Default</th>
		<th>Score Tech Standards</th>
		<th>Score Accounting Standards</th>
		<th>Score Metadata Standards</th>
		<th>Score Annual Report</th>
		<th>Score Bi-Annual Report</th>
		<th>Score Incentives</th>
		<th>Score Passed House</th>
		<th>Score Passed Senate</th>
		<th>Score Signed Law</th>
	</tr>
{% for Name in site.data.alpha-legislation %}
  <tr>
  	<td width="06%" align="center">{{ Name.session }}</td>
  	<td width="06%" align="center">{{ Name.bill-number }}</td>
  	<td width="17%" align="center">{{ Name.title }}</td>
  	<td width="06%" align="center">{{ Name.organization }}</td>
  	<td width="05%" align="center">{{ Name.score }}</td>
  	<td width="05%" align="center">{{ Name.public-default }}</td>
  	<td width="05%" align="center">{{ Name.tech-standards }}</td>
  	<td width="05%" align="center">{{ Name.accounting-standards }}</td>
  	<td width="05%" align="center">{{ Name.metadata-standards }}</td>
  	<td width="05%" align="center">{{ Name.annual-report }}</td>
  	<td width="05%" align="center">{{ Name.bi-annual-meetings }}</td>
  	<td width="05%" align="center">{{ Name.incentives }}</td>
  	<td width="05%" align="center">{{ Name.passed-house }}</td>
  	<td width="05%" align="center">{{ Name.passed-senate }}</td>
  	<td width="05%" align="center">{{ Name.signed-law }}</td>
  </tr>
{% endfor %}

