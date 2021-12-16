import { Fragment } from 'react'
import HeaderCartButton from "./HeaderCartButton"
import classes from './Header.module.css'
import mealsimage from '../../assets/meals.jpg'


const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsimage}></img>
            </div>
        </Fragment>
    )
}

export default Header;
