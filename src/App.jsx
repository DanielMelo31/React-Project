import logo from './logo.svg';
import './styles/App.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';
import appLogo from './media/logo.png';

function App() {
	return (
		<div className="App">
			<header>
				<ul class="navbar">
					<li>
						<img src={appLogo} alt="imagen" class="logo" />
					</li>
					<li>
						<button class="botonGenerico mainButton">Nuevo post</button>
					</li>
					<li>
						<div class="buscar">
							<input placeholder="Buscar una raza" />
							<i class="fas fa-search botonGenerico iconoBusqueda"></i>
						</div>
					</li>
					<li>
						<button class="botonGenerico secondaryButton">Login</button>
					</li>
					<li>
						<button class="botonGenerico mainButton">Registro</button>
					</li>
				</ul>
			</header>
			<main>
				<section>
					<h1>Razas de Perros</h1>
					<ul class="breedCardContainer">
						<MainDogCard name="BorderCollie" image={borderCollie}/>
						<MainDogCard name="Rhodesian" image={rhodesian}/>
					</ul>
				</section>
				<section></section>
			</main>
			<footer></footer>
		</div>
	);
}

const MainDogCard = (props) => {
	return (
		<li class="breedCard">
			<div class="contenedorImagen">
				<img src={props.image} alt="Border Collie" />
			</div>
			<span class="breedTitle">{props.name}</span>
		</li>
	)
}
export default App;
