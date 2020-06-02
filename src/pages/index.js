import BlogsList from '../components/HomePage/BlogsList';
import Hero from '../components/HomePage/Hero';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import React from 'react';
import SEO from '../components/seo';
import TabNavigation from '../components/TabNavigation';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
	const blogs = data.allMarkdownRemark.nodes;

	return (
		<Layout>
			<SEO title="jsprogrammers" />
			<NavigationBar />
			<Hero />
			<TabNavigation />
			<BlogsList blogs={blogs} />
		</Layout>
	);
};

export default IndexPage;

export const blogsQuery = graphql`
	query blogsQuery {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { regex: "/blogs/.*[.]md$/" } }
		) {
			totalCount
			nodes {
				id
				frontmatter {
					slug
					title
					description
					date(formatString: "DD/MM/YYYY")
					tags
					cover_image {
						publicURL
						childImageSharp {
							fluid(maxWidth: 1000) {
								srcSet
								tracedSVG
							}
						}
					}
				}
				wordCount {
					words
				}
			}
		}
	}
`;
