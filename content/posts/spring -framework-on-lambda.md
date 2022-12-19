---
updatedAt: 1671474490228
createdAt: 1649356548494
ID: "36de95b9-5632-4879-b996-50aff9ce9857"
title: "Spring Framework On Lambda (Without Spring Boot)"
description: "Spring Framework On Lambda (Without Spring Boot)\nIOC on lambda"
categories:
  - "cms"
tags:
  - "lambda"
  - "spring"
slug: "spring -framework-on-lambda"
author:
  updatedAt: 1671474756018
  createdAt: 1649356758106
  ID: "efa1af93-736f-4723-9a25-afb9c4010c5a"
  displayName: "Ekin Gün Öncü"
  avatarImage: "public/1671474736731_ekin.png"
  role: "Software Engineer at Scalefocus, Oracle Certified Java Developer, AWS Certified Developer"
coverImage: "public/1671474486210_lambda_spring.jpg"

---
# Spring Framework On Lambda (Without Spring Boot) | by Ekin Gün Öncü | Nov, 2022 | Medium

Created: December 19, 2022 8:34 PM
URL: https://medium.com/@ekingunoncu/spring-framework-on-lambda-without-spring-boot-70b6726b33c

![Spring Framework On Lambda (Without Spring Boot](https://s3.eu-central-1.amazonaws.com/1ek.in.images/lambda_spring.jpg)

Spring framework and Spring Boot are different things.

Even the repositories are distinct.

## [GitHub - spring-projects/spring-framework: Spring Framework](https://github.com/spring-projects/spring-framework)

### [This is the home of the Spring Framework: the foundation for all Spring projects. Collectively the Spring Framework and…](https://github.com/spring-projects/spring-framework)

[github.com](https://github.com/spring-projects/spring-framework)

## [GitHub - spring-projects/spring-boot: Spring Boot](https://github.com/spring-projects/spring-boot)

### [Spring Boot helps you to create Spring-powered, production-grade applications and services with absolute minimum fuss…](https://github.com/spring-projects/spring-boot)

[github.com](https://github.com/spring-projects/spring-boot)

We won’t cover what is what in this article but simply you can read descriptions of these repositories.

If you need Spring Boot on Lambda AWS already has a great starter project making use of the Maven archetypes.

## [Quick start Spring Boot2 · awslabs/aws-serverless-java-container Wiki](https://github.com/awslabs/aws-serverless-java-container/wiki/Quick-start---Spring-Boot2)

### [You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…](https://github.com/awslabs/aws-serverless-java-container/wiki/Quick-start---Spring-Boot2)

[github.com](https://github.com/awslabs/aws-serverless-java-container/wiki/Quick-start---Spring-Boot2)

![Hello World](https://s3.eu-central-1.amazonaws.com/1ek.in.images/ref.gif)

I am not going to bother you with **blah blah blah** just check out the starter I created! I also wrote some comments for your better understanding.

## [GitHub - ekingunoncu/spring-lambda-starter](https://github.com/ekingunoncu/spring-lambda-starter)

### [You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…](https://github.com/ekingunoncu/spring-lambda-starter)

[github.com](https://github.com/ekingunoncu/spring-lambda-starter)

- You will need sam-cli. *[What is sam-cli?](https://aws.amazon.com/tr/serverless/aws-sam/#:~:text=The%20AWS%20Serverless%20Application%20Model,and%20model%20it%20using%20YAML.)*
- You will need aws-cli and configure your IAM ACCESS and SECRET

```
aws configure set aws_access_key_id *o*o*o*o*o*o*o*o*o
aws configure set aws_secret_access_key *o*o*o*o*o*o*o*o*o
aws configure set default.region us-east-1
```

- How to build and deploy

```
MAVEN_OPTS="-DskipTests=true" sam build
sam deploy --stack-name ${STACK_NAME} --s3-bucket ${DEPLOY_BUCKET} --capabilities CAPABILITY_IAM
```

or use shell scripts under the repository but don't forget to change your deploy bucket (an empty bucket to use for the deploy process)

```
sh sam-build.sh
sh sam-deploy.sh
```

And our Lambda Function just hatched 🐣

![Hello World](https://s3.eu-central-1.amazonaws.com/1ek.in.images/hello_world.png)

Thanks for reading.

Please follow me if you like and don’t hesitate to ask questions in the comments!
