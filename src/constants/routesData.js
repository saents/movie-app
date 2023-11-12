import SearchIcon from '../assets/icons/ICON - Search.png';
import HomeIcon from '../assets/icons/Group 46.png';
import MoviesIcon from '../assets/icons/Group 54.png';
import TVShowsIcon from '../assets/icons/Group 56.png';
import GenresIcon from '../assets/icons/Group 53.png';
import WatchLaterIcon from '../assets/icons/Group 47.png';

export const SIDEBAR_DATA = [
    'Language', 'Get Help',  'Exit'
];

export default [
    {url: '/search', text: 'Search', icon: SearchIcon},
    {url: '/', text: 'Home', icon: HomeIcon},
    {url: '/genres', text: 'Genres', icon: GenresIcon},
    {url: '/movies', text: 'Movies', icon: MoviesIcon},
    {url: '/tv-shows', text: 'TVShows', icon: TVShowsIcon},
    {url: '/watch-later', text: 'Watch Later', icon: WatchLaterIcon},
];