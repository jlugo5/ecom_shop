import './from-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className='form-input'
            onChange={handleChange}
            {...otherProps}
        />
        <label className={`${otherProps.value.lenght ? 'shrink': ''} form-input-label`}>{label}</label>
    </div>
)

export default FormInput