import React from 'react';
import s from './index.module.scss';

const Loader = () => {
    return (
        <div className={s.loader_container}>
            <div className={s.loader}/>
        </div>
    );
};

export default Loader;