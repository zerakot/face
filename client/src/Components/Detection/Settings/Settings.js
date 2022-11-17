import {useEffect, useId} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateSettings, setAvailableWebcams} from '../../../redux/settingsManager';
import './Helpers.css';
import './Settings.css';

export default function Settings() {
	const id = useId();
	const dispatch = useDispatch();
	const {settings, availableWebcams} = useSelector((state) => state.settings);

	useEffect(() => {
		navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
			const availableList = mediaDevices
				.filter(({kind}) => kind === 'videoinput')
				.map((el) => {
					return {label: el.label, deviceId: el.deviceId};
				});
			dispatch(setAvailableWebcams([...availableList]));
		});
	}, [dispatch]);

	return (
		<div className="settings">
			<div className="themeSwitcher">
				<label htmlFor={`dark-mode-${id}`}>
					<input
						type="checkbox"
						id={`dark-mode-${id}`}
						name="darkMode"
						onChange={(e) => dispatch(updateSettings({name: e.target.name, value: !settings.darkMode}))}
						checked={settings.darkMode}
					/>
					<span className="slider"></span>
				</label>
			</div>
			<div className="setting">
				<label htmlFor={`select-camera-${id}`}>Select camera</label>
				<select name="cameraId" id={`select-camera-${id}`} onChange={(e) => dispatch(updateSettings({name: e.target.name, value: e.target.value}))} value={settings.cameraId}>
					{availableWebcams.map((camera, i) => {
						return (
							<option key={i} value={camera.deviceId}>
								{camera.label}
							</option>
						);
					})}
				</select>
			</div>

			<div className="setting">
				<label htmlFor={`sensitivity-${id}`}>Detection sensitivity</label>
				<input
					min="-12"
					max="-4"
					step="2"
					type="range"
					name="sensitivity"
					id={`sensitivity-${id}`}
					list={`sensitivity-datalist-${id}`}
					value={settings.sensitivity || '-8'}
					onChange={(e) => dispatch(updateSettings({name: e.target.name, value: e.target.value}))}
				/>
				<datalist id={`sensitivity-datalist-${id}`}>
					<option value="-12" label="Very soft"></option>
					<option value="-10" label=""></option>
					<option value="-8" label="Recommended"></option>
					<option value="-6" label=""></option>
					<option value="-4" label="Very strict"></option>
				</datalist>
			</div>

			<div className="setting">
				<label htmlFor={`detectionInterval-${id}`}>Detection interval</label>
				<input
					min="10" //30
					max="100" //120
					step="30"
					type="range"
					name="detectionInterval"
					id={`detectionInterval-${id}`}
					list={`detectionInterval-datalist-${id}`}
					value={settings.detectionInterval || '60'}
					onChange={(e) => dispatch(updateSettings({name: e.target.name, value: e.target.value}))}
				/>
				<datalist id={`detectionInterval-datalist-${id}`}>
					<option value="10" label="10 seconds"></option>
					<option value="40" label="40 seconds"></option>
					<option value="70" label="70 seconds"></option>
					<option value="100" label="100 seconds"></option>
					{/* <option value="30" label="30 seconds"></option>
                    <option value="60" label="60 seconds"></option>
                    <option value="90" label="90 seconds"></option>
                    <option value="120" label="120 seconds"></option> */}
				</datalist>
			</div>
		</div>
	);
}
