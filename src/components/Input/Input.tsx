import React, { useState } from 'react'
import * as PT from 'prop-types'

const propTypes: {
	id: PT.Validator<string>
	label: PT.Validator<string>
	type?: PT.Requireable<string>
} = {
	id: PT.string.isRequired,
	label: PT.string.isRequired,
	type: PT.string,
}

type InputProps = PT.InferProps<typeof propTypes>

const Input: React.FC<InputProps> = ({ id = '', label = '', type = 'text' }) => {
	const [ value, handleChange ] = useState<string>('')
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id}
				data-testid={id}
				onChange={({ target }) => {
					handleChange(target.value)
				}}
				value={value}
			/>
		</div>
	)
}

Input.propTypes = propTypes

export default Input