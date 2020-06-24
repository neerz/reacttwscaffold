import React from "react";

const sections = [
  {
    label: "Links",
    links: [
      { label: "FAQ", url: "#" },
      { label: "Help", url: "#" },
      { label: "Support", url: "#" }
    ]
  },
  {
    label: "Legal",
    links: [{ label: "Terms", url: "#" }, { label: "Privacy", url: "#" }]
  },
  {
    label: "Social",
    links: [
      { label: "Facebook", url: "#" },
      { label: "LinkedIn", url: "#" },
      { label: "Twitter", url: "#" }
    ]
  },
  {
    label: "Company",
    links: [
      { label: "Official Blog", url: "#" },
      { label: "About Us", url: "#" },
      { label: "Contact", url: "#" }
    ]
  }
];

function Link({ link }) {
  return (
    <li className="mt-2">
      <a
        href={link.url}
        className="hover:underline text-gray-600 hover:text-orange-500"
      >
        {link.label}
      </a>
    </li>
  );
}

function Section({ section }) {
  const linkList = section.links.map(link => <Link link={link} />);

  return (
    <article className="w-full md:w-1/4 text-center md:text-left ">
      <h5 className="uppercase mb-6 font-bold">{section.label}</h5>
      <ul className="mb-4">{linkList}</ul>
    </article>
  );
}

function Footer() {
  const sectionList = sections.map(section => <Section section={section} />);
  return (
    <footer className="bg-gray-100">
      <section className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">{sectionList}</div>
      </section>
    </footer>
  );
}

export default Footer;
