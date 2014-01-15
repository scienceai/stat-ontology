Standard Analytics Ontologies
=======

Our mission, at Standard Analytics, is to provide the API that will bring Science into the web of data.

In part, this mission relies on the ability of web crawlers to make sense out of the content of scientific analysis and results. The defininition of standard concepts of Persons, Events, or Movies, for example, in shared vocabularies, along with linked data technology that allows to link any data to any of such concepts, have completely transformed the level of automation and intelligence of what could be done with the content of the world wide web. We want to bring that revolution into Science.

To this end, we have been working on extensions of the currently adopted vocabularies so that machines could start understanding the nature of the scientific production, starting with two core sets of notions.

On one hand, we have looked at what was done with data, and the terms required to describe the processing of data by algorithms to produce results. We have been excited to rely on the recently adopted schema.org vocabulary for Datasets, and are proposing some extensions in the Data package section.

In addition, we have been looking into statistical inference, and what notions are used in the process of drawing conclusions out of data. The current version of the statistical vocabulary should be considered as a working draft, which extension should pursued collaborativelly.

To explore these two vocabularies, visit the pages of the [data package](http://standardanalytics.io/datapackage) and [statistics](http://standardanalytics.io/stats) vocabularies.


Usage
========


Let's now illustrate how this markup vocabulary can be used to transform quantitatives arguments into hypermedia. This is the way quantitative arguments are classically shared on the web:

```
<p>
The French spend the most time per day eating, but have one of the lowest obesity rates among developed nations. Coincidence? Maybe not, there does seem to be some correlation among OECD countries (cor = -0.45,  p   = 0.06).
</p>
```

With the markup vocabulary we propose, you can make it explicit for machines that this argument is based on a [correlation estimate](http://localhost:3000/stats/Correlation), with a given [p-value](http://localhost:3000/stats/pValue), and link to every moving part this result is based on using the [isBasedOnUrl](http://schema.org/isBasedOnUrl) property:

```
<p vocab="http://schema.org/" 
   prefix="stats: http://standardanalytics.io/stats/" 
   resource="#obesity"
   typeof="Comment stats:Correlation">
The French spend the most time per day eating, but have one of the lowest obesity rates among developed nations. Coincidence? Maybe not, there does seem to be some correlation among OECD countries 
(<a property="isBasedOnUrl" 
    href="http://r.standardanalytics.io/obesity/0.0.0">
 cor = <span property="stats:estimate">-0.45</span>,
 p =   <span property="stats:pValue">   0.06</span>  </a>).
</p>
```


