export default class LicensePlate {
  /**
   * All Dutch sidecodes.
   *
   * @private
   * @type {RegExp[]}
   */
  private readonly sidecodes: RegExp[] = [
    /^[a-zA-Z]{2}[0-9]{2}[0-9]{2}$/,    // [1]  => XX-99-99
    /^[0-9]{2}[0-9]{2}[a-zA-Z]{2}$/,    // [2]  => 99-99-XX
    /^[0-9]{2}[a-zA-Z]{2}[0-9]{2}$/,    // [3]  => 99-XX-99
    /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z]{2}$/, // [4]  => XX-99-XX
    /^[a-zA-Z]{2}[a-zA-Z]{2}[0-9]{2}$/, // [5]  => XX-XX-99
    /^[0-9]{2}[a-zA-Z]{2}[a-zA-Z]{2}$/, // [6]  => 99-XX-XX
    /^[0-9]{2}[a-zA-Z]{3}[0-9]$/,       // [7]  => 99-XXX-9
    /^[0-9][a-zA-Z]{3}[0-9]{2}$/,       // [8]  => 9-XXX-99
    /^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]$/,    // [9]  => XX-999-X
    /^[a-zA-Z][0-9]{3}[a-zA-Z]{2}$/,    // [10] => X-999-XX
    /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]$/,    // [11] => XXX-99-X
    /^[a-zA-Z][0-9]{2}[a-zA-Z]{3}$/,    // [12] => X-99-XXX
    /^[0-9][a-zA-Z]{2}[0-9]{3}$/,       // [13] => 9-XX-999
    /^[0-9]{3}[a-zA-Z]{2}[0-9]$/,       // [14] => 999-XX-9
  ];

  /**
   * The given license plate.
   *
   * @private
   * @type {string}
   */
  private readonly licensePlate: string;

  /**
   * Constructs the licence plate.
   * Removed the dashes from the input and makes it uppercase.
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
    return this.sidecode() !== 0;
  }

  /**
   * Finds the matching sidecode by the given license plate.
   *
   * @public
   * @return {number} The index of the sidecode.
   */
  public sidecode(): number {
    return this.sidecodes.findIndex((sidecode: RegExp) => this.licensePlate.match(sidecode)) + 1;
  }

  /**
   * Formats the input license plate to real license plate based on the matched sidecode.
   *
   * @public
   * @returns {string} The formatted license plate.
   */
  public pretty(): string {
    const sidecode = this.sidecode();

    if (sidecode <= 6 && sidecode > 0) {
      return `${this.licensePlate.substr(0, 2)}-${this.licensePlate.substr(2, 2)}-${this.licensePlate.substr(4, 2)}`;
    }

    if ([7, 9].includes(sidecode)) {
      return `${this.licensePlate.substr(0, 2)}-${this.licensePlate.substr(2, 3)}-${this.licensePlate.substr(5, 1)}`;
    }

    if ([8, 10].includes(sidecode)) {
      return `${this.licensePlate.substr(0, 1)}-${this.licensePlate.substr(1, 3)}-${this.licensePlate.substr(4, 2)}`;
    }

    if ([11, 14].includes(sidecode)) {
      return `${this.licensePlate.substr(0, 3)}-${this.licensePlate.substr(3, 2)}-${this.licensePlate.substr(5, 1)}`;
    }

    if ([12, 13].includes(sidecode)) {
      return `${this.licensePlate.substr(0, 1)}-${this.licensePlate.substr(1, 2)}-${this.licensePlate.substr(3, 3)}`;
    }

    return this.licensePlate;
  }
}
