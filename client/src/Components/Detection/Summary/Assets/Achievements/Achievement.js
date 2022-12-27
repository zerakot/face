import React from 'react';

const achievementsBreakpoints = {
	workTime: [
		{from: 600000, to: 1800000, class: 'brown'},
		{from: 1800000, to: 3600000, class: 'silver'},
		{from: 3600000, to: Infinity, class: 'gold'},
	],
	ratio: [
		{to: Infinity, from: 10, class: 'gold'},
		{to: 10, from: 5, class: 'silver'},
		{to: 5, from: 2, class: 'brown'},
	],
};

export default function Achievement(props) {
	const achievementData = props.data;

	function calculateAchievementClass(data) {
		const colorClass = achievementsBreakpoints[data.name].find((el) => el.from <= data.value && el.to >= data.value)?.class || '';
		return colorClass;
	}

	return (
		<div className={`achievement ${calculateAchievementClass(achievementData)}`} title={achievementData.title}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="shield">
				<path d="M12 0c-3.436-.012-6.928 1.225-9 3v11.536c0 4.602 3.204 5.803 9 9.464 5.796-3.661 9-4.863 9-9.464v-11.536c-2.072-1.775-5.564-3.012-9-3z" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="type">
				<path d={achievementData.path} />
			</svg>
		</div>
	);
}
