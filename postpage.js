// Get the form and submit button
const form = document.querySelector('form');
const submitButton = form.querySelector('input[type="submit"]');

// Add an event listener to the submit button
submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    alert('Form Submitted!'); // Display an alert
});
// This is a simple front-end example and does not include any server-side logic.

document.getElementById("upload-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const fileInput = document.getElementById("file-input");
    const caption = document.getElementById("caption");
    const posts = document.getElementById("posts");

    if (fileInput.files.length === 0) {
        alert("Please select an image to upload.");
        return;
    }

    const file = fileInput.files[0];
    const imageURL = URL.createObjectURL(file);

    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const img = document.createElement("img");
    img.src = imageURL;
    postDiv.appendChild(img);

    const postCaption = document.createElement("p");
    postCaption.textContent = caption.value;
    postDiv.appendChild(postCaption);

    posts.appendChild(postDiv);

    // Clear the form
    fileInput.value = "";
    caption.value = "";
});
