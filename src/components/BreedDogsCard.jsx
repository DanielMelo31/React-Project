import { Link } from 'react-router-dom';

const BreedDogsCard = (props) => {
	return (
		<li class="breedCard">
			<Link to="/rhodesian">
				<div class="contenedorImagen">
					<img src={props.image} alt="Border Collie" />
				</div>
			</Link>

			<span class="breedTitle">{props.name}</span>
		</li>
	);
};

export default BreedDogsCard;
