tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                display: ["'Poppins'", "sans-serif"],
            },
        },
    },
};


function carousel() {
    return {
        currentIndex: 0,
        interval: null,
        autoSlide: true,
        touchStartX: 0,
        touchEndX: 0,
        slides: [
            {
                id: 1,
                image: image = "gallery15.jpg",
                title: "Powering the Future",
                text: "Sustainable energy solutions for tomorrow.",
            },
            {
                id: 2,
                image: image = "gallery14.jpg",
                title: "Innovating Mining",
                text: "Modern technologies for mineral exploration.",
            },
            {
                id: 3,
                image: image = "gallery16.jpg",
                title: "Digital Transformation",
                text: "Empowering industries with smart tech.",
            },
        ],
        init() {
            this.start();
        },
        start() {
            this.interval = setInterval(() => {
                if (this.autoSlide) this.next();
            }, 10000);
        },
        pause() {
            this.autoSlide = false;
        },
        resume() {
            this.autoSlide = true;
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        prev() {
            this.currentIndex =
                (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        goTo(index) {
            this.currentIndex = index;
        },
        handleTouchStart(e) {
            this.touchStartX = e.touches[0].clientX;
        },
        handleTouchMove(e) {
            this.touchEndX = e.touches[0].clientX;
        },
        handleTouchEnd() {
            const delta = this.touchEndX - this.touchStartX;
            if (Math.abs(delta) > 50) {
                delta > 0 ? this.prev() : this.next();
            }
        },
    };
}



// ========================= Emailjs =========================
// This script initializes EmailJS and handles form submission

(function () {
    emailjs.init("gZ2YJg_UXY1yOCLjX"); // EmailJS public key
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = this;
    const status = document.getElementById('form-status');

    emailjs.sendForm('service_7830f3o', 'template_ihteyxe', this) // service and template IDs
        .then(() => {
            alert("✅ Message sent");
            status.textContent = "Message sent successfully!";
            status.classList.remove('text-red-500');
            status.classList.add('text-green-500');
            form.reset();
        }, (err) => {
            alert("❌ Failed to send message. Try again.");
            status.textContent = "Failed to send message. Please try again later.";
            status.classList.add('text-red-500');
            console.error('EmailJS Error:', err);
        });
});






// Initialize mode on page load
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
} else if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.remove("dark");
} else {
    // Optional: Detect system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}

// Toggle on button click
function toggleMode() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}



