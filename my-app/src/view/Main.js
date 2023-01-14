import React, { useState } from 'react'
import Cloud from '../assets/img/cloud.png'
import Partcloud from '../assets/img/partcloud.png'
import Rain from '../assets/img/partly-rain-cloud.png'
import Rainly from '../assets/img/rainly.png'
import Sunny from '../assets/img/sun.png'
import Wind from '../assets/img/wind.png'
import Clear from '../assets/img/uv.png'
import Snow from '../assets/img/single-weather-icon-cloud-with-snow-and-rain-DWDWPY.jpg'

export default function Main() {
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const [img, setImg] = useState([
        {
            img: Cloud,
            name: 'Clouds'
        },
        {
            img: Partcloud,
            name: 'Partcloud'
        },
        {
            img: Rain,
            name: 'Sunrain'
        },
        {
            img: Rainly,
            name: 'Rainly'
        },
        {
            img: Sunny,
            name: 'Sunny'
        },
        {
            img: Wind,
            name: 'Wind'
        },
        {
            img: Clear,
            name: 'Clear'
        },
        {
            img: Snow,
            name: 'Snow'
        }
    ])
    console.log(search)

    const ara = (e) => {
        const key = process.env.REACT_APP_WEATHER_DATA;

        if (e.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`)
                .then((data) => data.json())
                .then((next) => {
                    setSearch(next)
                    setShow(true)

                });
            console.log(search);
        }

    }
    return (
        <>
            <h1>WEATHER</h1>
            <div className="search">
                <input type="text" placeholder='add one...' onChange={(e) => setSearch(e.target.value)} value={search?.name} onKeyPress={ara} />
            </div>
            {
                show &&
                <div className="add">
                    <div className="reg">
                        <p className='reg'>{search?.name ? search?.name : 'City'}</p>
                        {
                                (
                                    img.map((items, index) => items.name.includes(search?.weather?.map(item => item.main)[0]) ?
                                        <img src={(items.img)} key={index} />
                                        : null
                                    ))
                            }
                            {/* <p className='weather'>{search?.weather?.map(item => item.main) ? search?.weather?.map(item => item.main) : 'weather'}</p> */}
                            <p className='weather'>{search?.weather?.map(item => item.main) ? search?.weather?.map(item => item.description) : 'weather'}</p>
                      
                    </div>
                    <div className="temp">
                        <p>
                            {Math.ceil(search?.main?.temp - 273.15) ? Math.ceil(search?.main?.temp - 273.15) + '°C' : '°C'}
                        </p>
                    </div>
                </div>
            }

        </>
    )
}
