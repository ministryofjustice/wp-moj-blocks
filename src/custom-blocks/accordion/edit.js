/***
 * 
 * The following script is to mimic the behaviour of the accordion in the editor window.  
 * 
 */


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

const span = document.createElement("span");
const div = document.createElement("div");
const arrowSpan = span.cloneNode();
arrowSpan.classList.add("show-hide-arrow");
const textSpan = span.cloneNode();
textSpan.classList.add("show-hide-text");

const showThis_text = document.createTextNode("");
const showThisArrow = arrowSpan.cloneNode();
const showThisText = textSpan.cloneNode();
showThisText.appendChild(showThis_text);
const showThis = div.cloneNode();
showThis.appendChild(showThisArrow);
showThis.appendChild(showThisText);
showThis.classList.add("hideThis");
showThis.classList.add("showHideThis");

const showAll_text = document.createTextNode(" all sections");
const showAllArrow = arrowSpan.cloneNode();
const showAllText = textSpan.cloneNode();
showAllText.appendChild(showAll_text);
const showAll = div.cloneNode();
showAll.appendChild(showAllArrow);
showAll.appendChild(showAllText);
showAll.classList.add("hideAll");
showAll.classList.add("showHideAll");

waitForElm('.govuk-accordion').then((elm) => {
    elm.insertBefore(showAll, elm.firstChild);

    const sections = document.querySelectorAll(".govuk-accordion__section");

    sections.forEach((section) => {
        let showHideControl = showThis.cloneNode(true);
        section.insertBefore(showHideControl, section.lastChild);
        section.querySelector(".showHideThis").onclick = function() {
            if (section.querySelector(".showHideThis").classList.contains("hideThis")) {
                section.classList.add("accordion-hidden");
                section.querySelector(".showHideThis").classList.add("showThis");
                section.querySelector(".showHideThis").classList.remove("hideThis");
                if (elm.getElementsByClassName("hideThis") == 0) {
                    // if there is no hideThis left, we change the hide all to show all
                    elm.querySelector(".showHideAll").classList.add("showAll");
                    elm.querySelector(".showHideAll").classList.remove("hideAll");
                }
            } else {
                section.classList.remove("accordion-hidden");
                section.querySelector(".showHideThis").classList.add("hideThis");
                section.querySelector(".showHideThis").classList.remove("showThis");
                // there is now at least one hideThis, so we ensure hideAll is there instead of showAll
                elm.querySelector(".showHideAll").classList.add("hideAll");
                elm.querySelector(".showHideAll").classList.remove("showAll");
            }
        }
    });

    elm.querySelector(".showHideAll").onclick = function() {
        if (elm.querySelector(".showHideAll").classList.contains("hideAll")) {
            elm.querySelectorAll(".govuk-accordion__section").forEach(element => {
                element.classList.add("accordion-hidden");
                element.querySelectorAll(".showHideThis").forEach(element2 => {
                    //we ensure any hideThis becomes a showThis
                    element2.classList.add("showThis");
                    element2.classList.remove("hideThis");
                });
            });
            elm.querySelector(".showHideAll").classList.add("showAll");
            elm.querySelector(".showHideAll").classList.remove("hideAll");
        } else {
            elm.querySelectorAll(".govuk-accordion__section").forEach(element => {
                element.classList.remove("accordion-hidden");
                element.querySelectorAll(".showHideThis").forEach(element2 => {
                    //we ensure any showThis becomes a hideThis
                    element2.classList.add("hideThis");
                    element2.classList.remove("showThis");
                });
            });
            elm.querySelector(".showHideAll").classList.remove("showAll");
            elm.querySelector(".showHideAll").classList.add("hideAll");
        }
    };
});
