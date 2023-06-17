export const ratingValue = (user, type) => {
	if (type === 'calculate') {
		let ratingValue = 0;
		user.ratings.forEach(
			item => (ratingValue = ratingValue + Number(item.rating))
		);
		if (user.ratings.length === 0) {
			return 0;
		} else {
			return ratingValue / user.ratings.length;
		}
	} else if (type === 'readOnly') {
		return user;
	}
};
