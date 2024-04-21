import { useState } from "react"

import React, { useState } from 'react';

function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
			{isOpen && (
				<div>
					<p>Option A</p>
					<p>Option B</p>
					<p>Option C</p>
				</div>
			)}
		</div>
	);
}

export default Dropdown;