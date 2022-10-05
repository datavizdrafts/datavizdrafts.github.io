---
title: Eleições 2022
subtitle: 
summary: 
authors:
- Andre
tags: []
categories: []
date: "2021-06-05"
featured: true
draft: false
tags: 
- Visualização
- d3.js

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ""
  focal_point: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
profile: true
---

<script type="text/javascript" src="https://d3js.org/d3.v6.min.js"></script>
<script type="text/javascript" src="js/formatter.js"></script>
<script type="text/javascript" src="js/tabulator.js"></script>
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" href="css/tabulator.css">



<button class="button" style="border-radius: 4px; font-size: 1rem;" onclick="plotMap('n_vivi', false)">Vivi Motta</button>
<button class="button" style="border-radius: 4px; font-size: 1rem;" onclick="plotMap('n_sofia', false)">Sofia Manzano</button>
<button class="button" style="border-radius: 4px; font-size: 1rem;" onclick="plotMap('n_vanessa', false)">Vanessa Cristina</button>
<button class="button" style="border-radius: 4px; font-size: 1rem;" onclick="plotMap('n_thiago', false)">Thiago Ferraiol</button>
<button class="button" style="border-radius: 4px; font-size: 1rem;" onclick="plotMap('n_deputados', false)">Deputados</button>
<div style="padding-bottom: .75rem;"></div>
<div id="paranamap" style="z-index: -1000"></div>
<script type="text/javascript" src="js/simple_map.js"> </script>

<div id="example-table"></div>
<script type="text/javascript" src="js/table.js"></script>

