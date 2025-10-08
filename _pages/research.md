---
permalink: /research/
layout: single
author_profile: false
classes: wide research-wide   # ← add a unique class
---
<style>
  @media (min-width: 1024px) {
    /* the body gets the layout class; target the article with your custom class */
    body.layout--single .page.research-wide .page__inner,
    body.layout--single .page.research-wide .page__content {
      max-width: 1100px !important; /* the !important helps beat theme defaults */
    }
  }
</style>

{% include base_path %}

## Job Market Paper

**Overlapping Jurisdictions and the Provision of Local Public Goods in U.S. Metropolitan Areas**


## Working Papers

[**Structural Extrapolation in Regression Discontinuity Designs with an Application to School Expenditure Referenda**](/files/RDDExtrapolation.pdf) [<a href="#/" onclick="visib('rddextrapolation')">Abstract</a>] [[arXiv](https://arxiv.org/abs/2508.02658)]
(with [Austin Feng](https://www.cmu.edu/dietrich/statistics-datascience/people/phd/austin-feng.html))  
Under review.

<div id="rddextrapolation" style="display: none; text-align: justify; line-height: 1.5" >
We propose a structural approach to extrapolate average partial effects away from the cutoff in regression discontinuity designs (RDDs). Our focus is on applications that exploit closely contested school district referenda to estimate the effects of changes in education spending on local economic outcomes. We embed these outcomes in a spatial equilibrium model of local jurisdictions in which fiscal policy is determined by majority rule voting. This integration provides a microfoundation for the running variable&#8212;the share of voters who approve a ballot initiative&#8212;and enables identification of structural parameters using RDD coefficients. We then leverage the model to simulate the effects of counterfactual referenda over a broad range of proposed spending changes. These scenarios imply realizations of the running variable away from the threshold, allowing extrapolation of RDD estimates to nonmarginal referenda. Applying the method to school expenditure ballot measures in Wisconsin, we document substantial heterogeneity in housing price capitalization across the approval margin.
<br><br/></div>

[**Dynamic Regression Discontinuity: An Event-Study Approach**](/files/DynDisc.pdf) [<a href="#/" onclick="visib('dyndisc')">Abstract</a>] [[arXiv](https://arxiv.org/abs/2307.14203)]  
Under review.

<div id="dyndisc" style="display: none; text-align: justify; line-height: 1.5" >
I propose a novel argument to identify economically interpretable intertemporal treatment effects in dynamic regression discontinuity designs (RDDs). Specifically, I develop a dynamic potential outcomes model and reformulate two assumptions from the difference-in-differences literature&#8212;no anticipation and common trends&#8212;to attain point identification of cutoff-specific impulse responses. The estimand of each target parameter can be expressed as the sum of two static RDD contrasts, thereby allowing for nonparametric estimation and inference with standard local polynomial methods. I also propose a nonparametric approach to aggregate treatment effects across calendar time and treatment paths, leveraging a limited path independence restriction to reduce the dimensionality of the parameter space. I apply this method to estimate the dynamic effects of school district expenditure authorizations on housing prices in Wisconsin.
<br><br/></div>

[**A Spatial Theory of Overlapping Local Governments**](/files/OverlappingGovernments_v3.pdf) [<a href="#/" onclick="visib('spatialtheory')">Abstract</a>] [[SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4808965)]

<div id="spatialtheory" style="display: none; text-align: justify; line-height: 1.5" >
Local governments in the United States are vertically differentiated. A typical location is served by multiple overlapping jurisdictions that share property tax base and specialize in the provision of one or more local public goods. This paper evaluates the implications of such vertical differentiation for the equilibrium levels of government spending, property tax rates, and household welfare. I propose a spatial theory of overlapping jurisdictions in which residents collectively determine the local mix of expenditures and taxes. Because fiscal policy capitalizes into housing prices and all jurisdictions draw revenue from housing, the cost of raising expenditures in a location is implicitly shared with other coexisting jurisdictions. In equilibrium, this induces higher levels of government spending, higher property tax rates, and lower household welfare compared to scenarios in which jurisdictions are vertically coterminous or only horizontally differentiated.
<br><br/></div>

[**The Geography of the U.S. Property Tax**](/files/GeographyPropTax.pdf) [<a href="#/" onclick="visib('geoproptax')">Abstract</a>] [[SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4808970)]

<div id="geoproptax" style="display: none; text-align: justify; line-height: 1.5" >
I construct a novel, granular georeferenced dataset on the universe of local governments in the United States and their property tax rates from the early 2000s to 2022. Using this dataset, I present new descriptive insights on the geography of the property tax.  First, property tax rates exhibit substantial variation within states, surpassing that of any other local tax. Second, rates are higher in locations where a greater number of jurisdictions overlap and thus share tax base. Third, rates are higher in areas with larger dispersion in property values and greater racial and ethnic heterogeneity. Fourth, new local taxing jurisdictions are more likely to be formed in locations where the distribution of income is more even and dispersion in housing values is lower.
<br><br/></div>

## Work in Progress

The Intergenerational Effects of Health Shocks: Location Choice, Homeownership, and Family Formation (with [Elin Colmsjö](https://sites.google.com/view/elincolmsjo/) and Matteo Saccarola)

[//]: This java script is the button to show abstract
<script>
 function visib(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script>

[//]:&emsp;<button onclick="visib('polariz')" class="btn btn--inverse btn--small">Abstract</button>


