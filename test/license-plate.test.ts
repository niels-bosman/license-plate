import LicensePlate from '../src';

describe('License Plate', () => {
  it('Should format sidecode 1 correctly', () => {
    expect(LicensePlate.make('xx9999')).toEqual('XX-99-99');
    expect(LicensePlate.make('xx-99-99')).toEqual('XX-99-99');
  });

	it('Should format sidecode 2 correctly', () => {
		expect(LicensePlate.make('9999xx')).toEqual('99-99-XX');
		expect(LicensePlate.make('99-99-xx')).toEqual('99-99-XX');
	});

	it('Should format sidecode 3 correctly', () => {
		expect(LicensePlate.make('99xx99')).toEqual('99-XX-99');
		expect(LicensePlate.make('99-xx-99')).toEqual('99-XX-99');
	});

	it('Should format sidecode 4 correctly', () => {
		expect(LicensePlate.make('xx99xx')).toEqual('XX-99-XX');
		expect(LicensePlate.make('xx-99-xx')).toEqual('XX-99-XX');
	});

	it('Should format sidecode 5 correctly', () => {
		expect(LicensePlate.make('xxxx99')).toEqual('XX-XX-99');
		expect(LicensePlate.make('xx-xx-99')).toEqual('XX-XX-99');
	});

	it('Should format sidecode 6 correctly', () => {
		expect(LicensePlate.make('99xxxx')).toEqual('99-XX-XX');
		expect(LicensePlate.make('99-xx-xx')).toEqual('99-XX-XX');
	});

	it('Should format sidecode 7 correctly', () => {
		expect(LicensePlate.make('99xxx9')).toEqual('99-XXX-9');
		expect(LicensePlate.make('99-xxx-9')).toEqual('99-XXX-9');
	});

	it('Should format sidecode 8 correctly', () => {
		expect(LicensePlate.make('9xxx99')).toEqual('9-XXX-99');
		expect(LicensePlate.make('9-xxx-99')).toEqual('9-XXX-99');
	});

	it('Should format sidecode 9 correctly', () => {
		expect(LicensePlate.make('xx999x')).toEqual('XX-999-X');
		expect(LicensePlate.make('xx-999-x')).toEqual('XX-999-X');
	});

	it('Should format sidecode 10 correctly', () => {
		expect(LicensePlate.make('x999xx')).toEqual('X-999-XX');
		expect(LicensePlate.make('x-999-xx')).toEqual('X-999-XX');
	});

	it('Should format sidecode 11 correctly', () => {
		expect(LicensePlate.make('xxx99x')).toEqual('XXX-99-X');
		expect(LicensePlate.make('xxx-99-x')).toEqual('XXX-99-X');
	});

	it('Should format sidecode 12 correctly', () => {
		expect(LicensePlate.make('x99xxx')).toEqual('X-99-XXX');
		expect(LicensePlate.make('x-99-xxx')).toEqual('X-99-XXX');
	});

	it('Should format sidecode 13 correctly', () => {
		expect(LicensePlate.make('9xx999')).toEqual('9-XX-999');
		expect(LicensePlate.make('9-xx-999')).toEqual('9-XX-999');
	});

	it('Should format sidecode 14 correctly', () => {
		expect(LicensePlate.make('999xx9')).toEqual('999-XX-9');
		expect(LicensePlate.make('999-xx-9')).toEqual('999-XX-9');
	});
});
