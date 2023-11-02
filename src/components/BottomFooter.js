// external dependencies
import React from 'react';

/** This is a functional component for creating the footer of the application
 */
function BottomFooter(props) {

	return (
		<div className="footer">
			<p>{ props.footerText }</p>
		</div>
	);
}
export default BottomFooter;