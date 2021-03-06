import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => (
	<BlogPostTemplate
		entry={entry}
		content={widgetFor('body')}
		description={entry.getIn([ 'data', 'description' ])}
		tags={entry.getIn([ 'data', 'tags' ])}
		title={entry.getIn([ 'data', 'title' ])}
		main_image={entry.getIn([ 'data', 'main_image' ])}
	/>
);

BlogPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default BlogPostPreview;
