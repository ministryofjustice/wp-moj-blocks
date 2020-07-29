/**
 * Gov UK Frontend JS
 * Queues up the Gov UK JS modules required for our blocks
 */

// import dependencies
import { Accordion } from 'govuk-frontend';
const mojblocksAccordion = document.querySelector('[data-module="govuk-accordion"]');

if (mojblocksAccordion || null) {
    new Accordion(mojblocksAccordion).init();
}
