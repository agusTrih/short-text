"use strict";

/**
 *
 * @param {string} txt - sebuah string entah itu dari title ataupun description
 * @param {number} limit - jumlah hurus yang di tampilkan pada halaman defaultnya 100 character
 *  namun pada params bisa di custom
 * @returns string
 */
var shorText = function shorText() {
  var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var add = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (txt.length > limit) {
    return txt.substr(0, limit) + add;
  }

  return txt;
};

module.exports = shorText;