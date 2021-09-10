/**
 * All forbidden words in license plates.
 *
 * @type {string[]}
 */
const forbiddenWords: string[] = [
  'GVD',
  'KKK',
  'KVT',
  'LPF',
  'NSB',
  'PKK',
  'PSV',
  'TBS',
  'SS',
  'SD',
];

/**
 * Political parties that are banned in license-plates
 * starting from sidecode 11.
 *
 * @type {string[]}
 */
const politicalParties: string[] = [
  'PVV',
  'SGP',
  'VVD',
];

export { forbiddenWords, politicalParties };