import sidecodes from './sidecodes';
import forbiddenWords from './forbidden-words';

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
      return `${licensePlate.substr(0, 2)}-${licensePlate.substr(2, 2)}-${licensePlate.substr(4, 2)}`;
    }

    if ([7, 9].includes(sidecode)) {
      return `${licensePlate.substr(0, 2)}-${licensePlate.substr(2, 3)}-${licensePlate.substr(5, 1)}`;
    }

    if ([8, 10].includes(sidecode)) {
      return `${licensePlate.substr(0, 1)}-${licensePlate.substr(1, 3)}-${licensePlate.substr(4, 2)}`;
    }

    if ([11, 14].includes(sidecode)) {
      return `${licensePlate.substr(0, 3)}-${licensePlate.substr(3, 2)}-${licensePlate.substr(5, 1)}`;
    }

    if ([12, 13].includes(sidecode)) {
      return `${licensePlate.substr(0, 1)}-${licensePlate.substr(1, 2)}-${licensePlate.substr(3, 3)}`;
    }

    return licensePlate;
  }

  /**
   * Checks whether the given license plate includes
   * some of the forbidden letter combinations
   *
   * @return {boolean}
   * @private
   */
  private forbidden(): boolean {
    return forbiddenWords.some((letterCombination: string) => this.licensePlate.includes(letterCombination));
  }
}
