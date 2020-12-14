import React from 'react';

const About = () => {
	return (
		<div id="about" className="max-w-2xl">
			<h1>Genshin Domain Scheduler</h1>
			<p>Dead-simple personalized domain schedules for Genshin Impact.</p>
			<p>
				Use the <strong>Configure</strong> section to add characters and
				weapons, and the app will update the <strong>Schedule</strong>{' '}
				view with the relevant daily-domain talent and weapon ascension
				materials.
			</p>
			<p>
				In the <strong>Schedule</strong> view, click on materials to see
				more information on them (like which domain they're in).
			</p>
			<p>
				Looking for more features? Try checking out these fansites that
				I like:
				<ul className="list-disc list-inside">
					<li>
						<a href="https://genshin.poporing.life/">
							Genshin Farming Calculator
						</a>
					</li>
					<li>
						<a href="https://genshin.chiya.dev/">
							Genshin Schedule
						</a>
					</li>
					<li>
						<a href="https://genshin-center.com/planner">
							Genshin Center - Ascension Planner
						</a>
					</li>
				</ul>
			</p>
			<p>
				<a href="https://github.com/kcgidw/genshin-domain-scheduler">
					Github
				</a>{' '}
				- This webapp is a continual work in progress!
			</p>
			<p>
				(For those wondering, the Travelers aren't in the roster because
				the talent mats they need vary based on each talent's element
				and level.)
			</p>
		</div>
	);
};

export default About;
