---
layout: home
title: ""
permalink: /
excerpt: ""
author_profile: false
---

<style>
  /* 1) Center & cap the whole profile section at 740px */
  .profile-grid {
    max-width: 740px;
    margin: 0 auto 2rem;
  }

  /* 2) On ?768px: make it two columns (280px for photo, rest for text) */
  @media (min-width: 768px) {
    .profile-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      grid-column-gap: 2rem;
      align-items: start;
    }
  }

  /* 3) Photo styling */
  .profile-grid img {
    width: 100%;
    max-width: 280px;
    border-radius: .25rem;
    margin-bottom: 1rem;
  }
</style>

<div class="profile-grid">
  <!-- Left column: photo -->
  <img src="/images/profile.JPG" alt="Francesco Ruggieri">

  <!-- Right column: your text -->
  <div>
    <p>
      I am a pre-job-market Postdoctoral Scholar in the Kenneth C. Griffin Department
      of Economics at the University of Chicago, where I completed my Ph.D. in 2024.
    </p>

    <p>
      My research lies at the intersection of <strong>public finance</strong> and
      <strong>urban economics</strong>, with a focus on property taxation and the
      spatial structure of local governments in the United States. I also develop
      <strong>econometric methods</strong> of direct relevance to empirical questions
      in local public finance.
    </p>

    <p><strong>I am on the 2025-26 academic job market.</strong></p>

    <p>
      A copy of my Curriculum Vitae is available
      <a href="/files/CV_FrancescoRuggieri.pdf">here</a>.
    </p>

    <p>
      You can reach me at
      <a href="mailto:ruggieri@uchicago.edu">ruggieri@uchicago.edu</a>.
    </p>
  </div>
</div>