import fs from 'fs';

const BASE_URL = 'https://luettig.tech';

type BlogPost = {
    year: string;
    postName: string;
};

function generateSiteMap(blogPost: BlogPost[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${BASE_URL}/</loc>
       </url>
       <url>
         <loc>${BASE_URL}/about</loc>
       </url>
       <url>
         <loc>${BASE_URL}/blog</loc>
       </url>
       <url>
         <loc>${BASE_URL}/projects</loc>
       </url>
       <url>
         <loc>${BASE_URL}/contact</loc>
       </url>
       ${blogPost
           .map((post) => {
               return `
         <url>
             <loc>${`${BASE_URL}/blog/${post.year}/${post.postName}`}</loc>
         </url>
       `;
           })
           .join('')}
     </urlset>
   `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // Get all posts from /blog-posts
    var posts: BlogPost[] = [];
    const folder = './data/blog-posts';
    let paths = fs.readdirSync(folder);
    paths = paths.filter((path) => fs.existsSync(folder + '/' + path));
    paths.forEach((year) => {
        const files = fs.readdirSync(folder + '/' + year);
        var postInYear = files.map((title) => {
            return {
                year: year,
                postName: title.replace('.md', ''),
            };
        });
        posts = posts.concat(postInYear);
    });

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
