exports.stats = {
  "@context": {
    "stats": "http://schema.standardanalytics.io/ontology/stats#",
    "schema": "http://schema.org/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "vs": "http://www.w3.org/2003/06/sw-vocab-status/ns#",
    "defines": {
      "@reverse": "rdfs:isDefinedBy"
    },
    "comment": "rdfs:comment",
    "label": "rdfs:label",
    "domain": {
      "@id": "rdfs:domain",
      "@type": "@id"
    },
    "range": {
      "@id": "rdfs:range",
      "@type": "@id"
    },
    "subClassOf": {
      "@id": "rdfs:subClassOf",
      "@type": "@id",
      "@container": "@set"
    },
    "subPropertyOf": {
      "@id": "rdfs:subPropertyOf",
      "@type": "@id",
      "@container": "@set"
    },
    "seeAlso": {
      "@id": "rdfs:seeAlso",
      "@type": "@id"
    },
    "status": "vs:term_status"
  },
  "@id": "http://schema.standardanalytics.io/ontology/stats",
  "defines": [
    {
      "@id": "stats:StatResult",
      "@type": "rdfs:Class",
      "label": "Statistical Result",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistics",
      "subClassOf": [
        "schema:Intangible", "schema:Comment"
      ],
      "status": "testing"    
    }
    {
      "@id": "stats:StatTest",
      "@type": "rdfs:Class",
      "label": "Statistical test",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_hypothesis_testing",
      "subClassOf": [
        "stats:StatResult"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:TTest",
      "@type": "rdfs:Class",
      "label": "Statistical t-test",
      "subClassOf": [
        "stats:StatTest"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:FTest",
      "@type": "rdfs:Class",
      "label": "Statistical F-test",
      "seeAlso": "http://en.wikipedia.org/wiki/T_test",
      "subClassOf": [
        "stats:StatTest"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:ZTest",
      "@type": "rdfs:Class",
      "label": "Statistical z-test",
      "seeAlso": "http://en.wikipedia.org/wiki/Z_test",
      "subClassOf": [
        "stats:StatTest"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:ChisqTest",
      "@type": "rdfs:Class",
      "label": "Statistical Chi-Square test",
      "seeAlso": "http://en.wikipedia.org/wiki/Chi_square_test",
      "subClassOf": [
        "stats:StatTest"
      ],
      "status": "testing"
    },
    
    {
      "@id": "stats:statistic",
      "@type": "rdf:Property",
      "label": "statistic",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistic",
      "range": "xsd:float",
      "domain": "stats:StatTest",
      "status": "testing"
    },
    {
      "@id": "stats:pValue",
      "@type": "rdf:Property",
      "label": "p-value",
      "seeAlso": "http://en.wikipedia.org/wiki/P_value",
      "range": "xsd:float",
      "domain": "stats:StatTest",
      "status": "testing"
    },
    {
      "@id": "stats:df",
      "@type": "rdf:Property",
      "label": "degrees of freedom",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:integer",
      "domain": "stats:StatTest",
      "status": "testing"
    },

    {
      "@id": "stats:dfNum",
      "@type": "rdf:Property",
      "label": "degrees of freedom",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:integer",
      "domain": "stats:FTest",
      "status": "testing"
    },
    {
      "@id": "stats:dfDenom",
      "@type": "rdf:Property",
      "label": "degrees of freedom",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:integer",
      "domain": "stats:FTest",
      "status": "testing"
    },

    {
      "@id": "stats:Statistic",
      "@type": "rdfs:Class",
      "label": "Statistic",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistic",
      "subClassOf": [
        "stats:QuantitativeValue","stats:StatResult"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:estimate",
      "@type": "rdf:Property",
      "label": "Estimate",
      "seeAlso": "http://en.wikipedia.org/wiki/Estimation_statistics",
      "range": "xsd:float",
      "domain": "stats:Statistic",
      "status": "testing"
    },
    {
      "@id": "stats:statTest",
      "@type": "rdf:Property",
      "label": "Sgtatistical test",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_test",
      "range": "stats:StatTest",
      "domain": "stats:Statistic",
      "status": "testing"
    },
    {
      "@id": "stats:stdError",
      "@type": "rdf:Property",
      "label": "Standard error",
      "seeAlso": "http://en.wikipedia.org/wiki/Standard_error",
      "range": "xsd:float",
      "domain": "stats:Statistic",
      "status": "testing"
    },

    {
      "@id": "stats:Correlation",
      "@type": "rdfs:Class",
      "label": "Correlation coefficient",
      "seeAlso": "http://en.wikipedia.org/wiki/Correlation",
      "subClassOf": [
        "stats:Statistic"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:covariate1",
      "@type": "rdf:Property",
      "label": "First covariate",
      "seeAlso": "http://en.wikipedia.org/wiki/Covariate",
      "range": "xsd:string",
      "domain": "stats:Correlation",
      "status": "testing"
    },
    {
      "@id": "stats:covariate2",
      "@type": "rdf:Property",
      "label": "Second covariate",
      "seeAlso": "http://en.wikipedia.org/wiki/Covariate",
      "range": "xsd:string",
      "domain": "stats:Correlation",
      "status": "testing"
    },

    {
      "@id": "stats:Proportion",
      "@type": "rdfs:Class",
      "label": "Proportion",
      "seeAlso": "http://en.wikipedia.org/wiki/Proportionality_(mathematics)",
      "subClassOf": [
        "stats:Statistic"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:StatModel",
      "@type": "rdfs:Class",
      "label": "Statistical model",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_model",
      "subClassOf": [
        "stat:StatResult"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:aic",
      "@type": "rdf:Property",
      "label": "Akaike Information Criterium",
      "seeAlso": "http://en.wikipedia.org/wiki/Akaike_information_criterion",
      "range": "xsd:float",
      "domain": "stats:StatModel",
      "status": "testing"
    },

    {
      "@id": "stats:LinearModel",
      "@type": "rdfs:Class",
      "label": "Linear model",
      "seeAlso": "http://en.wikipedia.org/wiki/Linear_model",
      "subClassOf": [
        "schema:StatModel"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:r2",
      "@type": "rdf:Property",
      "label": "R squared",
      "seeAlso": "http://en.wikipedia.org/wiki/R_squared",
      "range": "xsd:float",
      "domain": "stats:LinearModel",
      "status": "testing"
    },
    {
      "@id": "stats:adjr2",
      "@type": "rdf:Property",
      "label": "adjusted R squared",
      "seeAlso": "http://en.wikipedia.org/wiki/R_squared#Adjusted_R2",
      "range": "xsd:float",
      "domain": "stats:LinearModel",
      "status": "testing"
    },
    {
      "@id": "stats:fRatioTest",
      "@type": "rdf:Property",
      "label": "F-Ratio Test",
      "seeAlso": "http://en.wikipedia.org/wiki/F-test",
      "range": "stats:StatTest",
      "domain": "stats:LinearModel",
      "status": "testing"
    },

    {
      "@id": "stats:modelFormula",
      "@type": "rdf:Property",
      "label": "Model formula",
      "seeAlso": "http://en.wikipedia.org/wiki/Formula",
      "range": "xsd:string",
      "domain": "stats:LinearModel",
      "status": "testing"
    },
    {
      "@id": "stats:modelCoefficients",
      "@type": "rdf:Property",
      "label": "Model coefficients",
      "seeAlso": "http://en.wikipedia.org/wiki/Regression_coefficient",
      "range": "stats:Statistic",
      "domain": "stats:LinearModel",
      "status": "testing"
    },
    {
      "@id": "stats:anova",
      "@type": "rdf:Property",
      "label": "anova",
      "seeAlso": "http://en.wikipedia.org/wiki/Anova",
      "range": "stats:ANOVARow",
      "domain": "stats:LinearModel",
      "status": "testing"
    },

    {
      "@id": "stats:ANOVARow",
      "@type": "rdfs:Class",
      "label": "ANOVA row",
      "seeAlso": "http://en.wikipedia.org/wiki/Anova",
      "subClassOf": [
        "stats:statistic"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:errorStratum",
      "@type": "rdf:Property",
      "label": "Error stratum",
      "seeAlso": "http://en.wikipedia.org/wiki/Anova",
      "range": "xsd:string",
      "domain": "stats:ANOVARow",
      "status": "testing"
    },
    {
      "@id": "stats:sumSq",
      "@type": "rdf:Property",
      "label": "Sum of Squares",
      "seeAlso": "http://en.wikipedia.org/wiki/Partition_of_sums_of_squares",
      "range": "xsd:float",
      "domain": "stats:ANOVARow",
      "status": "testing"
    },
    {
      "@id": "stats:meanSq",
      "@type": "rdf:Property",
      "label": "Mean of Squares",
      "seeAlso": "http://en.wikipedia.org/wiki/Partition_of_sums_of_squares",
      "range": "xsd:float",
      "domain": "stats:ANOVARow",
      "status": "testing"
    },

    {
      "@id": "stats:ANOVAResidual",
      "@type": "rdfs:Class",
      "label": "ANOVA factor",
      "seeAlso": "http://en.wikipedia.org/wiki/Errors_and_residuals_in_statistics",
      "subClassOf": [
        "schema:ANOVARow"
      ],
      "status": "testing"
    },    

    {
      "@id": "stats:ANOVAFactor",
      "@type": "rdfs:Class",
      "label": "ANOVA factor",
      "seeAlso": "http://en.wikipedia.org/wiki/Factor_analysis",
      "subClassOf": [
        "schema:ANOVARow"
      ],
      "status": "testing"
    },    

    {
      "@id": "stats:GeneralizedLinearModel",
      "@type": "rdfs:Class",
      "label": "Generalized linear model",
      "seeAlso": "http://en.wikipedia.org/wiki/Generalized_linear_model",
      "subClassOf": [
        "schema:LinearModel"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:modelFamily",
      "@type": "rdf:Property",
      "label": "Test parameters",
      "seeAlso": "http://en.wikipedia.org/wiki/Generalized_linear_model",
      "range": "xsd:string",
      "domain": "stats:GeneralisedLinearModel",
      "status": "testing"
    },


  ],
  "@type": "owl:Ontology",
  "comment": "A lightweight vocabulary for standard statistical analysis",
  "label": "The Standard Analytics Core Vocabulary"
};


exports.datapackage = {
  "@context": {
    "schema": "http://schema.org/",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "vs": "http://www.w3.org/2003/06/sw-vocab-status/ns#",
    "defines": {
      "@reverse": "rdfs:isDefinedBy"
    },
    "comment": "rdfs:comment",
    "label": "rdfs:label",
    "domain": {
      "@id": "rdfs:domain",
      "@type": "@id"
    },
    "range": {
      "@id": "rdfs:range",
      "@type": "@id"
    },
    "subClassOf": {
      "@id": "rdfs:subClassOf",
      "@type": "@id",
      "@container": "@set"
    },
    "subPropertyOf": {
      "@id": "rdfs:subPropertyOf",
      "@type": "@id",
      "@container": "@set"
    },
    "seeAlso": {
      "@id": "rdfs:seeAlso",
      "@type": "@id"
    },
    "status": "vs:term_status"
  },
  "@id": "http://schema.standardanalytics.io/ontology/datapackage",
  "defines": [
    {
      "@id": "spec:dataDependencies",
      "@type": "rdf:Property",
      "label": "data dependencies",
      "range": "schema:DataCatalog",
      "domain": "schema:DataCatalog",
      "status": "testing",
      "seeAlso": "http://dataprotocols.org/data-packages/#core-fields"
    },
    {
      "@id": "spec:resources",
      "@type": "rdf:Property",
      "label": "resources",
      "range": "schema:DataSet",
      "domain": "schema:DataCatalog",
      "status": "testing",
      "seeAlso": "http://dataprotocols.org/data-packages/#resource-information"
    },
    {
      "@id": "spec:code",
      "@type": "rdf:Property",
      "label": "code",
      "range": "schema:Code",
      "domain": "schema:DataCatalog",
      "status": "testing"
    },
    {
      "@id": "spec:data",
      "@type": "rdf:Property",
      "label": "Inline data of a data package resource",
      "range": "schema:DataDownload",
      "domain": "schema:DataSet",
      "status": "testing",
      "seeAlso": "http://dataprotocols.org/data-packages/#resource-information"
    }
  ],
  "@type": "owl:Ontology",
  "comment": "A lightweight vocabulary for terms of the data package spec",
  "label": "The data package Vocabulary"
};
