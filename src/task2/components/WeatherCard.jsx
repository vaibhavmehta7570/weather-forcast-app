import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import weatherIcons from '../weatherIcons'

const WeatherCard = ({ weather }) => {
  const getIconClasses = () => {
    //importing class for given icon id from weatherIcons.js and adding the classes to weathericon tag
    let iconID = weather.iconID
    let classes = 'weathercard__icon wi wi-'
    let icon = weatherIcons[iconID].icon

    // If we are not in the ranges mentioned above, add a day/night prefix.
    icon =
      !(iconID > 699 && iconID < 800) && !(iconID > 899 && iconID < 1000)
        ? `day-${icon}`
        : icon
    return classes + icon
  }

  return (
    <article className="weathercard">
      <header className="weathercard__header">{weather.day}</header>
      <section className="weathercard__body">
        <section className="weathercard__body--info">
          <span className="weathercard__detail">{weather.city}</span>
          <span className="weathercard__detail">{weather.desc}</span>
        </section>
        <section className="weathercard__body--info">
          <div className="weathercard__temp">
            <span className="weathercard__maxMin">
              <span>
                {weather.temperatureMax}
                <span>&#176;</span>C
              </span>
              <FontAwesomeIcon className="faCaret faCaretUp" icon={faCaretUp} />
            </span>
            <span className="weathercard__maxMin">
              <span>
                {weather.temperatureMin}
                <span>&#176;</span>C{' '}
              </span>
              <FontAwesomeIcon
                className="faCaret faCaretDown"
                icon={faCaretDown}
              />
            </span>
          </div>
          <i className={getIconClasses()}></i>
        </section>
        <section className="weathercard__body--info">
          <span className="weathercard__detail weathercard__detail--thin">
            Humidity <br />
            {weather.humidity} %
          </span>
          <span className="weathercard__detail weathercard__detail--thin">
            Wind speed <br />
            {weather.windSpeed} knots
          </span>
        </section>
      </section>
    </article>
  )
}

export default WeatherCard
