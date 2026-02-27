function init() {



    // this codes needs to be configured for Rey's prject, but it is a good starting point for the step navigation functionality
    const steps = document.querySelectorAll(".step a"); // Select all step circles
    const content = document.querySelectorAll(".step-content"); // Select all content sections
    steps.forEach((step, index) => {
        step.addEventListener("click", () => {
            // Remove active class from all steps
            document.querySelectorAll(".step").forEach(step => step.classList.remove("active"));
            // Add active class to clicked step
            step.parentElement.classList.add("active");

            // add logic to hide / reveal elements based on the step
            content.forEach((section, i) => {
                if (i === index) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });

        });
    });
}




// initialize the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);