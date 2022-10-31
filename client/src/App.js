import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Detction from './Components/Detection/Detection';
import {loadSettings} from './redux/settingsManager';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const {settings} = useSelector((state) => state.settings);

	useEffect(() => {
		dispatch(loadSettings());
	}, []);

	return (
		<div className="container" data-theme={settings.darkMode ? 'dark' : 'light'}>
			<Detction />
		</div>
	);
}

export default App;

/* 
	- Dark mode

*/
