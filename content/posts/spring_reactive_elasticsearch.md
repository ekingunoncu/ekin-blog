---
description: "Hey there! I and my team use Elasticsearch in our project but we implemented it a long time ago. I was wondering what’s new with Spring and Elasticsearch."
slug: "spring_reactive_elasticsearch"
title: "Spring Reactive Elasticsearch"
tags:
  - "spring"
  - "elasticsearch"
categories:
  - "spring"
ID: "60df9ff9-3d90-4c91-88e9-5c05ee658f89"
author:
  ID: "94011b58-6146-44b1-89f7-6e10033eeb11"
  displayName: "Ekin Gün Öncü"
  avatarImage: ""
  role: "Software Engineer"
  createdAt: 1671537670766
coverImage: "public/1671537413864_background.jpeg"
createdAt: 1671537420515

---
# Spring Reactive Elasticsearch

Created: December 20, 2022 2:52 PM
URL: https://medium.com/testinium/spring-reactive-elasticsearch-21a548194501

![Spring Reactive Elasticsearch Coffee](https://s3.eu-central-1.amazonaws.com/1ek.in.images/background.jpeg)

Hey there! I and my team use Elasticsearch in our project but we implemented it a long time ago. I was wondering what’s new with Spring and Elasticsearch.

We are used to using JPA(Java Persistence API), it is so nice to let the JPA write queries for us. Can we do that for non-relational databases? Yes, we can! Additionally, we can use reactive repositories that return data to us as flux!

This below is a JSON aspect of the stock data for one day. The stock market data changes incredibly fast you may want to store it on a trusted solution :)

```
{
 "Date": "24.02.2010 18:10:00",
 "Open": 5.02,
 "High": 5.21,
 "Low": 5.02,
 "Close": 5.02,
 "Volumes": 8869442
}
```

But first, you need an Elasticsearch instance to connect. Let me help with that! If you have docker on your local machine once you execute the command below you will have an Elasticsearch instance.

```
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.9.1
```

There is not much to talk about, I will give the Github repository to you. Check the code out!

## [ekingunoncu/ElacticsearchReactiveRepository](https://github.com/ekingunoncu/ElacticsearchReactiveRepository)

### [Contribute to ekingunoncu/ElacticsearchReactiveRepository development by creating an account on GitHub.](https://github.com/ekingunoncu/ElacticsearchReactiveRepository)

[github.com](https://github.com/ekingunoncu/ElacticsearchReactiveRepository)

I am putting some important parts of my code just in case if you want to give a quick look at how is the code looks like. Check below.

You can look at the old approach from here [https://www.baeldung.com/elasticsearch-java](https://www.baeldung.com/elasticsearch-java), what we did is we made java create these Elasticsearch queries for us simply and swiftly.

Thanks for reading this far :)