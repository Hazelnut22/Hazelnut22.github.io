// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwLhchfFyXi44mWGBAW0Tq2cVy8yzbCjI",
    authDomain: "easyeat-web.firebaseapp.com",
    projectId: "easyeat-web",
    storageBucket: "easyeat-web.firebasestorage.app",
    messagingSenderId: "312423463216",
    appId: "1:312423463216:web:704c914ef9268f3c3630f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore instance (allows script.js to use it)
export { db };

// Form Submission Logic
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent page reload

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            try {
                await addDoc(collection(db, "contacts"), {
                    name,
                    email,
                    message,
                    timestamp: new Date()
                });
                alert("Message sent successfully!");
                form.reset(); // Clear form after submission
            } catch (error) {
                console.error("Error adding document: ", error);
                alert("Failed to send message.");
            }
        });
    }
});
