import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Adding Styles
import "./../scss/app.scss";
import LayoutWrapper from "../components/layoutWrapper";
import HeroSection from "../components/home/HeroSection";
import Pagination from "../components/pagination";
import PostList from "../components/PostList";

const IndexPage = ({ data }) => {
  return (
    <LayoutWrapper>
      <SEO
        title="Home"
        keywords={[
          `gatsby`,
          `application`,
          `react`,
          `portfolio`,
          `personal website`,
          `blog`
        ]}
      />
      <div className="main__content">
        {/* Hero Section */}
        <HeroSection />

        {/* Post List Section */}
        <PostList posts={data.allMarkdownRemark} />

        {/* Pagination */}
        <Pagination />
      </div>
    </LayoutWrapper>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          wordCount {
            words
          }
          excerpt(pruneLength: 150)
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;
