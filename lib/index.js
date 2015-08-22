/**
 * Bud writer for coz.
 * @module coz-bud-writer
 * @version 1.0.0
 */

"use strict";


var BudWriter = require('./bud_writer');
function budWriter(config){
    return new BudWriter(config);
}

budWriter.budWriter = budWriter;

module.exports = budWriter;