/**
 * Gov UK Frontend JS
 * Queues up the Gov UK JS modules required for our blocks
 */

// import dependencies
import { Accordion } from 'govuk-frontend';

// initialise components
const mojblocksAccordion = document.querySelector('[data-module="govuk-accordion"]') || null;

if (mojblocksAccordion) {
    new Accordion().init();
}
