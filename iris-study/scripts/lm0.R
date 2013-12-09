
iris <- read.csv("iris.csv")

model <- lm(Petal.Length~Sepal.Width,data=iris)
summary(model)
