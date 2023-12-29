import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const BrowserContext = createContext();
const routerState = {};
export default function BrowserRouter({ children }) {
	const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

	function handlePopStateEvent() {
		setCurrentURL(new URL(window.location.href));
	}
	useEffect(() => {
		window.addEventListener('popstate', handlePopStateEvent);

		return () => window.removeEventListener('popstate', handlePopStateEvent);
	}, []);

	return (
		<BrowserContext.Provider value={{ routerState, currentURL, setCurrentURL }}>
			{children}
		</BrowserContext.Provider>
	);
}

BrowserRouter.propTypes = {
	children: PropTypes.node,
};
