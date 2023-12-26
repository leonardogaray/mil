import Commons from './Commons';

class VIIRS {
    public async loadData(): Promise<any> {
        const response = await window.fetch(
            "https://firms.modaps.eosdis.nasa.gov/api/country/csv/76db7f998faeaeb1d02f68b315bb5a12/VIIRS_SNPP_NRT/ARG/1/" + Commons.todayFormatted(),{
                method: 'GET',
                headers: {
                    'Accept': 'text/csv',
                }
            }
        )

        const data = await response.text();
        if (response.ok) {
            let jsonData = Commons.csv2Json(data);
            return this.processData(jsonData);
        } else {
            return Promise.reject(response.statusText);
        }
    }

    private processData(lines: any) {

        const polygon: Array<[number, number]> = [
            [-60.7035826, -31.9551536],
            [-59.9875480, -32.7282481],
            [-59.3283683, -33.2261903],
            [-59.1306144, -33.1111758],
            [-58.4439689, -33.2813436],
            [-58.3615714, -34.0498202],
            [-58.4879142, -34.4903853],
            [-60.2457267, -33.3685985],
            [-60.7016593, -32.8991555],
            [-60.8115226, -32.5199454],
            [-60.7071524, -31.9574472],
            [-60.3555905, -32.3289323]
        ];
    
        const filteredFires = lines
            .filter((fire: any) => {
                const lat = parseFloat(fire.latitude);
                const lon = parseFloat(fire.longitude);
                return Commons.isPointInsidePolygon(lat, lon, polygon); //&& fire.confidence >= 40; 
                //delete ';//' in line 195 after '...(lat, lon, polygon) ' to filter shown hotspots, leaving only those that are likely to be real fires
            });
    
        return filteredFires;
    }
}

export default new VIIRS();