import axios from 'axios'
import { windDir, iconUrl } from '../modules/util'

const API_KEY = 'cd47a4d51d9109b2f5dbb40c33b27a60'
const CITY_URL = '/json/city.json'
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const WEEKLY_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const ICON_URL = 'https://openweathermap.org/img/wn/' // 10d@2x.png

const axCity = async () => {
	try {
		const r = await axios.get(CITY_URL);
		return r.data.cities;
	}
	catch(e) {
		console.log(e);
		return e;
	}
}

const axWeather = async (cityId) => {
	const params = { units: 'metric', appid: API_KEY, id: cityId };
	try {
		const daily = await axios.get(DAILY_URL, { params });
		const weekly = await axios.get(WEEKLY_URL, { params });
		// Daily
		daily.data.icon = iconUrl(daily.data.weather[0].icon, ICON_URL);
		daily.data.windDir = windDir(daily.data.wind.deg);

		// Weekly
		
		return { daily: daily.data, weekly: weekly.data };
	}
	catch(e) {
		console.log(e);
		return e;
	}
}

export { axCity, axWeather }