# AngularChartsApp
Works on Angular 7+

### Installation
sudo npm install -g @angular/cli

ng new angular-charts-app


```sh
ng g c bar-chart
ng g c bubble-chart
ng g c line-chart
ng g c pie-chart
npm install bootstrap
```

### Bootstrap and Charts

Register the following in angular.json file
```sh
"styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css"
]
```

```sh
npm install ng2-charts chart.js --save
```

###### Add this statement in app.module.ts

import { ChartsModule } from 'ng2-charts';

imports: [
   .....
   ChartsModule
   .....
]


