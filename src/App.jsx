import logo from "./logo.svg"
import "./App.css"
/*
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>WOOHOO! YOU DID IT!</h2>
				<p>If you got this far, it means you properly configured your environment and this project</p>
				<small>
					Edit <code>src/App.js</code> and save to reload.
				</small>
			</header>
		</div>
	)
}


*/

function App() {
	return (
		<div className="page">		
			<Header></Header>
			<div className="centerx">
				<Middlecomp></Middlecomp>
			</div>
		</div>
	);
}

function Header() {
	return (
	<header className="header">
		<p className="title">My Stopwatch</p>
		<p className="tag">By <a href="https://github.com/Shtrust" target="_blank">@Shtrust</a></p>
	</header>);
}

function Startbutton() {
	return (
		<button className="start">START</button>
	);
}
/*blabla*/

function Stopbutton() {
	return (
		<button className="stop">STOP</button>	
		);
}

function Startstop() {
	return (
		<div className="butcont">
			<Startbutton></Startbutton>
			<Stopbutton></Stopbutton>
		</div>
	);
}

function Stopwatch() {
	return (
		<div className="time">
			00:00
		</div>
	);
}

function Middlecomp() {
	return (
		<div className="display">
			<Stopwatch></Stopwatch>
			<Startstop></Startstop>
		</div>
	);
}


export default App
