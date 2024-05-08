// const deleteUser = async (userId, authToken) => {
//     showLoading();
//     try {
//       const res = await axios({
//         method: "DELETE",
//         url: `https://mybrandbackend-93l8.onrender.com/api/users/${userId}`,
//         headers: { Authorization: `Bearer ${authToken}` },
//       });
//         hideLoading();
//         const row = document.querySelector(`button[data-user-id = ${userId}]`).closest('tr')
//         if(row){
//             row.remove();
//         }
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

// const fetchUser = async () => {
//     const authtoken = localStorage.getItem("jwt");

//     try {
//         const res = await axios({
//             method: "GET",
//             url: "https://mybrandbackend-93l8.onrender.com/api/users",
//             headers: { Authorization: `Bearer ${authtoken}` },
//         });

//         console.log(res.data.data.User);
//         const data = res.data.data.User;
//         updateTotalUser(data);

//         const tbody = document.getElementById("user-content");
//         tbody.innerHTML = ""; // Clear previous data
//         data.forEach((element, index) => {
//             const row = document.createElement("tr");
//             row.innerHTML = `
//                 <td>${index + 1}</td>
//                 <td>${element.name}</td>
//                 <td>${element.email}</td>
//                 <td><a href="#" class="btn">Edit</a></td>
//                 <td><a href="#" class="btn deleteUser" data-userid="${element._id}">Delete</a></td>`; 
//             tbody.appendChild(row);
//         });

//         const deleteButtons = document.querySelectorAll('.deleteUser'); 
//         deleteButtons.forEach((button) => {
//             button.addEventListener("click", (event) => {
//                 const userId = event.target.getAttribute('data-userid'); 
//                 console.log(userId); 
//                 console.log("Delete button clicked");
//                 deleteUser(userId,authtoken);
//             });
//         });
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// };

// function updateTotalUser(userData) {
//     const totalUsers = userData.length;
//     const totalUserElement = document.querySelector("#userNumber");
//     if (totalUserElement) {
//         totalUserElement.textContent = totalUsers;
//     }
// }

// async function displayData() {
//     await fetchUser();
// }
const spinner = document.getElementById('loading-spinner');
function showLoading() {
    spinner.style.display = 'block';
}

function hideLoading() {
    spinner.style.display = 'none';
}
const blog = document.getElementById('blog');
const message = document.getElementById('message');
const dashboard = document.getElementById('dashboard');
const messageContent = document.getElementById('messageBtn')
const blogContent = document.getElementById('blogBtn')
const dashboardContent = document.getElementById('dashboardBtn');
blogContent.addEventListener('click',() => {
    blog.style.display = 'block';
    message.style.display = 'none';
    dashboard.style.display = 'none';
});
messageContent.addEventListener('click',() => {
    blog.style.display = 'none';
    message.style.display = 'block';
    dashboard.style.display = 'none';
});
dashboardContent.addEventListener('click',() => {
    blog.style.display = 'none';
    message.style.display = 'none';
    dashboard.style.display = 'block';
});
// document.addEventListener("DOMContentLoaded", displayData);
