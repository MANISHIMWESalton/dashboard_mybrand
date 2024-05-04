const deleteMessage = async (messageId, authToken) => {
    try {
        const res = await axios({
            method: "DELETE",
            url: `https://mybrandbackend-93l8.onrender.com/api/messages/${messageId}`,
            headers: { Authorization: `Bearer ${authToken}` },
        });
        console.log("Message deleted successfully");
        window.location.reload();
    } catch (error) {
        console.error("Error deleting message:", error);
    }
};

const fetchMessages = async () => {
    const authtoken = localStorage.getItem("jwt");

    try {
        const res = await axios({
            method: "GET",
            url: "https://mybrandbackend-93l8.onrender.com/api/messages",
            headers: { Authorization: `Bearer ${authtoken}` },
        });

        const messages = res.data.data.messages;
        console.log(res.data.data.messages);
        const tbody = document.getElementById("message-content");
        tbody.innerHTML = ""; // Clear previous data

        messages.forEach((message, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${message.firstname}</td>
                <td>${message.message}</td>
                <td><a href="#" class="btn deleteMessage" data-messageid="${message._id}">Delete</a></td>`;
            tbody.appendChild(row);
        });

        const deleteButtons = document.querySelectorAll('.deleteMessage');
        deleteButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const messageId = event.target.getAttribute('data-messageid');
                deleteMessage(messageId, authtoken);
            });
        });
    } catch (error) {
        console.error("Error fetching messages:", error);
    }
};


fetchMessages()
