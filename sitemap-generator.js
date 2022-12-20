let ejs = require("ejs");
let posts = require("./content/contentrain/posts/posts.json").map((post) => {
  let date = new Date(post.updatedAt ? post.updatedAt : post.createdAt);
  return { slug: post.slug, updatedAt: date.toISOString() };
});

let xml = ejs.render(
  `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>http://1ek.in/</loc>
  <lastmod>2022-12-20T15:27:21+00:00</lastmod>
  <priority>1.00</priority>
</url>
<% for(var i=0; i < posts.length; i++) { %>
<url>
  <loc>http://1ek.in/posts/<%= posts[i].slug %></</loc>
  <lastmod><%= posts[i].content %></lastmod>
  <priority>0.80</priority>
</url>
 <% } %>
</urlset>`,
  { posts }
);

let fs = require("fs");
fs.writeFileSync("./sitemap.xml", xml);
