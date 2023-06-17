let currentStep = 0;

const formSteps = document.querySelectorAll(".form-step");

const form = document.querySelector("form");

form.addEventListener("click", (event) => {
    if(!event.target.matches("[data-action]")) {
        return
    }

    const actions = {
        next() {
            if(!isValidInputs()) {
                return
            }

            currentStep++;
        },

        prev() {
            currentStep--;
        }
    }

    const action = event.target.dataset.action;

    actions[action]();

    updateActiveStep();
    updateProgressStep();
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);

    return alert(`Obrigado ${data.get("name")}!`);
})

function updateActiveStep() {
    formSteps.forEach(step => step.classList.remove("active"));

    formSteps[currentStep].classList.add("active");
}

const progressStep = document.querySelectorAll(".step-progress [data-step]");

function updateProgressStep() {
    progressStep.forEach((step, index) => {
        step.classList.remove("active");
        step.classList.remove("done");

        if(index < currentStep + 1) {
            step.classList.add("active");
        }

        if(index < currentStep) {
            step.classList.add("done");
        }
    })
}

function isValidInputs() {
    const currentFormStep = formSteps[currentStep];
    const formFields = [...currentFormStep.querySelectorAll("input"), ...currentFormStep.querySelectorAll("textarea")];

    return formFields.every(field => field.reportValidity());
}

formSteps.forEach(step => {
    function addHide() {
        step.classList.add("hidden");
    }

    step.addEventListener("animationend", () => {
        addHide();

        formSteps[currentStep].classList.remove("hidden");
    })
})