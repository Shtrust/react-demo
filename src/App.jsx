import "./App.css"
import Button from "./Button.jsx"
import Header from "./Header.jsx"



function App() {
	return (
		<div className>
			<Header></Header>
			<div className="stopwatch">
				<div className="timer">
					00 : 00
				</div>
				<div className="buttons">
					<Button title="START" bColor="#77E1A828" borColor="#77E1A8FF"></Button>
					<Button title="STOP" bColor="#E1777D28" borColor="#E1777DFF"></Button>
				</div>
			</div>
		</div>
	);
}


export default App
