import React from 'react';

const About = () => {
	return (
		<div id="about">
			<h1>Genshin Domain Scheduler</h1>
			<p>GDS is a simple domain schedule generator for Genshin Impact.</p>
			<p>
				Looking for more fleshed-out features? Try some of these fellow
				fansites:
				<ul className="list-disc list-inside">
					<li>
						<a href="https://genshin.poporing.life/">
							Genshin Farming Calculator
						</a>
					</li>
					<li>
						<a href="https://genshin-center.com/planner">
							Genshin Center - Ascension Planner
						</a>
					</li>
					<li>
						<a href="https://genshin.chiya.dev/">
							Genshin Schedule
						</a>
					</li>
				</ul>
			</p>
			<p>
				<a href="https://github.com/kcgidw/genshin-domain-scheduler">
					Github
				</a>
			</p>
		</div>
	);
};

export default About;
