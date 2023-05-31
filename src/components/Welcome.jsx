import './welcome.css'

export default function Welcome(){
	return(
		<>
		<div className='wrapper'>
			<nav>
			<h1>Dreami</h1>
				<ul className = 'nav-ul'>
					<li><a className="nav-link"> View All </a> |</li>
					<li><a className="nav-link"> Sleep Timer </a>|</li>
					<li><a className="nav-link"> About us </a> </li>
				</ul>
			</nav>
		</div>
		</>
	);
}