import units from './units.json';
import weapons from './weapons.json';
import domains from './domains';

const matsByDay = {
	mt: [],
	tf: [],
	ws: [],
};
Object.values(domains).forEach(domData => {
	matsByDay.mt.push(domData.dropSchedule.mt);
	matsByDay.tf.push(domData.dropSchedule.tf);
	matsByDay.ws.push(domData.dropSchedule.ws);
});

const data = {
	units,
	weapons,
	domains,
	matsByDay,
};
export default data;
