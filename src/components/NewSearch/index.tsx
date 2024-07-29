import style from './NewSearch.module.scss';

import { Link } from 'react-router-dom';

import { Search } from 'lucide-react';

function NewSearch() {
    return (
        <Link className={style.newSearch} to={'/'}>
            <Search size={16}/>
        </Link>
    )
}

export { NewSearch }