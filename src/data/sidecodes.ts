/**
 * All dutch available sidecodes.
 *
 * @type {RegExp[]}
 */
const sidecodes: RegExp[] = [
	/^([a-zA-Z]{2})([0-9]{2})([0-9]{2})$/,    // [1]  => XX-99-99
	/^([0-9]{2})([0-9]{2})([a-zA-Z]{2})$/,    // [2]  => 99-99-XX
	/^([0-9]{2})([a-zA-Z]{2})([0-9]{2})$/,    // [3]  => 99-XX-99
	/^([a-zA-Z]{2})([0-9]{2})([a-zA-Z]{2})$/, // [4]  => XX-99-XX
	/^([a-zA-Z]{2})([a-zA-Z]{2})([0-9]{2})$/, // [5]  => XX-XX-99
	/^([0-9]{2})([a-zA-Z]{2})([a-zA-Z]{2})$/, // [6]  => 99-XX-XX
	/^([0-9]{2})([a-zA-Z]{3})([0-9])$/,       // [7]  => 99-XXX-9
	/^([0-9])([a-zA-Z]{3})([0-9]{2})$/,       // [8]  => 9-XXX-99
	/^([a-zA-Z]{2})([0-9]{3})([a-zA-Z])$/,    // [9]  => XX-999-X
	/^([a-zA-Z])([0-9]{3})([a-zA-Z]{2})$/,    // [10] => X-999-XX
	/^([a-zA-Z]{3})([0-9]{2})([a-zA-Z])$/,    // [11] => XXX-99-X
	/^([a-zA-Z])([0-9]{2})([a-zA-Z]{3})$/,    // [12] => X-99-XXX
	/^([0-9])([a-zA-Z]{2})([0-9]{3})$/,       // [13] => 9-XX-999
	/^([0-9]{3})([a-zA-Z]{2})([0-9])$/,       // [14] => 999-XX-9
];

export default sidecodes;
