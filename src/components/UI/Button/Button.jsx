import classes from "./_Button.module.scss"
import PropTypes from "prop-types"


const Button = ({action, label, icon, initialBg, disabled}) => {

    return (
        <button onClick={action}
            disabled={disabled}
            className={initialBg === "yellow" ? classes.buttonYellow : classes.button}
        >
            {icon}
            {label ? <p>{label}</p> : null}
        </button>
    )
};

Button.propTypes = {
    label: PropTypes.string,
}




export default Button;