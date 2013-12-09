
iris <- read.csv("iris.csv")

model <- lm(Petal.Length~Petal.Width,data=iris)
summary(model)
