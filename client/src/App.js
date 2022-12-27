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
	RFC
	- Sprawdź kod summary

	- Sprawdź i/lub popraw działanie korekcji
	- Nowe dane analityki: czas utrzymania dobrej pozycji
	- Opcja zakończenia pracy i podsumowanie (analitics, dobra passa)

	Commit:
	
*/
