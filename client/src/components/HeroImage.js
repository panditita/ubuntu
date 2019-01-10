import React from 'react';

function HeroImage(props) {
	return (
		<div class="cardContainer">
			<div class="card" style={{ width: '18rem' }}>
				<img class="card-img-top" src="http://i67.tinypic.com/1zumub.png" alt="Donation Card" />
				<div class="card-body">
					<p class="card-text">Do you believe in the work we do? Donate to keep us going!</p>
				</div>
			</div>
			<div class="card" style={{ width: '18rem' }}>
				<img class="card-img-top" src=".../100px180/?text=Image cap" alt="Hosting Card" />
				<div class="card-body">
					<p class="card-text">Have a spare room? Join our hosting scheme!</p>
				</div>
			</div>
		</div>
	);
}

export default HeroImage;
