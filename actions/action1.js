"use strict";
let datafire = require('datafire');

let google_sheets = require('@datafire/google_sheets').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let valueRange = await google_sheets.spreadsheets.values.get({
      spreadsheetId: "1LRItpbHj3LlaZE5gZrdOoKBuYsItJTaXksvoUGlIDWA",
      range: "B2:B2",
    }, context);
    let updateValuesResponse = await google_sheets.spreadsheets.values.update({
      range: "B4:B4",
      spreadsheetId: "1LRItpbHj3LlaZE5gZrdOoKBuYsItJTaXksvoUGlIDWA",
      body: {
        range: "B4:B4",
        values: [
          [valueRange]
        ],
      },
    }, context);
    return updateValuesResponse;
  },
});
