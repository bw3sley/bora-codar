function generateMonthDivsHTML() {
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const thisMonth = months[new Date().getMonth()];

    const generateMonthDivHTML = (month) => {
        const active = thisMonth === month ? "active": "";

        return `<div class="${active}">${month}</div>`
    }

    const monthDivsHTML = months.map(generateMonthDivHTML).join("");

    return monthDivsHTML;
}

function addMonthDivsToDOM() {
    const monthDivsHTML = generateMonthDivsHTML();
    const mainElement = document.querySelector("main");

    mainElement.innerHTML = monthDivsHTML;

    const divs = mainElement.querySelectorAll("div");

    divs.forEach((div) => {
        div.addEventListener("click", (event) => {
            divs.forEach((otherDiv) => {
                otherDiv.classList.remove("active");
            })

            div.classList.add("active");
        })
    })
}

function addYearToHeader() {
    const thisYear = new Date().getFullYear();
    const yearElement = document.querySelector("header > span");

    yearElement.textContent = thisYear;

    const incrementYear = () => {
        yearElement.textContent = Number(yearElement.textContent) + 1;
    }

    const decrementYear = () => {
        yearElement.textContent = Number(yearElement.textContent) - 1;
    }

    document.querySelector("header i.ph-caret-right").addEventListener("click", incrementYear);
    document.querySelector("header i.ph-caret-left").addEventListener("click", decrementYear);
}

addMonthDivsToDOM();
addYearToHeader();