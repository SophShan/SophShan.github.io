import React from 'react';
import { graphql, Link } from 'gatsby';
//import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-bg-color);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.date {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-text-color);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }
    }
  }
`;

const ResourceTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <main>
        <header>
          <span className="breadcrumb">
            <span className="arrow">&larr;</span>
            <Link to="/resources">To Resources</Link>
          </span>
          <h1 className="medium-heading">{title}</h1>
        </header>
        <StyledTableContainer dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  );

  // return (
  //   <Layout location={location}>
  //     <Helmet title={title} />

  //     <StyledPostContainer>
  //       <span className="breadcrumb">
  //         <span className="arrow">&larr;</span>
  //         <Link to="/pensieve">All memories</Link>
  //       </span>

  //       <StyledPostHeader>
  //         <h1 className="medium-heading">{title}</h1>
  //         <p className="subtitle">
  //           <time>
  //             {new Date(date).toLocaleDateString('en-US', {
  //               year: 'numeric',
  //               month: 'long',
  //               day: 'numeric',
  //             })}
  //           </time>
  //           <span>&nbsp;&mdash;&nbsp;</span>
  //           {tags &&
  //             tags.length > 0 &&
  //             tags.map((tag, i) => (
  //               <Link key={i} to={`/pensieve/tags/${kebabCase(tag)}/`} className="tag">
  //                 #{tag}
  //               </Link>
  //             ))}
  //         </p>
  //       </StyledPostHeader>

  //       <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
  //     </StyledPostContainer>
  //   </Layout>
  // );
};

export default ResourceTemplate;

ResourceTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;

// const StyledPostContainer = styled.main`
//   max-width: 1000px;
// `;
// const StyledPostHeader = styled.header`
//   margin-bottom: 50px;
//   .tag {
//     margin-right: 10px;
//   }
// `;
// const StyledPostContent = styled.div`
//   margin-bottom: 100px;
//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     margin: 2em 0 1em;
//   }

//   p {
//     margin: 1em 0;
//     line-height: 1.5;
//     color: var(--light-text-color);
//   }

//   a {
//     ${({ theme }) => theme.mixins.inlineLink};
//   }

//   code {
//     background-color: var(--lightest-bg-color);
//     color: var(--lightest-text-color);
//     border-radius: var(--border-radius);
//     font-size: var(--fz-sm);
//     padding: 0.2em 0.4em;
//   }

//   pre code {
//     background-color: transparent;
//     padding: 0;
//   }
// `;
