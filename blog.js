// blogs JS


// Get all the blog items
const blogItems = document.querySelectorAll(".blog-item");

// // Get the full blog overlay and its content
// const fullBlogOverlay = document.getElementById("full-blog-overlay");
// const fullBlogContentElement = document.getElementById("full-blog-content");

// Add a click event listener to each blog item
blogItems.forEach((blogItem, index) => {
  blogItem.addEventListener("click", function () {
    // Retrieve the blog data for the clicked item
    const blogTitle = this.querySelector("h3").textContent;
    const blogContent = this.querySelector("p").textContent;
    const blogImg = this.querySelector("img").getAttribute("src");
    const blogData = {
      title: blogTitle,
      image: blogImg,
      text: blogContent,
    };

    // Serialize the data to a query string and include it in the URL
    const queryString = `?title=${encodeURIComponent(
      blogData.title
    )}&image=${encodeURIComponent(blogData.image)}&text=${encodeURIComponent(
      blogData.text
    )}`;

    // Navigate to the blog-detail.html page with the query string
    window.location.href = `blog-detail.html${queryString}`;
  });

});

// Get the query parameters from the URL
// Get the current URL
const currentURL = window.location.href;

// Create a URLSearchParams object to parse the query parameters
const searchParams = new URLSearchParams(currentURL.split("?")[1]);
console.log("🚀 ~ file: blog.js:7 ~ searchParams:", searchParams.get("title"));
console.log(
  "🚀 ~ file: blog.js:7 ~ searchParams:",
  searchParams.getAll("text")
);
console.log("🚀 ~ file: blog.js:7 ~ searchParams:", searchParams.get("image"));

// Get specific query parameters by name
const blogTitle = searchParams.get("title");
const blogContent = searchParams.get("text");
const blogImg = searchParams.get("image");

// const queryParams = new URLSearchParams(window.location.search);
// const blogTitle = queryParams.get("title");
// const blogContent = queryParams.get("content");

// Get the full blog content element
const fullBlogContentElement = document.getElementById("full-blog-content");

// Check if the title and content parameters exist
if (blogTitle && blogContent) {
  // Display the blog title and content on the page
  if (fullBlogContentElement != null) {
    fullBlogContentElement.innerHTML = `
  <div>
    <img src="images/vactorLoader.jpg" data-src=${blogImg}/ alt="img">
    <h2>${blogTitle}</h2>
    <p>${blogContent}</p>
    </div>
  `;
  }
} else {
  // Handle the case where parameters are missing or invalid
  if (fullBlogContentElement != null) {
    fullBlogContentElement.innerHTML = "<p>Blog not found.</p>";
  }
}