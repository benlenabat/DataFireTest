"use strict";
let datafire = require('datafire');

let xkcd = require('@datafire/xkcd').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let comic = await xkcd.getLatestComic({}, context);
    return comic;
  },
});
