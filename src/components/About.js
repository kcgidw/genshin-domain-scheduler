import React from 'react';

const About = () => {
	return (
		<div id="about" className="m-auto max-w-2xl p-4 md:p-0">
			<h1>Genshin Domain Scheduler</h1>
			<p>Dead-simple personalized domain schedules for Genshin Impact.</p>
			<p>
				Use the <strong>Customize</strong> view to add characters and
				weapons. The <strong>Schedule</strong> view will automatically
				update itself to show the relevant daily-domain materials for
				talents and weapons. Then click on materials to see more info,
				like domain locations.
			</p>
			<p>
				Looking for more features? Check out these tools from other
				fans:
			</p>
			<ul className="list-disc list-inside">
				<li>
					<a href="https://genshin.poporing.life/">
						Genshin Farming Calculator
					</a>
				</li>
				<li>
					<a href="https://genshin.chiya.dev/">Genshin Schedule</a>
				</li>
				<li>
					<a href="https://genshin-center.com/planner">
						Genshin Center - Ascension Planner
					</a>
				</li>
			</ul>
			<p>
				<a href="https://github.com/kcgidw/genshin-domain-scheduler">
					Github
				</a>{' '}
				- This webapp is a continual work in progress!
			</p>
			<p>
				<a href="https://ko-fi.com/krackocloud">Ko-fi</a>
			</p>
		</div>
	);
};

export default About;
