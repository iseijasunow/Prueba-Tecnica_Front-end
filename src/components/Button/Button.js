const Button = ({ type, className, handleClick, textButton }) => {
  return (<button type={type} className={className} onClick={handleClick}>{textButton}</button>
  )
}

export default Button