import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

export interface PostSlugProps extends ParsedUrlQuery {
    title: string;
    year: string;
}

export interface PostProps {
    title: string;
    year: string;
    content: string;
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
    params,
}: {
    params: {
        slug: string[];
    };
}) => {
    var [year, title] = params.slug;
    const folder = './data/blog-posts';
    const file = `${folder}/${year}/${title}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);

    return {
        props: {
            title: title,
            year: year,
            content: matterResult.content,
        },
    };
};

export const getStaticPaths: GetStaticPaths<PostSlugProps> = async () => {
    const folder = './data/blog-posts';
    const years = fs.readdirSync(folder);

    var paths = years
        .map((year) => {
            const files = fs.readdirSync(folder + '/' + year);

            return files.map(
                (title) => `/blog/${year}/${title.replace('.md', '')}`,
            );
        })
        .flat();

    return {
        paths,
        fallback: false,
    };
};

const BlogPost = ({
    content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Markdown>{content}</Markdown>
        </div>
    );
};

export default BlogPost;
