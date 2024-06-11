import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import LoginFooter from './auth/loginComponents/footer/loginFooter'
import LoginNavbar from './auth/loginComponents/navbar/loginNavbar'



function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const checkUserToken = () => {
		const userToken = localStorage.getItem('user-token')
		if (!userToken || userToken === 'undefined') {
			setIsLoggedIn(false)
		} else {
			setIsLoggedIn(true)
		}
	}

	useEffect(() => {
		checkUserToken()
	}, [isLoggedIn])

	return (
		<React.Fragment>
			{isLoggedIn && <LoginNavbar/>}
			<Outlet />
			{isLoggedIn && <LoginFooter />}
		</React.Fragment>
	)
}

export default App
