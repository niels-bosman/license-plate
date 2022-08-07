import sidecodes from './data/sidecodes';
import forbiddenWords from './data/letter-combinations';

export default class LicensePlate {
  /**
   * License plate.
   *
   * @private
   * @readonly
   * @type {string}
   */
  private readonly licensePlate: string;

  /**
   * Constructs the licence plate with the input value as uppercase.
   */
  constructor(licensePlate: string) {
    this.licensePlate = licensePlate.toUpperCase();
  }

  /**
   * Checks if the given license plate is valid.
   *
   * @public
   * @return {boolean} True if sidecode matches, false if none matches.
   */
  public valid(): boolean {
    return this.sidecode() !== 0 && !this.forbidden();
  }

  /**
   * Finds the matching sidecode by the given license plate.
   *
   * @public
   * @return {number} The index of the sidecode, 0 if not found.
   */
  public sidecode(): number {
    const licensePlate = this.strippedLicensePlate();

    return sidecodes.findIndex((sidecode: RegExp) => licensePlate.match(sidecode)) + 1;
  }

  /**
   * Strips the dashes from the license plate.
   *
   * @private
   * @return {string}
   */
  private strippedLicensePlate(): string {
    return this.licensePlate.replace(/-/g, '');
  }

  /**
   * Formats the input license plate to real license plate based on the matched sidecode.
   *
   * @public
   * @returns {string} The formatted license plate.
   */
  public pretty(): string {
    const sidecode     = this.sidecode();
    const licensePlate = this.strippedLicensePlate();

    if (sidecode <= 6 && sidecode > 0) {
      return `${licensePlate.substring(0, 2)}-${licensePlate.substring(2, 4)}-${licensePlate.substring(4, 6)}`;
    }

    if ([7, 9].includes(sidecode)) {
      return `${licensePlate.substring(0, 2)}-${licensePlate.substring(2, 5)}-${licensePlate.substring(5, 6)}`;
    }

    if ([8, 10].includes(sidecode)) {
      return `${licensePlate.substring(0, 1)}-${licensePlate.substring(1, 4)}-${licensePlate.substring(4, 6)}`;
    }

    if ([11, 14].includes(sidecode)) {
      return `${licensePlate.substring(0, 3)}-${licensePlate.substring(3, 5)}-${licensePlate.substring(5, 6)}`;
    }

    if ([12, 13].includes(sidecode)) {
      return `${licensePlate.substring(0, 1)}-${licensePlate.substring(1, 3)}-${licensePlate.substring(3, 6)}`;
    }

    return licensePlate;
  }

  /**
   * Checks whether the given license plate included some forbidden letter combinations.
   *
   * Starting from sidecode 7, political abbreviations from political parties were excluded,
   * except VVD, they were excluded starting from sidecode 8.
   *
   * Sources:
   * https://nl.wikipedia.org/wiki/Nederlands_kenteken
   * https://www.rdw.nl/particulier/voertuigen/auto/de-kentekenplaat/cijfers-en-letters-op-de-kentekenplaat
   *
   * @return {boolean}
   * @private
   */
  private forbidden(): boolean {
    let forbidden = forbiddenWords;

    if (this.sidecode() >= 7) {
      forbidden = [...forbidden, 'PVV', 'SGP'];
    }

    if (this.sidecode() >= 8) {
      forbidden = [...forbidden, 'VVD'];
    }

    return forbidden.some((letterCombination: string) => this.licensePlate.includes(letterCombination));
  }
}
