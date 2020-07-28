/**
 * Gov UK Frontend JS
 * Queues up the Gov UK JS modules requried for our blocks
 */

import { Accordion } from 'govuk-frontend';
new Accordion(document.querySelector('[data-module="govuk-accordion"]')).init();