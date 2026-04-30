import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useExtraClasses } from '../../../utils/helpers.js';
import { Icon } from '../Icon/Icon.jsx';
import styles from './Input.module.css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export const InputSizes = {
	small: 'small',
	large: 'large',
};

export const Input = ({ extraClasses, isHidden, label, error, ...props }) => {
	const css = useExtraClasses(styles, extraClasses);

	const rootClasses = classnames(css.root, {
		[css.hidden]: isHidden,
	});

	const labelClasses = classnames(css.inputLabel, css.stackField);

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
};
