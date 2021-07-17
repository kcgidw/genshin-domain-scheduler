import fs from 'fs';
import parse from 'csv-parse';

function buildUnits() {
	return new Promise(function(resolve, reject) {
		fs.readFile('./data/unit.csv', function(err, fileData) {
			parse(fileData, { columns: true, trim: true }, function(
				err,
				output
			) {
				if (err) {
					throw err;
				} else {
					console.log(output);
					fs.writeFileSync(
						'./data/units.json',
						JSON.stringify(output)
					);
				}
			});
		});
	});
}

function buildWeapons() {
	return new Promise(function(resolve, reject) {
		fs.readFile('./data/weapon.csv', function(err, fileData) {
			parse(fileData, { columns: true, trim: true }, function(
				err,
				output
			) {
				if (err) {
					throw err;
				} else {
					fs.writeFileSync(
						'./data/weapons.json',
						JSON.stringify(output)
					);
				}
			});
		});
	});
}

buildUnits();
buildWeapons();
