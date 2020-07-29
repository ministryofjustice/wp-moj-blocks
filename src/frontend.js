/**
 * Gov UK Frontend JS
 * Queues up the Gov UK JS modules requried for our blocks
 */

import { Accordion } from 'govuk-frontend';

const mojblocksAccordion = document.querySelector('[data-module="govuk-accordion"]');

if (mojblocksAccordion || null) {
    new Accordion(mojblocksAccordion).init();
}