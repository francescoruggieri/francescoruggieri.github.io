---
permalink: /atlas/
layout: single
author_profile: false
---

This page presents state-level maps of nominal property tax rates levied by overlapping local jurisdictions in 2020. More details on data sources are available in [**The Geography of the U.S. Property Tax**](/files/GeographyPropTax.pdf).

In general, nominal rates are not directly comparable across states due to differences in the ratio of assessed to market value, the equalization of assessments across counties, and other state-specific appraisal standards.

<div class="atlas-grid">
  {%- assign maps = site.static_files | where_exp: "f", "f.path contains '/assets/maps/full/'" -%}
  {%- assign maps = maps | sort: "name" -%}
  {%- for f in maps -%}
    {%- comment -%}
      Expect filenames like "rate_XY_2020.png"
      parts[0] = "rate", parts[1] = "XY", parts[2] = "2020.png"
    {%- endcomment -%}
    {%- assign parts = f.name | split: "_" -%}
    {%- assign code = parts[1] -%}
    {%- assign label = site.data.states[code] | default: code -%}
    <a class="atlas-card" href="{{ f.path }}" aria-label="{{ label }}">
      <img src="{{ f.path }}" alt="{{ label }} property tax map" loading="lazy" />
      <span class="atlas-badge">{{ label }}</span>
    </a>
  {%- endfor -%}
</div>

<style>
.atlas-intro { margin-bottom: 1rem; }
.atlas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 14px;
}
.atlas-card {
  position: relative;
  display: block;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 8px;
  background: #fff;
  text-decoration: none;
  transition: transform .08s ease, box-shadow .08s ease;
}
.atlas-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,.08); }
.atlas-card img {
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}
.atlas-badge {
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 12px;
  background: rgba(0,0,0,.7);
  color: #fff;
  padding: 2px 6px;
  border-radius: 6px;
}
@media (min-width: 1024px) {
  .atlas-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
  .atlas-card img { height: 120px; }
}
</style>
