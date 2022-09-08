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
    this.licensePlate = licensePlate.replace(/-/g, '').toUpperCase();
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
   * Finds the matching sidecode by the given license plate. and returns
   * the index of the sidecode in a human-readable format (+1).
   *
   * @public
   * @return {number} The index of the sidecode, 0 if not found.
   */
  public sidecode(): number {
    return sidecodes.findIndex((sidecode: RegExp) => this.licensePlate.match(sidecode)) + 1;
  }

  /**
   * Finds the matching sidecode and returns the Regex pattern associated.
   *
   * @private
   * @return {RegExp} The Regex pattern.
   */
  private getSidecodePattern(): RegExp {
    return sidecodes[this.sidecode() - 1];
  }

  /**
   * Converts a license plate to the Regex equivalent based on the sidecode found.
   *
   * @private
   * @param sidecode {RegExp} The Regex pattern to use when converting input plate.
   */
  private convertPlate(sidecode: RegExp): string {
    let matches = this.licensePlate.match(sidecode) ?? [];
    matches.shift();

    return matches.join('-');
  }

  /**
   * Formats the input license plate to real license plate based on the matched sidecode.
   *
   * @public
   * @returns {string} The formatted license plate.
   */
  public pretty(): string {
    const pattern = this.getSidecodePattern()

    return this.convertPlate(pattern);
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

    const formattedPlate = this.pretty();

    return forbidden.some((word: string) => formattedPlate.includes(word));
  }
}
