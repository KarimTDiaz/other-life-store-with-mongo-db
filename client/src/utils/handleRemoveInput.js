export const handleRemoveInput = (id, inputs, setInputs) => {
	setInputs(inputs.filter(input => input.id !== id));
};
