/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = "" // Default to an empty string to avoid undefined issues
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-primary ${classes}`} // Add space before classes
            >
                {label}

                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </button>
        );
    }
};


ButtonPrimary.prototype = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

/**
 * Outline Button
 */

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = "" // Default to an empty string to avoid undefined issues
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-outline ${classes}`} // Add space before classes
            >
                {label}

                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-outline ${classes}`}>
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </button>
        );
    }
};


ButtonPrimary.prototype = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}



export {
    ButtonPrimary,
    ButtonOutline
}
