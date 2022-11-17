import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import WebcamPreview from './WebcamPreview/WebcamPreview';
import Settings from './Settings/Settings';
import Controls from './Controls/Controls';
import Analytics from './Analytics/Analytics';
import Notification from './Notification/Notification';

import {loadSettings} from '../../redux/settingsManager';
import './Detection.css';

export default function Detction() {
	const dispatch = useDispatch();
	const {settings} = useSelector((state) => state.settings);
	const {notificationVisiblity} = useSelector((state) => state.notifications);
	const {calibrationX} = useSelector((state) => state.detection);

	useEffect(() => {
		dispatch(loadSettings());
	}, []);

	return (
		<div className="container" data-theme={settings.darkMode ? 'dark' : 'light'}>
			<div className="detection">
				<WebcamPreview />
				<Controls />
				<Settings />
				<Analytics />
				{notificationVisiblity && <Notification />}
			</div>
		</div>
	);
}

/* 
        [
    {
        "x": "18:54:32",
        "y": 8.93
    },
    {
        "x": "18:54:37",
        "y": 8.36
    },
    {
        "x": "18:54:42",
        "y": 11.2
    },
    {
        "x": "18:54:47",
        "y": 6.17
    },
    {
        "x": "18:54:52",
        "y": 10.18
    },
    {
        "x": "18:54:57",
        "y": 11.21
    },
    {
        "x": "18:55:02",
        "y": -5.67
    },
    {
        "x": "18:55:07",
        "y": -1.1
    },
    {
        "x": "18:55:12",
        "y": 10.39
    },
    {
        "x": "18:55:17",
        "y": -4.09
    },
    {
        "x": "18:55:22",
        "y": -5.94
    },
    {
        "x": "18:55:27",
        "y": 8.78
    }
]
*/
