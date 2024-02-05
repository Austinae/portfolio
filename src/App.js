import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Stack from './components/Stack/Stack'
import Footer from './components/Footer'
import Resume from './components/Resume/ResumeNew'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Pre'
import './style.css'

const App = () => {
	const [load, upadateLoad] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false)
		}, 1200)

		return () => clearTimeout(timer)
	}, [])

	return (
		<Router>
			<Preloader load={load} />
			<div style={{textAlign: 'center'}} id={load ? "no-scroll" : "scroll"}>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project" element={<Projects />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/stack" element={<Stack />} />
					<Route path="*" element={<Navigate to="/"/>} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
