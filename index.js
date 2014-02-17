exports.stats = {
  "@context": {
    "stats": "http://standardanalytics.io/stats/",
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
  "@id": "http://standardanalytics.io/stats",
  "defines": [

    {
      "@id": "stats:statModel",
      "@type": "rdf:Property",
      "label": "statistical Model",
      "comment": "Statistical model hypothethised to explain observed data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_model",
      "range": "stats:StatModel",
      "domain": "schema:Dataset",
      "status": "testing"
    },

    {
      "@id": "stats:StatTest",
      "@type": "rdfs:Class",
      "label": "Statistical test",
      "comment": "Statistical hypothesis test. A result is called statistically significant if it has been predicted as unlikely to have occurred by chance alone.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_hypothesis_testing",
      "subClassOf": [
        "schema:Intangible"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:TTest",
      "@type": "rdfs:Class",
      "label": "Statistical t-test",
      "comment": "Statistical test in which the test statistic follows a Student t distribution under the null hypothesis.",
      "subClassOf": [
        "stats:StatTest"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:FTest",
      "@type": "rdfs:Class",
      "label": "Statistical F-test",
      "comment": "Statistical test in which the test statistic follows an F-distribution under the null hypothesis.",
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
      "comment": "Statistical test in which the test statistic follows a normal distribution under the null hypothesis.",
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
      "comment": "Chi-squared test, also referred to as chi-square test, is any statistical hypothesis test in which the sampling distribution of the test statistic is a chi-squared distribution under the null hypothesis.",
      "seeAlso": "http://en.wikipedia.org/wiki/Chi_square_test",
      "subClassOf": [
        "stats:StatTest"
      ],
      "status": "testing"
    },
    
    {
      "@id": "stats:testStatistic",
      "@type": "rdf:Property",
      "label": "Test statistic",
      "comment": "Numerical summary of a dataset used to perform a hypothesis test.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistic",
      "range": "xsd:float",
      "domain": "stats:StatTest",
      "status": "testing"
    },
    {
      "@id": "stats:pValue",
      "@type": "rdf:Property",
      "label": "p-value",
      "comment": "The p-value is the probability of obtaining a test statistic at least as extreme as the one that was actually observed, assuming that the null hypothesis is true.",
      "seeAlso": "http://en.wikipedia.org/wiki/P_value",
      "range": "xsd:float",
      "domain": "stats:StatTest",
      "status": "testing"
    },
    {
      "@id": "stats:df",
      "@type": "rdf:Property",
      "label": "Number of degrees of freedom",
      "comment": "The number of degrees of freedom is the number of values in the final calculation of a statistic that are free to vary.",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:integer",
      "domain": "stats:StatTest",
      "status": "testing"
    },

    {
      "@id": "stats:dfNum",
      "@type": "rdf:Property",
      "label": "Number of degrees of freedom",
      "comment": "Number of degrees of freedom of the numerator.",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:integer",
      "domain": "stats:FTest",
      "status": "testing"
    },
    {
      "@id": "stats:dfDenom",
      "@type": "rdf:Property",
      "label": "Number of degrees of freedom",
      "comment": "Number of degrees of freedom of the denominator.",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:integer",
      "domain": "stats:FTest",
      "status": "testing"
    },

    {
      "@id": "stats:Statistic",
      "@type": "rdfs:Class",
      "label": "Statistic",
      "comment": "Function of the sample.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistic",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:estimate",
      "@type": "rdf:Property",
      "label": "Estimate",
      "comment": "Numerical summary of a dataset.",
      "seeAlso": "http://en.wikipedia.org/wiki/Estimation_statistics",
      "range": "xsd:float",
      "domain": "stats:Statistic",
      "status": "testing"
    },
    {
      "@id": "stats:statTest",
      "@type": "rdf:Property",
      "label": "Statistical test",
      "comment": "Statistical hypothesis test. A result is called statistically significant if it has been predicted as unlikely to have occurred by chance alone.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_test",
      "range": "stats:StatTest",
      "domain": "stats:Statistic",
      "status": "testing"
    },
    {
      "@id": "stats:stdError",
      "@type": "rdf:Property",
      "label": "Standard error",
      "comment": "Standard deviation of the sampling distribution of a statistic.",
      "seeAlso": "http://en.wikipedia.org/wiki/Standard_error",
      "range": "xsd:float",
      "domain": "stats:Statistic",
      "status": "testing"
    },

    {
      "@id": "stats:Correlation",
      "@type": "rdfs:Class",
      "label": "Correlation coefficient",
      "comment": "Correlation refers to any of a broad class of statistical relationships involving dependence.",
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
      "comment": "Variable that is observed.",
      "seeAlso": "http://en.wikipedia.org/wiki/Covariate",
      "range": "xsd:string",
      "domain": "stats:Correlation",
      "status": "testing"
    },
    {
      "@id": "stats:covariate2",
      "@type": "rdf:Property",
      "label": "Second covariate",
      "comment": "Variable that is observed.",
      "seeAlso": "http://en.wikipedia.org/wiki/Covariate",
      "range": "xsd:string",
      "domain": "stats:Correlation",
      "status": "testing"
    },

    {
      "@id": "stats:Proportion",
      "@type": "rdfs:Class",
      "label": "Proportion",
      "comment": "A part considered in relation to the whole.",
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
      "comment": "Formalization of relationships between variables in the form of mathematical equations.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_model",
      "subClassOf": [
        "schema:Intangible"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:modelFormula",
      "@type": "rdf:Property",
      "label": "Model formula",
      "comment": "Concise way of expressing the hypothesised relation between explained and explanatory variables.",
      "seeAlso": "http://en.wikipedia.org/wiki/Formula",
      "range": "xsd:string",
      "domain": "stats:LinearModel",
      "status": "testing"
    },
    {
      "@id": "stats:modelCalibration",
      "@type": "rdf:Property",
      "label": "Model fit",
      "comment": "Calibration of the model parameters against the data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Calibration_(statistics)",
      "range": "stats:ModelCalibration",
      "domain": "stats:StatModel",
      "status": "testing"
    },

    {
      "@id": "stats:ModelCalibration",
      "@type": "rdfs:Class",
      "label": "Model calibration",
      "comment": "Calibration of the model parameters against the data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Calibration_(statistics)",
      "subClassOf": [
        "schema:Intangible"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:r2",
      "@type": "rdf:Property",
      "label": "R-squared",
      "comment": "Coefficient of determination, pronounced R squared, that indicates how well data points fit a line or curve.",
      "seeAlso": "http://en.wikipedia.org/wiki/R_squared",
      "range": "xsd:float",
      "domain": "stats:ModelCalibration",
      "status": "testing"
    },
    {
      "@id": "stats:adjr2",
      "@type": "rdf:Property",
      "label": "Adjusted R-squared",
      "comment": "The adjusted R2 is an attempt to take account of the phenomenon of the R2 automatically and spuriously increasing when extra explanatory variables are added to the model.",
      "seeAlso": "http://en.wikipedia.org/wiki/R_squared#Adjusted_R2",
      "range": "xsd:float",
      "domain": "stats:ModelCalibration",
      "status": "testing"
    },

    {
      "@id": "stats:OptimalFit",
      "@type": "rdfs:Class",
      "label": "Optimal Fit",
      "comment": "Model fit obtained by maximizing a fitness criteria.",
      "seeAlso": "http://en.wikipedia.org/wiki/Maximum_likelihood",
      "subClassOf": [
        "stats:ModelCalibration"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:aic",
      "@type": "rdf:Property",
      "label": "Akaike Information Criterion",
      "comment": "Measure of the relative quality of a statistical model, for a given set of data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Akaike_information_criterion",
      "range": "xsd:float",
      "domain": "stats:OptimalFit",
      "status": "testing"
    },
    {
      "@id": "stats:bic",
      "@type": "rdf:Property",
      "label": "Bayesian Information Criterion",
      "comment": "Measure of the relative quality of a statistical model, for a given set of data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Bayesian_information_criterion",
      "range": "xsd:float",
      "domain": "stats:OptimalFit",
      "status": "testing"
    },
    {
      "@id": "stats:fitCriterion",
      "@type": "rdf:Property",
      "label": "fit Criterion",
      "comment": "Fitness criterion that has been optimized.",
      "seeAlso": "http://en.wikipedia.org/wiki/Likelihood_function",
      "range": "xsd:string",
      "domain": "stats:OptimalFit",
      "status": "testing"
    },
    {
      "@id": "stats:optimalParameter",
      "@type": "rdf:Property",
      "label": "optimalParameter",
      "comment": "Optimal parameter.",
      "seeAlso": "http://en.wikipedia.org/wiki/Maximum_likelihood",
      "range": "stats:Parameter",
      "domain": "stats:OptimalFit",
      "status": "testing"
    },
    {
      "@id": "stats:anova",
      "@type": "rdf:Property",
      "label": "Analysis of Variance",
      "comment": "Collection of statistical models used to analyze the differences between group means and their associated procedures (such as 'variation' among and between groups).",
      "seeAlso": "http://en.wikipedia.org/wiki/Anova",
      "range": "stats:ANOVARow",
      "domain": "stats:OptimalFit",
      "status": "testing"
    },

    {
      "@id": "stats:MCMC",
      "@type": "rdfs:Class",
      "label": "Monte Carlo Markov Chain",
      "comment": "Calibration of the model by Monte Carlo Markov Chain.",
      "seeAlso": "http://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo",
      "subClassOf": [
        "stats:ModelCalibration"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:dic",
      "@type": "rdf:Property",
      "label": "Deviance Information Criterion",
      "comment": "Measure of the relative quality of a statistical model, for a given set of data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Deviance_information_criterion",
      "range": "xsd:float",
      "domain": "stats:MCMC",
      "status": "testing"
    },
    {
      "@id": "stats:trace",
      "@type": "rdf:Property",
      "label": "Trace",
      "comment": "Trajectory of the Monte Carlo Markov Chaib.",
      "seeAlso": "http://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo",
      "range": "schema:Dataset",
      "domain": "stats:MCMC",
      "status": "testing"
    },
    {
      "@id": "stats:ess",
      "@type": "rdf:Property",
      "label": "Effective Sampling Size",
      "comment": "Measure of the relative quality of a statistical model, for a given set of data.",
      "seeAlso": "http://cran.r-project.org/web/packages/coda/coda.pdf",
      "range": "xsd:float",
      "domain": "stats:MCMC",
      "status": "testing"
    },

    {
      "@id": "stats:LinearModel",
      "@type": "rdfs:Class",
      "label": "Linear model",
      "comment": "Model based on linear predictor functions.",
      "seeAlso": "http://en.wikipedia.org/wiki/Linear_model",
      "subClassOf": [
        "stats:StatModel"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:ANOVARow",
      "@type": "rdfs:Class",
      "label": "ANOVA row",
      "comment": "Row of an ANOVA",
      "seeAlso": "http://en.wikipedia.org/wiki/Anova",
      "subClassOf": [
        "stats:Statistic"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:errorStratum",
      "@type": "rdf:Property",
      "label": "Error stratum",
      "comment": "Error stratum of an ANOVA",
      "seeAlso": "http://en.wikipedia.org/wiki/Anova",
      "range": "xsd:string",
      "domain": "stats:ANOVARow",
      "status": "testing"
    },
    {
      "@id": "stats:sumSq",
      "@type": "rdf:Property",
      "label": "Sum of Squares",
      "comment": "Sum of squares.",
      "seeAlso": "http://en.wikipedia.org/wiki/Partition_of_sums_of_squares",
      "range": "xsd:float",
      "domain": "stats:ANOVARow",
      "status": "testing"
    },
    {
      "@id": "stats:meanSq",
      "@type": "rdf:Property",
      "label": "Mean of Squares",
      "comment": "Mean of squares.",
      "seeAlso": "http://en.wikipedia.org/wiki/Partition_of_sums_of_squares",
      "range": "xsd:float",
      "domain": "stats:ANOVARow",
      "status": "testing"
    },

    {
      "@id": "stats:ANOVAResidual",
      "@type": "rdfs:Class",
      "label": "ANOVA residual",
      "comment": "Difference between the observed value and the estimated function value.",
      "seeAlso": "http://en.wikipedia.org/wiki/Errors_and_residuals_in_statistics",
      "subClassOf": [
        "stats:ANOVARow"
      ],
      "status": "testing"
    },    

    {
      "@id": "stats:ANOVAFactor",
      "@type": "rdfs:Class",
      "label": "ANOVA factor",
      "comment":"Process inputs an investigator manipulates to cause a change in the output.",
      "seeAlso": "http://en.wikipedia.org/wiki/Factor_analysis",
      "subClassOf": [
        "stats:ANOVARow"
      ],
      "status": "testing"
    },    

    {
      "@id": "stats:GeneralizedLinearModel",
      "@type": "rdfs:Class",
      "label": "Generalized linear model",
      "comment":"Generalized linear model",
      "seeAlso": "http://en.wikipedia.org/wiki/Generalized_linear_model",
      "subClassOf": [
        "stats:LinearModel"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:modelFamily",
      "@type": "rdf:Property",
      "label": "Test parameters",
      "comment":"Family of a generalized linear model.",
      "seeAlso": "http://en.wikipedia.org/wiki/Generalized_linear_model",
      "range": "xsd:string",
      "domain": "stats:GeneralizedLinearModel",
      "status": "testing"
    },

    {
      "@id": "stats:HierarchicalBayesianModel",
      "@type": "rdfs:Class",
      "label": "Hierarchical Bayesian Model",
      "comment":"Hierarchical Bayesian Model",
      "seeAlso": "http://en.wikipedia.org/wiki/Hierarchical_Bayesian_model",
      "subClassOf": [
        "stats:StatModel"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:ProbabilityDistribution",
      "@type": "rdfs:Class",
      "label": "Probability Distribution",
      "comment":"Probability distribution.",
      "seeAlso": "http://en.wikipedia.org/wiki/Probability_distribution",
      "subClassOf": [
        "schema:Intangible"
      ],
      "status": "testing"
    },
    
    {
      "@id": "stats:distributionParameter",
      "@type": "rdf:Property",
      "label": "Distribution parameter",
      "comment":"Distribution parameter.",
      "seeAlso": "http://en.wikipedia.org/wiki/Parameter",
      "range": "stats:Parameter",
      "domain": "stats:ProbabilityDistribution",
      "status": "testing"
    }

  ],
  "@type": "owl:Ontology",
  "comment": "A lightweight vocabulary for standard statistical analysis",
  "label": "The Standard Analytics Core Vocabulary"
};
