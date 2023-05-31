import Welcome from './components/Welcome'
import Sidebar from './components/Sidebar'
import MostRecent from './components/MostRecent'
import './main.css'

const DREAM_CATEGORIES = ['Good', 'Bad', 'Funny', 'Scary', 'Abstract']; 

const DREAM_ARR = [
	{
		title:"dream1",
		body:"dream description",
		date:'12/12/2022',
		category:'good/bad/scary/abstract/funny'
	},
		{
		title:"dream2",
		body:"dream description",
		date:'1/2/2023',
		category:'good/bad/scary/abstract/funny'
	},
	{
		title:"dream3",
		body:"dream description",
		date:'1/03/2023',
		category:'good/bad/scary/abstract/funny'
	},
	{
		title:"dream4",
		body:"dream description",
		date:'1/04/2023',
		category:'good/bad/scary/abstract/funny'
	},
	{
		title:"dream5",
		body:"dream description",
		date:'1/05/2023',
		category:'good/bad/scary/abstract/funny'
	},
];


export default function App(){
	return(
		<>
		<body>
		<Welcome/>
		<Sidebar/>
		<MostRecent />
		</body>
		</>
	);
}