import React from 'react';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import Detction from './Components/Detection/Detection';
import Homepage from './Components/Homepage/Homepage';
import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
	{
		path: '/app',
		element: <Detction />,
	},
]);

function App() {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

export default App;

/* 
	- Stwórz stronę główną
	- Sprawdź i/lub popraw działanie korekcji
	- Popraw kalibrację

	Commit:
	- Popraw błąd złego wyświetlania wysokości kalibracji
	- Dodaj podziałki na ustawienia pośrednie
*/
