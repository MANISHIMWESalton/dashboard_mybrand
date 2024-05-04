const fetchBlogs = async () => {
    try {
        const res = await axios.get("https://mybrandbackend-93l8.onrender.com/api/blog");
        const blogs = res.data.data.Blogs;
        const blogContainer = document.getElementById("blogsContainer"); 
        blogContainer.innerHTML = ""; 

        blogs.forEach((blog) => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");
            blogCard.innerHTML = `
                <img src="${blog.cover}" alt="Blog Cover" class="blog-cover">
                <div class="blog-details">
                    <h3>${blog.title}</h3>
                    <div class="btn-container">
                        <button class="btn update" data-blog-id="${blog._id}" onclick="updateDirect('${blog._id}')">Update</button>
                        <button class="btn delete" data-blog-id="${blog._id}">Delete</button>
                    </div>
                </div>`;
            blogContainer.appendChild(blogCard);

            const deleteButton = blogCard.querySelector('.delete');
            deleteButton.addEventListener('click', async () => {
                const authToken = localStorage.getItem("jwt");
                const blogId = deleteButton.dataset.blogId;
                await deleteBlog(blogId, authToken);
            });
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
};

async function displayBlogs() {
    await fetchBlogs();
}

document.addEventListener("DOMContentLoaded", displayBlogs);

const deleteBlog = async (blogId, authToken) => {
    try {
        const res = await axios({
            method: "DELETE",
            url: `https://mybrandbackend-93l8.onrender.com/api/blog/${blogId}`,
            headers: { Authorization: `Bearer ${authToken}` },
        });
        console.log(res.data);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    } catch (error) {
        console.error("Error deleting blog:", error);
    }
};

const updateDirect = (blogId) => {
    window.location.href = "updateblog.html?blog_id=" + blogId;
};
