import BreedDogsCard from '../components/BreedDogsCard';
import '../styles/App.css';
import borderCollie from '../media/borderCollie.jpg';
import rhodesian from '../media/rhodesian.jpg';
import appLogo from '../media/logo.png';


function Index() {
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
						<BreedDogsCard name="BorderCollie" image={borderCollie} />
						<BreedDogsCard name="Rhodesian" image={rhodesian} />
					</ul>
				</section>
				<section></section>
			</main>
			<footer></footer>
		</div>
	);
}

export default Index;
