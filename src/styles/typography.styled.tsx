import { createGlobalStyle } from 'styled-components';

export const Typography = createGlobalStyle`
	*,
	*::before,
	*::after {
		font-family: var(--primary-font);
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--secondary-font);
	}
	
	h1 {
		font-size: 55px;
		font-weight: 800;
	}
	
	h2 {
		font-size: 36px;
		font-weight: 800;
	}
	
	h4 {
		font-size: 30px;
	}
	
	h5 {
		font-size: 24px;
	} 
`;
