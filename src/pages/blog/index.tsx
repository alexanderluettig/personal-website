import Head from 'next/head';
import fs from 'fs';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import matter from 'gray-matter';
import BlogPreview, {
    BlogPostPreviewData,
} from '../../components/blog/blogPreview';
import SearchBar from '../../components/searchbar';
import { useState } from 'react';

interface PostByYears {
    [year: number]: BlogPostPreviewData[];
}

export const getStaticProps: GetStaticProps<{
    years: PostByYears;
}> = async () => {
    const folder = './data/blog-posts';
    let paths = fs.readdirSync(folder);
    paths = paths.filter((path) => fs.existsSync(folder + '/' + path));

    const posts: PostByYears = {};
    paths.forEach((year) => {
        const files = fs.readdirSync(folder + '/' + year);
        var postInYear = files.map((title) => {
            const file = `${folder}/${year}/${title}`;
            const content = fs.readFileSync(file, 'utf8');
            const matterResult = matter(content);

            return {
                title: matterResult.data.title,
                subtitle: matterResult.data.subtitle,
                date: matterResult.data.date,
                description: matterResult.data.description,
                tags: matterResult.data.category,
                year: year,
                slug: title.replace('.md', ''),
            };
        });

        posts[+year] = postInYear;
    });

    return {
        props: {
            years: posts,
        },
    };
};

const Blog = ({ years }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredYears, setFilteredYears] = useState<number[]>([]);

    const addSearchQuery = (query: string) => {
        if (query.includes('year:')) {
            const year = query.split(':')[1];
            setFilteredYears(year.split(',').map((year) => +year));
            setSearchQuery('');
        } else {
            setFilteredYears(Object.keys(years).map((year) => +year));
            setSearchQuery(query);
        }
    };

    const satisfiesSearchQuery = (post: BlogPostPreviewData): boolean => {
        if (searchQuery === '') return true;

        if (!searchQuery.includes(':')) {
            return (
                post.title.includes(searchQuery) ||
                post.description.includes(searchQuery) ||
                post.subtitle.includes(searchQuery) ||
                post.tags.includes(searchQuery) ||
                post.slug.includes(searchQuery) ||
                post.date.includes(searchQuery)
            );
        }

        const query = searchQuery.split(':');
        const type = query[0];
        const value = query[1];

        if (type === 'title') {
            return post.title.includes(value);
        } else if (type === 'description') {
            return post.description.includes(value);
        } else if (type === 'subtitle') {
            return post.subtitle.includes(value);
        } else if (type === 'tags') {
            return post.tags.includes(value);
        } else if (type === 'slug') {
            return post.slug.includes(value);
        } else if (type === 'date') {
            return post.date.includes(value);
        } else {
            return false;
        }
    };

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <div className="overflow-hidden h-full pl-10 pr-10 border-2 rounded border-dark-yellow w-full flex flex-col">
                <div className="m-3 flex flex-col items-center justify-center">
                    <SearchBar
                        callback={addSearchQuery}
                        placeholderText="Enter a search query (<metadata>:<query> or just text, eg. description:project)"
                    />
                    <span className="mt-2">
                        Metadata can be title, subtitle, date, description,
                        tags, year, slug
                    </span>
                </div>
                <div className="overflow-hidden overflow-y-auto h-full ">
                    {Object.keys(years)
                        .filter(
                            (year) =>
                                filteredYears.includes(+year) ||
                                filteredYears.length === 0,
                        )
                        .sort((a, b) => +b - +a)
                        .map((year) => (
                            <div key={year}>
                                <h1 className="text-4xl m-4 border-b-2 text-center">
                                    {year}
                                </h1>
                                <div className="flex flex-row flex-wrap-reverse grow justify-start large:gap-[1%] medium:gap-[3%] pr-10 pl-10">
                                    {years[year]
                                        .filter(satisfiesSearchQuery)
                                        .map((post: BlogPostPreviewData) => (
                                            <BlogPreview
                                                key={post.title}
                                                post={post}
                                            />
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
