import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout.js";

import CustomRoutes from "./routes/index.js";
import CustomSidebar from "./components/Sidebar/index.js";

import {setMovies, setSelectedMovie} from "./store/reducers/movies.reducer.js";
import {MOVIES_DATA} from "./constants/movies.js";

import './App.scss';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMovies(MOVIES_DATA.TendingNow))
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
