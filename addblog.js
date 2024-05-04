function saveBlog(event) {
    event.preventDefault(); 
    var fileInput = document.getElementById('upload-file');
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var fileName = file.name;
        console.log('Selected file name:', fileName);
    } else {
        console.log('No file selected');
    }
}


document
  .getElementById("submit-button")
  .addEventListener("click",() => {
    console.log("Clickedddddddddddddddddddddddd");
    let isloading = true;
    const title = document.getElementById("blog_title").value;
    const content = document.getElementById("blog_content").value;
    const image = document.getElementById("upload-file").files[0];
    console.log(title,content,image);
    
    if (!title || !image) {
        alert("Please enter a title or image")
      return;
    }

    posting_Blog_func(title, content, image);
  });


const posting_Blog_func = async (title, content, cover) => {
  console.log(title,content,cover,"okay ");
    try {
      const authtoken = localStorage.getItem("jwt");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", cover);
      let isloading = true;
      if (isloading) {
        document.getElementById("submit-button").style.display = "none";
        document.getElementById("submit-buttonn").style.display = "block";
      }
      
      const res = await axios({
        method: "POST",
        url: "https://mybrandbackend-93l8.onrender.com/api/blog",
        data: formData,
        headers: {
          Authorization: `Bearer ${authtoken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      setTimeout(() => {
        window.location.href="index.html"
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

