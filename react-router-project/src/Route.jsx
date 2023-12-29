import { useContext } from 'react';
import PropTypes from 'prop-types';
import { BrowserContext } from './BrowserRouter.jsx';
export default function Route({ children, path }) {
	const { currentURL } = useContext(BrowserContext);

	return currentURL.pathname === path ? (
		<>
			<h1>Route</h1>
			{children}
		</>
	) : null;
}

Route.propTypes = {
	children: PropTypes.node,
	path: PropTypes.string,
};
