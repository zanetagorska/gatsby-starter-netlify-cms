import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const MeetingTemplate = ({ content, contentComponent, title }) => {
	const PageContent = contentComponent || Content;

	return (
		<section className="section section--gradient">
			<div className="container">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<div className="section">
							<h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
							<PageContent content={content} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const MeetingPage = ({ data }) => {
	const { markdownRemark: meeting } = data;
	return (
		<Layout>
			<MeetingTemplate content={meeting.html} contentComponent={HTMLContent} title={meeting.frontmatter.title} />
		</Layout>
	);
};

MeetingPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default MeetingPage;

export const MeetingPageQuery = graphql`
	query MeetingPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
