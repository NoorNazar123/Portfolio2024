import React from "react";
import { Helmet } from "react-helmet";

const siteUrl = "https://noor-e-nazars-portfolio-vfb4.vercel.app";

const profileImage = `${siteUrl}/profile.png`;

const pageData = {
  Home: {
    title: "M Noor e Nazar | Frontend & Full-Stack Developer",
    description:
      "M Noor e Nazar is a frontend and full-stack developer specializing in React, Next.js, JavaScript, Python, FastAPI, PostgreSQL, and AI-powered web applications.",
  },

  About: {
    title: "About M Noor e Nazar | Frontend & Full-Stack Developer",
    description:
      "Learn about M Noor e Nazar, a frontend and full-stack developer working with React, Next.js, Python, FastAPI, PostgreSQL, and AI-powered products.",
  },

  Projects: {
    title: "Projects | M Noor e Nazar",
    description:
      "Explore projects by M Noor e Nazar, including professional frontend work, full-stack applications, API integrations, and AI-powered web projects.",
  },

  Contact: {
    title: "Contact M Noor e Nazar | Developer",
    description:
      "Get in touch with M Noor e Nazar for frontend development, full-stack projects, Python and FastAPI work, and AI-powered product development.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "M Noor e Nazar",
  url: siteUrl,
  jobTitle: "Frontend & Full-Stack Developer",
  image: profileImage,

  sameAs: [
    "https://www.linkedin.com/in/noor-nazar-dev/",
    "https://github.com/NoorNazar123",
  ],

  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Node.js",
    "REST APIs",
    "Artificial Intelligence",
  ],
};

const DynamicTitle = ({ title }) => {
  const currentPage = pageData[title] || pageData.Home;

  const canonicalUrl =
    title === "Home"
      ? siteUrl
      : `${siteUrl}/${title.toLowerCase()}`;

  return (
    <Helmet>
      <meta charSet="utf-8" />

      {/* Basic SEO */}
      <title>{currentPage.title}</title>

      <meta
        name="description"
        content={currentPage.description}
      />

      <meta
        name="author"
        content="M Noor e Nazar"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={currentPage.title}
      />

      <meta
        property="og:description"
        content={currentPage.description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:site_name"
        content="Noor's Dev Excellence"
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      <meta
        property="og:image"
        content={profileImage}
      />

      <meta
        property="og:image:alt"
        content="M Noor e Nazar - Frontend & Full-Stack Developer"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={currentPage.title}
      />

      <meta
        name="twitter:description"
        content={currentPage.description}
      />

      <meta
        name="twitter:image"
        content={profileImage}
      />

      <meta
        name="twitter:image:alt"
        content="M Noor e Nazar - Frontend & Full-Stack Developer"
      />

      {/* Person Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
};

export default DynamicTitle;
