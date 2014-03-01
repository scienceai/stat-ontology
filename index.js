exports.stats = {
  "@context": {
    "container": "http://standardanalytics.io/container",
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
      "@id": "stats:method",
      "@type": "rdf:Property",
      "label": "Method",
      "comment":"Method.",
      "seeAlso": "http://en.wikipedia.org/wiki/Probability_distribution",
      "range": "schema:Thing",
      "domain": "schema:Intangible",
      "status": "testing"
    },

    {
      "@id": "stats:ProbabilityDistribution",
      "@type": "rdfs:Class",
      "label": "Probability distribution",
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
    },
    {
      "@id": "stats:sampleSequence",
      "@type": "rdf:Property",
      "label": "Sample sequence",
      "comment":"Sample sequence.",
      "seeAlso": "http://en.wikipedia.org/wiki/Sample_(statistics)",
      "range": "schema:url",
      "domain": "stats:ProbabilityDistribution",
      "status": "testing"
    },

    {
      "@id": "stats:StatisticalTest",
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
        "stats:StatisticalTest"
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
        "stats:StatisticalTest"
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
        "stats:StatisticalTest"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:ChiSquareTest",
      "@type": "rdfs:Class",
      "label": "Statistical Chi-Square test",
      "comment": "Chi-squared test, also referred to as chi-square test, is any statistical hypothesis test in which the sampling distribution of the test statistic is a chi-squared distribution under the null hypothesis.",
      "seeAlso": "http://en.wikipedia.org/wiki/Chi_square_test",
      "subClassOf": [
        "stats:StatisticalTest"
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
      "domain": "stats:StatisticalTest",
      "status": "testing"
    },
    {
      "@id": "stats:pValue",
      "@type": "rdf:Property",
      "label": "p-value",
      "comment": "The p-value is the probability of obtaining a test statistic at least as extreme as the one that was actually observed, assuming that the null hypothesis is true.",
      "seeAlso": "http://en.wikipedia.org/wiki/P_value",
      "range": "xsd:float",
      "domain": "stats:StatisticalTest",
      "status": "testing"
    },
    {
      "@id": "stats:df",
      "@type": "rdf:Property",
      "label": "Number of degrees of freedom",
      "comment": "The number of degrees of freedom is the number of values in the final calculation of a statistic that are free to vary.",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:float",
      "domain": "stats:StatisticalTest",
      "status": "testing"
    },
    {
      "@id": "stats:alternative",
      "@type": "rdf:Property",
      "label": "Alternative",
      "comment": "Indication on whether the alternative test hypothesis is two-sided, greater or lower than the null.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_hypothesis_testing",
      "range": "xsd:integer",
      "domain": "stats:StatisticalTest",
      "status": "testing"
    },

    {
      "@id": "stats:dfNum",
      "@type": "rdf:Property",
      "label": "Number of degrees of freedom",
      "comment": "Number of degrees of freedom of the numerator.",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:float",
      "domain": "stats:FTest",
      "status": "testing"
    },
    {
      "@id": "stats:dfDenom",
      "@type": "rdf:Property",
      "label": "Number of degrees of freedom",
      "comment": "Number of degrees of freedom of the denominator.",
      "seeAlso": "http://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)",
      "range": "xsd:float",
      "domain": "stats:FTest",
      "status": "testing"
    },

    {
      "@id": "stats:Mean",
      "@type": "rdfs:Class",
      "label": "Mean",
      "comment": "Mean.",
      "seeAlso": "http://en.wikipedia.org/wiki/Mean",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:StandardDeviation",
      "@type": "rdfs:Class",
      "label": "Standard deviation",
      "comment": "Standard deviation.",
      "seeAlso": "http://en.wikipedia.org/wiki/Standard_deviation",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:Median",
      "@type": "rdfs:Class",
      "label": "Median",
      "comment": "Median.",
      "seeAlso": "http://en.wikipedia.org/wiki/Median",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:Min",
      "@type": "rdfs:Class",
      "label": "Min",
      "comment": "Min.",
      "seeAlso": "http://en.wikipedia.org/wiki/Min",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:Max",
      "@type": "rdfs:Class",
      "label": "Max",
      "comment": "Max.",
      "seeAlso": "http://en.wikipedia.org/wiki/Max",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:Quantile",
      "@type": "rdfs:Class",
      "label": "Quantile",
      "comment": "Quantile.",
      "seeAlso": "http://en.wikipedia.org/wiki/Quantile",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },
     {
      "@id": "stats:percentile",
      "@type": "rdf:Property",
      "label": "Percentile",
      "comment": "Percentile.",
      "seeAlso": "http://en.wikipedia.org/wiki/Percentile",
      "range": "xsd:float",
      "domain": "stats:Quantile",
      "status": "testing"
    },

    {
      "@id": "stats:MeanDifference",
      "@type": "rdfs:Class",
      "label": "Mean difference",
      "comment": "Mean difference.",
      "seeAlso": "http://en.wikipedia.org/wiki/Mean_difference",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:Proportion",
      "@type": "rdfs:Class",
      "label": "Proportion",
      "comment": "A part considered in relation to the whole.",
      "seeAlso": "http://en.wikipedia.org/wiki/Proportionality_(mathematics)",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:Correlation",
      "@type": "rdfs:Class",
      "label": "Correlation coefficient",
      "comment": "Correlation refers to any of a broad class of statistical relationships involving dependence.",
      "seeAlso": "http://en.wikipedia.org/wiki/Correlation",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:Statistic",
      "@type": "rdfs:Class",
      "label": "Statistic",
      "comment": "Statistic.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistic",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:empiricalData",
      "@type": "rdf:Property",
      "label": "Empirical data",
      "comment": "Empirical data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Data",
      "range": "ctnr:EmpiricalData",
      "domain": "stats:Statistic",
      "status": "testing"
    },
    {
      "@id": "stats:confidenceInterval",
      "@type": "rdf:Property",
      "label": "Confidence interval",
      "comment": "Confidence interval.",
      "seeAlso": "http://en.wikipedia.org/wiki/Confidence_interval",
      "range": ["stats:Quantile","stats:Statistic"],
      "domain": "stats:Statistic",
      "status": "testing"
    },
    {
      "@id": "stats:variable",
      "@type": "rdf:Property",
      "label": "Variable",
      "comment": "Variables that were used to compute this statistic.",
      "seeAlso": "http://en.wikipedia.org/wiki/Data",
      "range": "stats:Variable",
      "domain": ["stats:Statistic","stats:StatisticalModel"],
      "status": "testing"
    },
    {
      "@id": "stats:statisticalTest",
      "@type": "rdf:Property",
      "label": "Statistical test",
      "comment": "Statistical hypothesis test. A result is called statistically significant if it has been predicted as unlikely to have occurred by chance alone.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_test",
      "range": "stats:StatisticalTest",
      "domain": "stats:Statistic",
      "status": "testing"
    },
    {
      "@id": "stats:standardError",
      "@type": "rdf:Property",
      "label": "Standard error",
      "comment": "Standard deviation of the sampling distribution of a statistic.",
      "seeAlso": "http://en.wikipedia.org/wiki/Standard_error",
      "range": "xsd:float",
      "domain": "stats:Statistic",
      "status": "testing"
    },

    {
      "@id": "stats:MultipleComparison",
      "@type": "rdfs:Class",
      "label": "Multiple comparisons",
      "comment": "Formalization of relationships between variables in the form of mathematical equations.",
      "seeAlso": "http://en.wikipedia.org/wiki/Multiple_comparisons_problem",
      "subClassOf": [
        "schema:Intangible"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:comparison",
      "@type": "rdf:Property",
      "label": "Comparison",
      "comment": "Comparison.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_inference",
      "range": "stats:Statistic",
      "domain": "stats:MultipleComparison",
      "status": "testing"
    },


    {
      "@id": "stats:StatisticalModel",
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
      "@id": "stats:modelFit",
      "@type": "rdf:Property",
      "label": "Model fit",
      "comment": "Fit of model.",
      "seeAlso": "http://en.wikipedia.org/wiki/Calibration_(statistics)",
      "range": "stats:ModelFit",
      "domain": "stats:StatisticalModel",
      "status": "testing"
    },
    {
      "@id": "stats:modelParameter",
      "@type": "rdf:Property",
      "label": "Model parameter",
      "comment": "Model parameter.",
      "seeAlso": "http://en.wikipedia.org/wiki/Model_parameter",
      "range": "stats:Parameter",
      "domain": "stats:StatisticalModel",
      "status": "testing"
    },
    {
      "@id": "stats:modelNotation",
      "@type": "rdf:Property",
      "label": "Model notation",
      "comment": "Model notation.",
      "seeAlso": "http://en.wikipedia.org/wiki/Model_parameter",
      "range": "schema:QuantitativeValue",
      "domain": "stats:StatisticalModel",
      "status": "testing"
    },

    {
      "@id": "stats:ModelFit",
      "@type": "rdfs:Class",
      "label": "Model Fit",
      "comment": "Fit of the model.",
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
      "domain": "stats:ModelFit",
      "status": "testing"
    },
    {
      "@id": "stats:adjr2",
      "@type": "rdf:Property",
      "label": "Adjusted R-squared",
      "comment": "The adjusted R2 is an attempt to take account of the phenomenon of the R2 automatically and spuriously increasing when extra explanatory variables are added to the model.",
      "seeAlso": "http://en.wikipedia.org/wiki/R_squared#Adjusted_R2",
      "range": "xsd:float",
      "domain": "stats:ModelFit",
      "status": "testing"
    },
    {
      "@id": "stats:nData",
      "@type": "rdf:Property",
      "label": "Number of data points",
      "comment": "Number of data points.",
      "seeAlso": "http://en.wikipedia.org/wiki/Data_point",
      "range": "xsd:integer",
      "domain": "stats:ModelFit",
      "status": "testing"
    },
    {
      "@id": "stats:nParameters",
      "@type": "rdf:Property",
      "label": "Number of parameters",
      "comment": "Number of parameters.",
      "seeAlso": "http://en.wikipedia.org/wiki/Parameter",
      "range": "xsd:integer",
      "domain": "stats:ModelFit",
      "status": "testing"
    },
    {
      "@id": "stats:fitResidual",
      "@type": "rdf:Property",
      "label": "Residual",
      "comment": "Residual.",
      "seeAlso": "http://en.wikipedia.org/wiki/Residual",
      "range": "stats:Statistic",
      "domain": "stats:ModelFit",
      "status": "testing"
    },


    {
      "@id": "stats:FitnessOptimization",
      "@type": "rdfs:Class",
      "label": "Optimal Fit",
      "comment": "Model fit obtained by maximizing a fitness criteria.",
      "seeAlso": "http://en.wikipedia.org/wiki/Maximum_likelihood",
      "subClassOf": [
        "stats:ModelFit"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:fTest",
      "@type": "rdf:Property",
      "label": "F test",
      "comment": "Overall F test: does any predictor of the model significantly explain the data?",
      "seeAlso": "http://en.wikipedia.org/wiki/F-test",
      "range": "stats:Ftest",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:aic",
      "@type": "rdf:Property",
      "label": "Akaike Information Criterion",
      "comment": "Measure of the relative quality of a statistical model, for a given set of data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Akaike_information_criterion",
      "range": "xsd:float",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:aicc",
      "@type": "rdf:Property",
      "label": "Corrected Akaike Information Criterion",
      "comment": "Measure of the relative quality of a statistical model, for a given set of data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Akaike_information_criterion",
      "range": "xsd:float",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:bic",
      "@type": "rdf:Property",
      "label": "Bayesian Information Criterion",
      "comment": "Measure of the relative quality of a statistical model, for a given set of data.",
      "seeAlso": "http://en.wikipedia.org/wiki/Bayesian_information_criterion",
      "range": "xsd:float",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:deviance",
      "@type": "rdf:Property",
      "label": "Deviance",
      "comment": "Generalization of the idea of using the sum of squared residuals in ordinary least squares to cases where model-fitting is achieved by maximum likelihood.",
      "seeAlso": "http://en.wikipedia.org/wiki/Deviance_(statistics)",
      "range": "xsd:float",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:fitnessCriterion",
      "@type": "rdf:Property",
      "label": "fit Criterion",
      "comment": "Fitness criterion that has been optimized.",
      "seeAlso": "http://en.wikipedia.org/wiki/Likelihood_function",
      "range": "xsd:string",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:optimalParameter",
      "@type": "rdf:Property",
      "label": "optimal Parameter",
      "comment": "optimal Parameter.",
      "seeAlso": "http://en.wikipedia.org/wiki/Maximum_likelihood",
      "range": "stats:Parameter",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:optimalCriterionValue",
      "@type": "rdf:Property",
      "label": "Optimal criterion value.",
      "comment": "Optimal criterion value.",
      "seeAlso": "http://en.wikipedia.org/wiki/Maximum_likelihood",
      "range": "xsd:float",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:optimalCriterionValue",
      "@type": "rdf:Property",
      "label": "Optimal criterion value.",
      "comment": "Optimal criterion value.",
      "seeAlso": "http://en.wikipedia.org/wiki/Maximum_likelihood",
      "range": "xsd:float",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:optimizationTrajectory",
      "@type": "rdf:Property",
      "label": "OptimizationTrajectory",
      "comment": "Optimization Trajectory.",
      "seeAlso": "http://en.wikipedia.org/wiki/Maximum_likelihood",
      "range": "container:SimulatedDataset",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:anovaFactor",
      "@type": "rdf:Property",
      "label": "Analysis of variance factor",
      "comment": "Analysis of variance factor.",
      "seeAlso": "http://en.wikipedia.org/wiki/Analysis_of_variance",
      "range": "stats:AnovaFactor",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },
    {
      "@id": "stats:anovaResidual",
      "@type": "rdf:Property",
      "label": "Analysis of variance residual",
      "comment": "Analysis of variance residual.",
      "seeAlso": "http://en.wikipedia.org/wiki/Analysis_of_variance",
      "range": "stats:AnovaResidual",
      "domain": "stats:FitnessOptimization",
      "status": "testing"
    },

    {
      "@id": "stats:MCMC",
      "@type": "rdfs:Class",
      "label": "Monte Carlo Markov Chain",
      "comment": "Calibration of the model by Monte Carlo Markov Chain.",
      "seeAlso": "http://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo",
      "subClassOf": [
        "stats:ModelFit"
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
      "@id": "stats:rhat",
      "@type": "rdf:Property",
      "label": "R hat",
      "comment": "Potential scale reduction factor on split chains (at convergence, Rhat=1).",
      "seeAlso": "http://cran.r-project.org/web/packages/coda/coda.pdf",
      "range": "xsd:float",
      "domain": "stats:MCMC",
      "status": "testing"
    },
    {
      "@id": "stats:effectiveSampleSize",
      "@type": "rdf:Property",
      "label": "Effective Sample Size",
      "comment": "Measure of the relative quality of a statistical model, for a given set of data.",
      "seeAlso": "http://cran.r-project.org/web/packages/coda/coda.pdf",
      "range": "stats:Statistic",
      "domain": "stats:MCMC",
      "status": "testing"
    },
    {
      "@id": "stats:mcmcTrace",
      "@type": "rdf:Property",
      "label": "MCMC trace",
      "comment": "MCMC Trace.",
      "seeAlso": "http://cran.r-project.org/web/packages/coda/coda.pdf",
      "range": "container:SimulatedDataset",
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
        "stats:StatisticalModel"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:AnovaRow",
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
      "domain": "stats:AnovaRow",
      "status": "testing"
    },
    {
      "@id": "stats:sumOfSquares",
      "@type": "rdf:Property",
      "label": "Sum of Squares",
      "comment": "Sum of squares.",
      "seeAlso": "http://en.wikipedia.org/wiki/Partition_of_sums_of_squares",
      "range": "xsd:float",
      "domain": "stats:AnovaRow",
      "status": "testing"
    },
    {
      "@id": "stats:meanOfSquares",
      "@type": "rdf:Property",
      "label": "Mean of Squares",
      "comment": "Mean of squares.",
      "seeAlso": "http://en.wikipedia.org/wiki/Partition_of_sums_of_squares",
      "range": "xsd:float",
      "domain": "stats:AnovaRow",
      "status": "testing"
    },
    {
      "@id": "stats:loglik",
      "@type": "rdf:Property",
      "label": "Log-likelihood",
      "comment": "Log-likelihood.",
      "seeAlso": "http://en.wikipedia.org/wiki/Likelihood_function",
      "range": "xsd:float",
      "domain": "stats:AnovaRow",
      "status": "testing"
    },

    {
      "@id": "stats:sumOfSquaresType",
      "@type": "rdf:Property",
      "label": "Sum of Squares Type",
      "comment": "sum of Squares Type.",
      "seeAlso": "http://mcfromnz.wordpress.com/2011/03/02/anova-type-iiiiii-ss-explained/",
      "range": "xsd:float",
      "domain": "stats:AnovaFactor",
      "status": "testing"
    },
    {
      "@id": "stats:factorIndex",
      "@type": "rdf:Property",
      "label": "Factor index",
      "comment": "Factor index.",
      "seeAlso": "http://mcfromnz.wordpress.com/2011/03/02/anova-type-iiiiii-ss-explained/",
      "range": "xsd:integer",
      "domain": "stats:AnovaFactor",
      "status": "testing"
    },

    {
      "@id": "stats:AnovaFactor",
      "@type": "rdfs:Class",
      "label": "ANOVA factor",
      "comment":"Process inputs an investigator manipulates to cause a change in the output.",
      "seeAlso": "http://en.wikipedia.org/wiki/Factor_analysis",
      "subClassOf": [
        "stats:AnovaRow"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:AnovaResidual",
      "@type": "rdfs:Class",
      "label": "ANOVA residual",
      "comment": "Difference between the observed value and the estimated function value.",
      "seeAlso": "http://en.wikipedia.org/wiki/Errors_and_residuals_in_statistics",
      "subClassOf": [
        "stats:AnovaRow"
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
      "@id": "stats:family",
      "@type": "rdf:Property",
      "label": "Family",
      "comment":"Family of a generalized linear model.",
      "seeAlso": "http://en.wikipedia.org/wiki/Generalized_linear_model",
      "range": "xsd:string",
      "domain": "stats:GeneralizedLinearModel",
      "status": "testing"
    },
    {
      "@id": "stats:link",
      "@type": "rdf:Property",
      "label": "Link",
      "comment":"Link of a generalized linear model.",
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
        "stats:StatisticalModel"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:StateSpaceModel",
      "@type": "rdfs:Class",
      "label": "State Space Model",
      "comment":"State Space Model",
      "seeAlso": "http://www.scholarpedia.org/article/State_space_model",
      "subClassOf": [
        "stats:StatisticalModel"
      ],
      "status": "testing"
    },

    {
      "@id": "stats:ModelSelection",
      "@type": "rdfs:Class",
      "label": "Model Selection",
      "comment": "Model Selection.",
      "seeAlso": "http://en.wikipedia.org/wiki/Model_selection",
      "subClassOf": [
        "schema:Intangible"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:modelSet",
      "@type": "rdf:Property",
      "label": "Model set",
      "comment":"Model set.",
      "seeAlso": "http://en.wikipedia.org/wiki/Statistical_model",
      "range": "xsd:string",
      "domain": "stats:ModelSelection",
      "status": "testing"
    },
    {
      "@id": "stats:selectedModel",
      "@type": "rdf:Property",
      "label": "Selected model",
      "comment":"Selected model.",
      "seeAlso": "http://en.wikipedia.org/wiki/Model_selection",
      "range": "xsd:string",
      "domain": "stats:ModelSelection",
      "status": "testing"
    },
    {
      "@id": "stats:selectionCriterion",
      "@type": "rdf:Property",
      "label": "Selection criterion",
      "comment":"Selection criterion.",
      "seeAlso": "http://en.wikipedia.org/wiki/Model_selection",
      "range": "stats:Statistic",
      "domain": "stats:ModelSelection",
      "status": "testing"
    },



    {
      "@id": "stats:Parameter",
      "@type": "rdfs:Class",
      "label": "Parameter",
      "comment":"Parameter",
      "seeAlso": "http://en.wikipedia.org/wiki/Parameter",
      "subClassOf": [
        "schema:QuantitativeValue"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:prior",
      "@type": "rdf:Property",
      "label": "Prior distribution",
      "comment":"Prior distribution.",
      "seeAlso": "http://en.wikipedia.org/wiki/Prior_probability",
      "range": "xsd:string",
      "domain": "stats:Parameter",
      "status": "testing"
    },
   {
      "@id": "stats:estimate",
      "@type": "rdf:Property",
      "label": "Estimate",
      "comment":"Parameter estimate.",
      "seeAlso": "http://en.wikipedia.org/wiki/Estimation_statistics",
      "range": "stats:Statistic",
      "domain": "stats:Parameter",
      "status": "testing"
    },
    {
      "@id": "stats:formula",
      "@type": "rdf:Property",
      "label": "Formula",
      "comment":"Formula.",
      "seeAlso": "http://en.wikipedia.org/wiki/Formula",
      "range": "xsd:string",
      "domain": ["stats:Parameter", "stats:StatisticalModel"],
      "status": "testing"
    },
    {
      "@id": "stats:contrast",
      "@type": "rdf:Property",
      "label": "Contrast",
      "comment":"Contrast",
      "seeAlso": "http://en.wikipedia.org/wiki/Contrast_(statistics)",
      "range": "xsd:integer",
      "domain": ["stats:Parameter","stats:Variable"],
      "status": "testing"
    },
    {
      "@id": "stats:reference",
      "@type": "rdf:Property",
      "label": "reference",
      "comment":"Is this row the reference?",
      "seeAlso": "http://en.wikipedia.org/wiki/Contrast_(statistics)",
      "range": "xsd:boolean",
      "domain": "stats:Parameter",
      "status": "testing"
    },


    {
      "@id": "stats:Variable",
      "@type": "rdfs:Class",
      "label": "Variable",
      "comment":"Variable",
      "seeAlso": "http://en.wikipedia.org/wiki/Variable",
      "subClassOf": [
        "schema:QuantitativeValue","stats:StatisticalModel"
      ],
      "status": "testing"
    },
    {
      "@id": "stats:isCategorical",
      "@type": "rdf:Property",
      "label": "Is categorical",
      "comment":"Is this variable categorical?",
      "seeAlso": "http://en.wikipedia.org/wiki/Categorical_variable",
      "range": "xsd:boolean",
      "domain": "stats:Variable",
      "status": "testing"
    },
    {
      "@id": "stats:level",
      "@type": "rdf:Property",
      "label": "Level",
      "comment":"Levels of a categorical variable",
      "seeAlso": "http://en.wikipedia.org/wiki/Categorical_variable",
      "range": "xsd:boolean",
      "domain": "stats:Variable",
      "status": "testing"
    }


  ],
  "@type": "owl:Ontology",
  "comment": "A lightweight vocabulary for standard statistical analysis",
  "label": "The Standard Analytics Core Vocabulary"
};
