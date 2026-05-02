import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useExtraClasses } from '../../../utils/helpers.js';
import { Icon } from '../Icon/Icon.jsx';
import styles from './Input.module.css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export const InputSizes = {
	small: 'small',
	large: 'large',
};

export const Input = ({
	extraClasses,
	inputStyles,
	isHidden,
	label,
	size,
	error,
	...props
}) => {
	const css = useExtraClasses(styles, extraClasses);

	const rootClasses = clsx(css.root, css[size], extraClasses, {
		[css.hidden]: isHidden,
	});

	const labelClasses = clsx(css.inputLabel, css.stackField, extraClasses);

	return (
		<div className={rootClasses}>
			{label && (
				<label
					htmlFor={props.id || props.name}
					className={labelClasses}
				>
					<span className={css.labelText}>{label}</span>
					<input
						id={props.id || props.name}
						className={css.input}
						aria-invalid={error ? 'true' : null}
						style={inputStyles}
						{...props}
					/>
					{error ? (
						<div className={css.errorText}>
							<Icon
								icon={faExclamationCircle}
								extraClasses={{ icon: css.errorIcon }}
							/>
							{error}
						</div>
					) : null}
				</label>
			)}
		</div>
	);
};

export default Input;

Input.defaultProps = {
	isHidden: null,
};

Input.propTypes = {
	isHidden: PropTypes.bool,
	error: PropTypes.string,
	/**
	 * Input size
	 */
	size: PropTypes.oneOf(Object.keys(InputSizes)),
};
