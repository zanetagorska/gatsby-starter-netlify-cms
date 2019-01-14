import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const MeetingTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;

	return (
		<section className="section section--gradient">
			<div className="container">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<div className="section">
							<h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
							<PageContent className="content" content={content} />
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
			<h2>{meeting.frontmatter.title}</h2>
			<div dangerouslySetInnerHTML={{ __html: meeting.html }} />
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
