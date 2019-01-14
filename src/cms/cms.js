import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerEditorComponent({
	id: 'youtube',
	label: 'Youtube',
	fields: [ { name: 'id', label: 'Youtube Video ID', widget: 'string' } ],
	pattern: /^youtube (\S+)$/,
	// Function to extract data elements from the regexp match
	fromBlock: function(match) {
		return {
			id: match[1]
		};
	},
	// Function to create a text block from an instance of this component
	toBlock: function(obj) {
		return `<iframe width="420" height="315" src="https://www.youtube.com/embed/${obj.id}"></iframe>`;
	},
	// Preview output for this component. Can either be a string or a React component
	toPreview: function(obj) {
		return '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>';
	}
});
