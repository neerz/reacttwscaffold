import React from "react";

const features = [
  {
    title: "Exercise Metrics",
    description:
      "Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.",
    imgUrl: "/assets/health.svg"
  },
  {
    title: "Reporting",
    description:
      "Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.",
    imgUrl: "/assets/report.svg"
  },
  {
    title: "Syncing",
    description:
      "Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/LInux or Windows OS.",
    imgUrl: "/assets/sync.svg"
  }
];

function Feature({ feature }) {
  return (
    <article className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">
          {feature.title}
        </h4>
        <p className="text-gray-600 mb-8">{feature.description}</p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={`${feature.imgUrl}?raw=1`} alt="Monitoring" />
      </div>
    </article>
  );
}

function Features() {
  const featureList = features.map(feature => <Feature feature={feature} />);

  return (
    <section className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      {featureList}
    </section>
  );
}

export default Features;
