import React from "react";
import NavBar from "./navBar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div class="container">
				<div class="row">
					<Card
						className="col-4"
						title="Carta 1"
						description="descripcion 1"
						button="boton 1"
						img="https://via.placeholder.com/150"
					/>
					<Card
						className="col-4"
						title="Carta 2"
						description="descripcion 2"
						button="boton 2"
						img="https://via.placeholder.com/155"
					/>
					<Card
						className="col-4"
						title="Carta 3"
						description="descripcion 3"
						button="boton 3"
						img="https://via.placeholder.com/160"
					/>
				</div>
			</div>
		</div>
	);
}
