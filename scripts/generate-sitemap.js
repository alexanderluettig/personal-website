const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://luettig.tech';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const DATA_DIR = path.resolve(__dirname, '../data/blog-posts');

function generateSiteMap(blogPost) {
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

function fetchBlogPosts() {
    let posts = [];
    const years = fs.readdirSync(DATA_DIR);

    years.forEach((year) => {
        const yearDir = path.join(DATA_DIR, year);
        const files = fs.readdirSync(yearDir);
        const postsInYear = files.map((file) => ({
            year,
            postName: file.replace('.md', ''),
        }));
        posts = posts.concat(postsInYear);
    });

    return posts;
}

function saveSitemap(sitemap) {
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
}

(async () => {
    const blogPosts = fetchBlogPosts();
    const sitemap = generateSiteMap(blogPosts);
    saveSitemap(sitemap);
})();
