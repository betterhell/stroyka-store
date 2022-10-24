import classes from "./_Button.module.scss"
import PropTypes from "prop-types"


const Button = ({label, icon, initialBg, disabled}) => {

    return (
        <button
            disabled={disabled}
            className={initialBg === "yellow" ? classes.buttonYellow : classes.button}
        >
            {icon && icon}
            <p>{label}</p>
        </button>
    )
};

Button.propTypes = {
    label: PropTypes.string,
}




export default Button;