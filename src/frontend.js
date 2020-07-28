/**
 * Gov UK Frontend JS
 * Queues up the Gov UK JS modules required for our blocks
 */

// import dependencies
import { Accordion } from 'govuk-frontend';

// initialise components
new Accordion(document.querySelector('[data-module="govuk-accordion"]')).init();
