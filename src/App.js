import logo from './logo.svg';
import './styles/App.css';
import borderCollie from './media/borderCollie.jpg'
import rhodesian from './media/rhodesian.jpg'
import appLogo from './media/logo.png'

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
						<li class="breedCard">
							<div class="contenedorImagen">
								<img src={borderCollie} alt="Border Collie" />
							</div>
							<span class="breedTitle">Border Collie </span>
						</li>
						<li class="breedCard">
							<div class="contenedorImagen">
								<img src={rhodesian} alt="Border Collie" />
							</div>
							<span class="breedTitle">Rhodesian</span>
						</li>
					</ul>
				</section>
				<section></section>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;