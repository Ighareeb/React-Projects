import { useContext } from 'react';
import PropTypes from 'prop-types';
import BrowserContext from './BrowserRouter.jsx';
export default function Link({ children, to }) {
	const { setCurrentURL } = useContext(BrowserContext);

	function handleNavigation() {
		window.history.pushState({}, '', to);
		setCurrentURL(new URL(window.location.origin + to));
	}
	return <a onClick={handleNavigation}>{children}</a>;
}

Link.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string,
};
