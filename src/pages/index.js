import { lazy } from "react";

export const Home = lazy(() => import('../pages/Home'));
export const Genres = lazy(() => import('../pages/Genres'));
export const Movies = lazy(() => import('../pages/Movies'));
export const TVShows = lazy(() => import('../pages/TVShows'));
export const WatchLater = lazy(() => import('../pages/WatchLater'));
