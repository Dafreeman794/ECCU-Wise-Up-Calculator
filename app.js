function init() {
const overlay = document.getElementById("overlay");
const careerTitle = document.getElementById("occupation")

function createButtons(careers) {
    careers.forEach((career, index) => {
     const button = document.createElement("button");
     button.innerHTML = `${career.Occupation}: ${career.Salary}`;
     button.setAttribute("id", `${index}`);
        button.addEventListener("click", () => {
            careerTitle.innerHTML = `Future Career: ${career.Occupation}`;
            console.log(`Selected Career: ${career.Occupation}, Salary: ${career.Salary}`);
        });
        overlay.appendChild(button);
    });
}

    async function getCareers() {
        const url = "https://eecu-data-server.vercel.app/data";
        try {
            const response = await fetch(url);
            const jobs = await response.json();
            createButtons(jobs);
            return jobs;
        }
        catch (error) {
            console.error("Error fetching careers data:", error);
            return [];
        }
        
    }
    getCareers();

    // this codes needs to be configured for Rey's prject, but it is a good starting point for the step navigation functionality
    const steps = document.querySelectorAll("#steps a"); // Select all step circles
    const content = document.querySelectorAll(".step-content"); // Select all content sections
    steps.forEach((step, index) => {
        step.addEventListener("click", (i) => {
            i.preventDefault(); // Prevent default anchor behavior
            // Remove active class from all steps
            document.querySelectorAll(".step").forEach(step => step.classList.remove("active"));
            // Add active class to clicked step
            step.parentElement.classList.add("active");
            steps.forEach((circle, circleNumber) => {
                if (circleNumber <= index) {
                    circle.classList.add("active");
                }
                else {
                    circle.classList.remove("active");
                }
            })

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
    function calcSaveChart() {
        const inputs = document.getElementsByClassName("expense");
        const savedExpenses = {};
        let housing = 0;
        let life = 0;
        let essentials = 0;
        let loans = 0;
        let future = 0;

        let total = 0;
        inputs.forEach(input => {
            total += Number(input.value.replace(/[^0-9]/g, '')) || 0;
            savedExpenses[input.id] = Number(input.value.replace(/[^0-9]/g, '')) || 0;
            if(input.classList.contains("housing")) {
                housing += Number(input.value.replace(/[^0-9]/g, '')) || 0;
            }
            else if(input.classList.contains("life")) {
                life += Number(input.value.replace(/[^0-9]/g, '')) || 0;
            }
            else if(input.classList.contains("essentials")) {
                essentials += Number(input.value.replace(/[^0-9]/g, '')) || 0;
            }
            else if(input.classList.contains("loans")) {
                loans += Number(input.value.replace(/[^0-9]/g, '')) || 0;
            }
            else if(input.classList.contains("future")) {
                future += Number(input.value.replace(/[^0-9]/g, '')) || 0;
            }
            localStorage.setItem("savedExpenses", JSON.stringify(savedExpenses));
        });
    }
}




// initialize the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);