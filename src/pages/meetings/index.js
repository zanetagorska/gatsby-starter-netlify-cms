import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Card from './Card';

const MeetingPage = (props) => {
	const meetings = props.data.allMarkdownRemark.edges;
	return (
		<Layout>
			<section className="section">
				<div className="container">
					<div className="content">
						<h1 className="has-text-weight-bold is-size-2">Latest meetings</h1>
						<div>{meetings.map((meeting) => <Card key={meeting.id} />)}</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default MeetingPage;

export const pageQuery = graphql`
	query MeetupQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;
