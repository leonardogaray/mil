class Commons {
    public isPointInsidePolygon(
        pointLat: number, pointLon: number, polygon: Array<[number, number]>
      ): boolean {
        const x = pointLon;
        const y = pointLat;
    
        let isInside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
          const xi = polygon[i][0];
          const yi = polygon[i][1];
          const xj = polygon[j][0];
          const yj = polygon[j][1];
    
          const intersect = ((yi > y) !== (yj > y)) &&
            (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
          if (intersect) {
            isInside = !isInside;
          }
        }

        return isInside;
    }

    public csv2Json(csv: string): any[] {
        let lines = csv.split("\n");
        let result: any = [];
        let headers = lines[0].split(",");
        for (let i = 1; i < lines.length - 1; i++) {
            let obj:any = {};
            let currentline = lines[i].split(",");
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return result;
    }

    public todayFormatted(): any{
      const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because January is 0
        const day = now.getDate().toString().padStart(2, '0');
    
        const todayDate = `${year}-${month}-${day}`;
        return todayDate;
    }
}

export default new Commons();