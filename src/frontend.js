/**
 * Gov UK Frontend JS
 * Queues up the Gov UK JS modules required for our blocks
 */

// import dependencies
import { Accordion } from 'govuk-frontend';

// get components
/** Accordion **/
const mojblocksAccordion = document.querySelector('[data-module="govuk-accordion"]') || null;

// initialise components
if (mojblocksAccordion) { new Accordion(mojblocksAccordion).init() }
