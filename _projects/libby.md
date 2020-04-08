---
layout: project
designer: "Libby Thomas"
program: "XD"
title:  "Project Title"
subtitle: "Project Subtitle"
heroimage: "fpo-project-promo.jpg"
keywords: "lorem, ipsum, dolor"
extlinktitle: "link title"
extlinkurl: "http://google.com"

---

<!--begin flow-->
<div class="flow">
<!--begin flow containers-->
<div class="flow-full project-title">
	<h1 class="title">{{page.title}}</h1>
	<h2 class="subtitle">{{page.subtitle}}</h2>
</div>
<div class="flow-half project-meta">
	<!--project meta data-->
	{% include projectdata.html %}
</div>
<div class="flow-half project-description">
	<!--main description-->
	...
</div>
	<!--continue with project flow containers ...-->

<!--end flow containers-->
</div>
<!--end flow-->