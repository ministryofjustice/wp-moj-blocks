/**
 * Gov UK Frontend JS
 * Queues up the Gov UK JS modules required for our blocks
 */

// import dependencies
import { Details } from 'govuk-frontend';

// get components

/** Reveal **/
const mojblocksReveal = document.querySelector('[data-module="govuk-details"]') || null;

// initialise components
if (mojblocksReveal) { new Details(mojblocksReveal).init() }
