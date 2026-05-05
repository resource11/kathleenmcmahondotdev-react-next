import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const blog = await getCollection('blog');
	return rss({
		title: 'Kathleen McMahon | Engineer - Designer - Speaker',
		description:
			'I speak about things, using metaphors, and gifs. Lots, and lots of gifs.',
		site: context.site,
		stylesheet: '/rss/styles.xsl',
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			customData: `<language>en-us</language>`,
			link: `/posts/${post.id}/`,
		})),
	});
}
