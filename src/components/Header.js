import Button from './Button'

const Header = ( { text }) => {
  return (
    <div className="header">
        <h1>{text}</h1>
        <Button text = {'Add'} color = {'green'}/>
    </div>
  )
}

export default Header