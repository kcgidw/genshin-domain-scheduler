import fs from 'fs';
import parse from 'csv-parse';

function buildUnits() {
	return new Promise(function (resolve, reject) {
		fs.readFile('./src/data/unit.csv', function (err, fileData) {
			parse(
				fileData,
				{ columns: true, trim: true },
				function (err, output) {
					if (err) {
						throw err;
					} else {
						console.log(output);
						fs.writeFileSync(
							'./src/data/units.json',
							JSON.stringify(output)
						);
					}
				}
			);
		});
	});
}

function buildWeapons() {
	return new Promise(function (resolve, reject) {
		fs.readFile('./src/data/weapon.csv', function (err, fileData) {
			parse(
				fileData,
				{ columns: true, trim: true },
				function (err, output) {
					if (err) {
						throw err;
					} else {
						fs.writeFileSync(
							'./src/data/weapons.json',
							JSON.stringify(output)
						);
					}
				}
			);
		});
	});
}

buildUnits();
buildWeapons();
