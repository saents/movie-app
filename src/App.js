import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout.js";

import CustomRoutes from "./routes/index.js";
import CustomSidebar from "./components/Sidebar/index.js";

import {setMovies, setSelectedMovie, setSeenFilmsIds} from "./store/reducers/movies.reducer.js";
import { sortByTargetIds } from "./utils/helpers.js";

import {MOVIES_DATA} from "./constants/movies.js";

import './App.scss';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const films = MOVIES_DATA.TendingNow;
        const storedSeenFilmsIds = sessionStorage.getItem('seenFilms');
        if(storedSeenFilmsIds) {
            dispatch(setSeenFilmsIds(JSON.parse(storedSeenFilmsIds)));
            const sortedFilms = sortByTargetIds(films, JSON.parse(storedSeenFilmsIds));
            dispatch(setMovies(sortedFilms));
        } else {
            sessionStorage.setItem('seenFilms', JSON.stringify([]));
            dispatch(setMovies(films));
        }
        dispatch(setSelectedMovie(MOVIES_DATA.Featured))
    }, [dispatch])

    return (
        <Suspense fallback={'loading'}>
            <div className={'App'}>
                <Layout style={{width: '100%', height: '100%'}}>
                    <CustomSidebar/>
                    <Layout>
                        <Content>
                            <CustomRoutes/>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </Suspense>
    );
}

export default App;
