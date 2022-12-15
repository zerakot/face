import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

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

export default function Achievements() {
	const {workTime} = useSelector((state) => state.detection);
	const {logs} = useSelector((state) => state.analytics);
	const [achievementsColors, setAchievementsColors] = useState({});

	function calculateAchievementColor(name, value) {
		const colorClass = achievementsBreakpoints[name].find((el) => el.from <= value && el.to >= value)?.class || '';
		return colorClass;
	}

	useEffect(() => {
		setAchievementsColors({
			workTime: calculateAchievementColor('workTime', workTime),
			ratio: calculateAchievementColor('ratio', workTime / 30000 / logs.filter((el) => el.y < 0).length),
		});
	}, [workTime, logs]);

	return (
		<div className="achievements">
			<div className={`achievement ${achievementsColors.workTime}`}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="shield">
					<path d="M12 0c-3.436-.012-6.928 1.225-9 3v11.536c0 4.602 3.204 5.803 9 9.464 5.796-3.661 9-4.863 9-9.464v-11.536c-2.072-1.775-5.564-3.012-9-3z" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="type">
					<path d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.086 3.68c.567.677.571 1.625.009 2.306l-3.13 3.794c-.936 1.136-1.452 2.555-1.452 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-4.639 7.257l3.13 3.794c.652.792.996 1.726.996 2.83h-1.061c-.793-2.017-4.939-5-4.939-5s-4.147 2.983-4.94 5h-1.06c0-1.104.343-2.039.996-2.829l3.129-3.793c1.167-1.414 1.159-3.459-.019-4.864l-3.086-3.681c-.66-.785-1.02-1.736-1.02-2.834h12c0 1.101-.363 2.05-1.02 2.834l-3.087 3.68c-1.177 1.405-1.185 3.451-.019 4.863z" />
				</svg>
			</div>
			<div className={`achievement ${achievementsColors.ratio}`}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="shield">
					<path d="M12 0c-3.436-.012-6.928 1.225-9 3v11.536c0 4.602 3.204 5.803 9 9.464 5.796-3.661 9-4.863 9-9.464v-11.536c-2.072-1.775-5.564-3.012-9-3z" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="type">
					<path d="M19.744 21.158c-2.09 1.77-4.79 2.842-7.744 2.842-6.627 0-12-5.373-12-12 0-6.29 4.842-11.44 11-11.95v12.364l8.744 8.744zm-6.744-19.107c5.046.503 9 4.772 9 9.949 0 2.397-.85 4.6-2.262 6.324l1.42 1.42c1.77-2.09 2.842-4.79 2.842-7.744 0-6.29-4.842-11.44-11-11.95v2.001z" />
				</svg>
			</div>
		</div>
	);
}
