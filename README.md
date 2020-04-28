# exhibition2020

Northeastern University CAMD 2020 MFA Thesis Exhibition Website

Development: 

https://camdmfa.github.io/exhibition2020/

Production:

https://web.northeastern.edu/mfashow/

Run locally using:

`jekyll serve --baseurl ''`



### Project template

The project template is a mixture of HTML and markdown.

Below is the minim requirement.

The section delineated at the top is the metadata. These variables can be used in other places on the site, such as the home page.

The order of the metadata section gets shifted on the desktop view.


```
---
layout: project
designer: "Desginer Name"
program: "IDV"
title:  "Project Title"
subtitle: "Project Subtitle"
heroimage: "fpo-project-promo.jpg"
keywords: "lorem, ipsum, dolor"
extlinktitle: "link title"
extlinkurl: "http://google.com"
advisor: "Advisor Name"

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
```

### Media

Use [this service](https://embedresponsively.com/) to generate responsive embed code for videos. 


### Deployment

Before copying files to the production server you need to build the project with the correct directory path:

`jekyll serve --baseurl '/mfashow'`

Then move to the `_sites` directory: `cd _sites`

Using sftp, copy the files: `sftp: put -r .`

