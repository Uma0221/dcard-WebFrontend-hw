import {Link} from 'react-router-dom';
import citys from '../Json/citys.json';

function Aside({open, setOpen}) {

    return(
        <aside className={`${open?"sidebar open":"sidebar"}`}>
            <ul>
                {citys.map((city) => (
                    <li>
                        <Link onClick={()=>setOpen(!open)} className="city_box" to={`/dcard-webfrontend-hw/scenicSpot/${city.cityEnglish}`} city={city.cityEnglish}>
                            <div className="city">{city.cityChinese}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Aside;