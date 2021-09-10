import LicensePlate from '../src/license-plate';

describe('License Plate', () => {
  it('Should format sidecode 1 correctly', () => {
    expect(new LicensePlate('xx9999').pretty()).toEqual('XX-99-99');
    expect(new LicensePlate('xx-99-99').pretty()).toEqual('XX-99-99');
  });

  it('Should match sidecode 1 correctly', () => {
    expect(new LicensePlate('xx9999').sidecode()).toEqual(1);
    expect(new LicensePlate('xx-99-99').sidecode()).toEqual(1);
  });

  it('Should format sidecode 2 correctly', () => {
    expect(new LicensePlate('9999xx').pretty()).toEqual('99-99-XX');
    expect(new LicensePlate('99-99-xx').pretty()).toEqual('99-99-XX');
  });

  it('Should match sidecode 2 correctly', () => {
    expect(new LicensePlate('9999xx').sidecode()).toEqual(2);
    expect(new LicensePlate('99-99-xx').sidecode()).toEqual(2);
  });

  it('Should format sidecode 3 correctly', () => {
    expect(new LicensePlate('99xx99').pretty()).toEqual('99-XX-99');
    expect(new LicensePlate('99-xx-99').pretty()).toEqual('99-XX-99');
  });

  it('Should match sidecode 3 correctly', () => {
    expect(new LicensePlate('99xx99').sidecode()).toEqual(3);
    expect(new LicensePlate('99-xx-99').sidecode()).toEqual(3);
  });

  it('Should format sidecode 4 correctly', () => {
    expect(new LicensePlate('xx99xx').pretty()).toEqual('XX-99-XX');
    expect(new LicensePlate('xx-99-xx').pretty()).toEqual('XX-99-XX');
  });

  it('Should match sidecode 4 correctly', () => {
    expect(new LicensePlate('xx99xx').sidecode()).toEqual(4);
    expect(new LicensePlate('xx-99-xx').sidecode()).toEqual(4);
  });

  it('Should format sidecode 5 correctly', () => {
    expect(new LicensePlate('xxxx99').pretty()).toEqual('XX-XX-99');
    expect(new LicensePlate('xx-xx-99').pretty()).toEqual('XX-XX-99');
  });

  it('Should match sidecode 5 correctly', () => {
    expect(new LicensePlate('xxxx99').sidecode()).toEqual(5);
    expect(new LicensePlate('xx-xx-99').sidecode()).toEqual(5);
  });

  it('Should format sidecode 6 correctly', () => {
    expect(new LicensePlate('99xxxx').pretty()).toEqual('99-XX-XX');
    expect(new LicensePlate('99-xx-xx').pretty()).toEqual('99-XX-XX');
  });

  it('Should match sidecode 6 correctly', () => {
    expect(new LicensePlate('99xxxx').sidecode()).toEqual(6);
    expect(new LicensePlate('99-xx-xx').sidecode()).toEqual(6);
  });

  it('Should format sidecode 7 correctly', () => {
    expect(new LicensePlate('99xxx9').pretty()).toEqual('99-XXX-9');
    expect(new LicensePlate('99-xxx-9').pretty()).toEqual('99-XXX-9');
  });

  it('Should match sidecode 7 correctly', () => {
    expect(new LicensePlate('99xxx9').sidecode()).toEqual(7);
    expect(new LicensePlate('99-xxx-9').sidecode()).toEqual(7);
  });

  it('Should format sidecode 8 correctly', () => {
    expect(new LicensePlate('9xxx99').pretty()).toEqual('9-XXX-99');
    expect(new LicensePlate('9-xxx-99').pretty()).toEqual('9-XXX-99');
  });

  it('Should match sidecode 8 correctly', () => {
    expect(new LicensePlate('9xxx99').sidecode()).toEqual(8);
    expect(new LicensePlate('9-xxx-99').sidecode()).toEqual(8);
  });

  it('Should format sidecode 9 correctly', () => {
    expect(new LicensePlate('xx999x').pretty()).toEqual('XX-999-X');
    expect(new LicensePlate('xx-999-x').pretty()).toEqual('XX-999-X');
  });

  it('Should match sidecode 9 correctly', () => {
    expect(new LicensePlate('xx999x').sidecode()).toEqual(9);
    expect(new LicensePlate('xx-999-x').sidecode()).toEqual(9);
  });

  it('Should format sidecode 10 correctly', () => {
    expect(new LicensePlate('x999xx').pretty()).toEqual('X-999-XX');
    expect(new LicensePlate('x-999-xx').pretty()).toEqual('X-999-XX');
  });

  it('Should match sidecode 10 correctly', () => {
    expect(new LicensePlate('x999xx').sidecode()).toEqual(10);
    expect(new LicensePlate('x-999-xx').sidecode()).toEqual(10);
  });

  it('Should format sidecode 11 correctly', () => {
    expect(new LicensePlate('xxx99x').pretty()).toEqual('XXX-99-X');
    expect(new LicensePlate('xxx-99-x').pretty()).toEqual('XXX-99-X');
  });

  it('Should match sidecode 11 correctly', () => {
    expect(new LicensePlate('xxx99x').sidecode()).toEqual(11);
    expect(new LicensePlate('xxx-99-x').sidecode()).toEqual(11);
  });

  it('Should format sidecode 12 correctly', () => {
    expect(new LicensePlate('x99xxx').pretty()).toEqual('X-99-XXX');
    expect(new LicensePlate('x-99-xxx').pretty()).toEqual('X-99-XXX');
  });

  it('Should match sidecode 12 correctly', () => {
    expect(new LicensePlate('x99xxx').sidecode()).toEqual(12);
    expect(new LicensePlate('x-99-xxx').sidecode()).toEqual(12);
  });

  it('Should format sidecode 13 correctly', () => {
    expect(new LicensePlate('9xx999').pretty()).toEqual('9-XX-999');
    expect(new LicensePlate('9-xx-999').pretty()).toEqual('9-XX-999');
  });

  it('Should match sidecode 13 correctly', () => {
    expect(new LicensePlate('9xx999').sidecode()).toEqual(13);
    expect(new LicensePlate('9-xx-999').sidecode()).toEqual(13);
  });

  it('Should format sidecode 14 correctly', () => {
    expect(new LicensePlate('999xx9').pretty()).toEqual('999-XX-9');
    expect(new LicensePlate('999-xx-9').pretty()).toEqual('999-XX-9');
  });

  it('Should match sidecode 14 correctly', () => {
    expect(new LicensePlate('999xx9').sidecode()).toEqual(14);
    expect(new LicensePlate('999-xx-9').sidecode()).toEqual(14);
  });

  it('Should detect all forbidden words', () => {
    expect(new LicensePlate('x-99-gvd').valid()).toBeFalsy();
    expect(new LicensePlate('x-99-kkk').valid()).toBeFalsy();
    expect(new LicensePlate('x-99-kvt').valid()).toBeFalsy();
    expect(new LicensePlate('x-99-lpf').valid()).toBeFalsy();
    expect(new LicensePlate('x-99-nsb').valid()).toBeFalsy();
    expect(new LicensePlate('x-99-pkk').valid()).toBeFalsy();
    expect(new LicensePlate('x-99-psv').valid()).toBeFalsy();
    expect(new LicensePlate('x-99-sss').valid()).toBeFalsy();
    expect(new LicensePlate('x-99-sds').valid()).toBeFalsy();
  });

  it('Should not detect political parties in license plates that are under sidecode 7', () => {
    expect(new LicensePlate('14-VVD-4').valid()).toBeTruthy();
  });

  it('Should detect political parties in license plates that have sidecode of 7 or higher', () => {
    expect(new LicensePlate('99-PVV-9').valid()).toBeFalsy();
    expect(new LicensePlate('9-PVV-99').valid()).toBeFalsy();
    expect(new LicensePlate('PVV-99-X').valid()).toBeFalsy();
    expect(new LicensePlate('X-99-PVV').valid()).toBeFalsy();
  });

  it('Should detect political party VVD tp be invalid starting from sidecode 8', () => {
    expect(new LicensePlate('9-VVD-99').valid()).toBeFalsy();
    expect(new LicensePlate('VVD-99-X').valid()).toBeFalsy();
    expect(new LicensePlate('X-99-VVD').valid()).toBeFalsy();
  });

  it('Should not detect forbidden words that are not at the same spot', () => {
    expect(new LicensePlate('99-ak-kk').valid()).toBeTruthy();
    expect(new LicensePlate('99-ag-vd').valid()).toBeTruthy();
    expect(new LicensePlate('99-ak-vt').valid()).toBeTruthy();
    expect(new LicensePlate('99-al-pf').valid()).toBeTruthy();
    expect(new LicensePlate('99-an-sb').valid()).toBeTruthy();
    expect(new LicensePlate('99-ap-kk').valid()).toBeTruthy();
    expect(new LicensePlate('99-ap-sv').valid()).toBeTruthy();
    expect(new LicensePlate('99-as-sf').valid()).toBeTruthy();
    expect(new LicensePlate('99-as-df').valid()).toBeTruthy();
  });
});
