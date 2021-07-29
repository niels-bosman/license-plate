export default class LicensePlate {
  /**
   * All Dutch sidecodes.
   *
   * @private
   * @type {RegExp[]}
   */
  private static sidecodes: RegExp[] = [
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
  private static licensePlate: string;

  /**
   * The matched sidecode based on input string.
   *
   * @private
   * @type {number}
   */
  private static sidecode: number;

  /**
   * Builds a new license plate based on input.
   *
   * @public
   * @param licensePlate {string} Given license plate.
   * @returns {string} The formatted license plate.
   */
  public static from(licensePlate: string): string {
    this.licensePlate = this.getPrettyLicensePlate(licensePlate);
    this.sidecode = this.getSidecode();

    return this.format();
  }

  /**
   * Finds the matching sidecode by the given license plate.
   *
   * @private
   * @return {number} The index of the sidecode.
   */
  private static getSidecode(): number {
    for (let sidecode of this.sidecodes) {
      if (this.licensePlate.match(sidecode)) {
        return this.sidecodes.indexOf(sidecode) + 1;
      }
    }

    return 0;
  }

  /**
   * Removes dashes from license plate and makes it uppercase.
   *
   * @private
   * @param licensePlate {string} Input license plate.
   * @returns {string} The pretty license plate.
   */
  private static getPrettyLicensePlate(licensePlate: string): string {
    return licensePlate.replace(/-/g, '').toUpperCase();
  }

  /**
   * Formats the input license plate to real license plate based on the matched sidecode.
   *
   * @private
   * @returns {string} The formatted license plate.
   */
  private static format(): string {
    if (this.sidecode <= 6) {
      return `${this.licensePlate.substr(0, 2)}-${this.licensePlate.substr(2, 2)}-${this.licensePlate.substr(4, 2)}`;
    }

    if ([7, 9].includes(this.sidecode)) {
      return `${this.licensePlate.substr(0, 2)}-${this.licensePlate.substr(2, 3)}-${this.licensePlate.substr(5, 1)}`;
    }

    if ([8, 10].includes(this.sidecode)) {
      return `${this.licensePlate.substr(0, 1)}-${this.licensePlate.substr(1, 3)}-${this.licensePlate.substr(4, 2)}`;
    }

    if ([11, 14].includes(this.sidecode)) {
      return `${this.licensePlate.substr(0, 3)}-${this.licensePlate.substr(3, 2)}-${this.licensePlate.substr(5, 1)}`;
    }

    if ([12, 13].includes(this.sidecode)) {
      return `${this.licensePlate.substr(0, 1)}-${this.licensePlate.substr(1, 2)}-${this.licensePlate.substr(3, 3)}`;
    }

    return this.licensePlate;
  }
}
