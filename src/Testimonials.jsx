import React from "react";

const testimonials = [
  "Monitoring and tracking my health vitals anywhere I go and on any platform I use has never been easier.",
  "As an Athlete, this is the perfect product for me. I wear my Smart Health Monitoring Wristwatch everywhere i go, even in the bathroom since it's waterproof.",
  "I don't regret buying this wearble gadget. One of the best gadgets I own!."
];

function Testmonial({ text }) {
  return (
    <div className="w-full md:w-1/3 px-2 mb-4">
      <div className="bg-white rounded shadow py-2">
        <p className="text-gray-800 text-base px-6 mb-5">{text}</p>
        <p className="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonialList = testimonials.map(text => <Testmonial text={text} />);
  return (
    <section className="bg-gray-100">
      <article className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <div className="flex flex-wrap">{testimonialList}</div>
      </article>
    </section>
  );
}

export default Testimonials;
