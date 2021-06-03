import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { MenuItems } from '../data-storage/MenuItems'


function Dropdown(props) {

	const [click, setClick] = useState(false)

	const handleClick = () => setClick(!click)

	return (
		<>
			<ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
								{item.title}
							</Link>
						</li>
					)
				})}
			</ul>
		</>
	)

}

const mapStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapStateToProps)(Dropdown)