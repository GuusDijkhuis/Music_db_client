import React, { useEffect, useState } from 'react'; 
import { CssBaseline } from '@material-ui/core';

import Albums from './pages/albums';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<Albums />
		</div>
	);
}

export default App;