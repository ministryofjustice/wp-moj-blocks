/**
 * Gov UK Frontend JS
 * Queues up the Gov UK JS modules required for our blocks
 */

// import dependencies
import { Accordion } from 'govuk-frontend';
import { Details } from 'govuk-frontend';

// get components
/** Accordion **/
const mojblocksAccordion = document.querySelector('[data-module="govuk-accordion"]') || null;

/** Reveal **/
const mojblocksReveal = document.querySelector('[data-module="govuk-details"]') || null;

// initialise components
if (mojblocksAccordion) { new Accordion(mojblocksAccordion).init() }
if (mojblocksReveal) { new Details(mojblocksReveal).init() }
