/**
 *
 * @param {string} txt - sebuah string entah itu dari title ataupun description
 * @param {number} limit - jumlah hurus yang di tampilkan pada halaman defaultnya 100
 *  namun pada params bisa di custom
 * @returns string
 */

const shorText = (txt = "", limit = 100, add = "") => {
	if (txt.length > limit) {
		return txt.substr(0, limit) + add;
	}
	return txt;
};
module.exports = shorText;
