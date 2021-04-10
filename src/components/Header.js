const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}
//CSS in Js
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header

