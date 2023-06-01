export const handleAddInput = (inputs, setInputs) => {
	setInputs([...inputs, { id: inputs.length }]);
};
