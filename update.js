const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('blog_id');
console.log(blogId);

document.getElementById("submit-button").addEventListener("click", async function (event) {
  event.preventDefault(); 
  const update_title = document.getElementById("blog_title").value;
  const content = document.getElementById("blog_content").value;
  const image = document.getElementById("upload-file").files[0];
  console.log(update_title, content, image);

  await updating_Blog_func(update_title, content, image);
});

const updating_Blog_func = async (title, content, cover) => {
  try {
    const authtoken = localStorage.getItem("jwt");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", cover);

    document.getElementById("submit-button").style.display = "none";
    document.getElementById("submit-buttonn").style.display = "block";

    const config = {
      headers: {
        Authorization: `Bearer ${authtoken}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.patch(`https://mybrandbackend-93l8.onrender.com/api/blog/${blogId}`, formData, config);
    console.log(res.data.Blog);
    setTimeout(() => {
      window.location.href = "index.html#blogs"; // Redirect after update
    }, 2000);
  } catch (e) {
    console.error(e, "Error updating blog");
  }
};

const cancel_button = document.querySelector('.close-btn');
cancel_button.addEventListener('click', () => {
  window.location.href = "index.html#blogs";
});

const fetchBlogPost = async () => {
  console.log("Fetching blog post");
  try {
    const response = await axios.get(`https://mybrandbackend-93l8.onrender.com/api/blog/${blogId}`);
    const blog = response.data.data.Blog;
    console.log(blog.content, 'content');
    console.log(blog.title, 'title');
    const singleBlog_content = document.getElementById('blog_content');
    const singleBlog_title = document.getElementById('blog_title');
    const imageElement = document.getElementById('blog_cover');
    singleBlog_content.value = blog.content;
    singleBlog_title.value = blog.title;
    imageElement.src = `${blog.cover}`;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};
fetchBlogPost();
