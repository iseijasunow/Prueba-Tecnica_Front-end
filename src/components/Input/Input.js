const Input = ({ onChange, value, placeholder, type, name, id, className }) => {
  return (<input type={type} className={className} placeholder={placeholder} onChange={onChange} value={value} name={name} id={id} />)
}

export default Input