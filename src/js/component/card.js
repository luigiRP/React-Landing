import React from "react";

const Card = props => {
	return (
		<div class="card container" style={{ width: `18rem` }}>
			<img class="card-img-top" src={props.img} alt="Card image cap" />
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text">{props.description}</p>
				<a href="#" class="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
};
export default Card;
