import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Card from './Card';

const MeetingPage = (props) => {
	console.log(props);
	return (
		<Layout>
			<section className="section">
				<div className="container">
					<div className="content">
						<h1 className="has-text-weight-bold is-size-2">Latest meetings</h1>
						{/* <div>{meetings.map((meeting) => <Card key={meeting.id} />)}</div> */}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default MeetingPage;

export const pageQuery = graphql`
	query MeetupQuery {
		allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "meetings" } } }) {
			edges {
				node {
					id
					frontmatter {
						title
					}
				}
			}
		}
	}
`;
