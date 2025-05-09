import React from 'react';
import { graphql, Link } from 'gatsby';
// import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { IconBookmark } from '@components/icons';

const StyledMainContainer = styled.main`
  & > header {
    margin-bottom: 100px;
    text-align: left;
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
  }
`;
const StyledGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 50px;
  position: relative;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
const StyledResource = styled.li`
  transition: var(--transition);
  cursor: default;

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .resource__inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .resource__inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    background-color: var(--light-bg-color);

    header,
    a {
      width: 100%;
    }
  }

  .resource__icon {
    ${({ theme }) => theme.mixins.flexBetween};
    color: var(--primary-color);
    margin-bottom: 30px;
    margin-left: -5px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  .resource__title {
    margin: 0 0 10px;
    color: var(--lightest-text-color);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .resource__desc {
    color: var(--light-text-color);
    font-size: 17px;
  }

  .resource__date {
    color: var(--light-text-color);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }

  ul.resource__tags {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      color: var(--primary-color);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const ResourcePage = ({ location, data }) => {
  const resources = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet title="Resources" />

      <StyledMainContainer>
        <header>
          <h1 className="big-heading">Resources</h1>
          <p className="subtitle">A collection of helpful files from past courses</p>
        </header>

        <StyledGrid>
          {resources.length > 0 &&
            resources.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, slug, date } = frontmatter;

              return (
                <StyledResource key={i}>
                  <div className="resource__inner">
                    <header>
                      <div className="resource__icon">
                        <IconBookmark />
                      </div>
                      <h5 className="resource__title">
                        <Link to={slug}>{title}</Link>
                      </h5>
                      <p className="resource__desc">{description}</p>
                    </header>

                    <footer>
                      <span className="resource__date">{date}</span>
                      {/* <ul className="resource__tags">
                        {tags.map((tag, i) => (
                          <li key={i}>
                            <Link to={`/pensieve/tags/${kebabCase(tag)}/`} className="inline-link">
                              #{tag}
                            </Link>
                          </li>
                        ))}
                      </ul> */}
                    </footer>
                  </div>
                </StyledResource>
              );
            })}
        </StyledGrid>
      </StyledMainContainer>
    </Layout>
  );
};

ResourcePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ResourcePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/resources/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
          }
          html
        }
      }
    }
  }
`;
