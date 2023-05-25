import { v4 } from 'uuid';

export const formatStringWithV4 = string => {
	const nameNoExtension = string.substring(0, string.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	return finalName;
};
