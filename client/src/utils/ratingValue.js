export const ratingValue = user => {
	let ratingValue = 0;
	user.ratings.forEach(
		item => (ratingValue = ratingValue + Number(item.rating))
	);
	return ratingValue / user.ratings.length;
};
