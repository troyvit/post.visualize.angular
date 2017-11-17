import {Component} from '@angular/core';
import {DataService} from './data.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'content',
	templateUrl: './plant.component.html',
	styleUrls: ['./plant.component.css']
})

export class PlantCOmponent implements OnInit {
	
    /* This web app only works with Google Chrome */
    checkBrowser(){
	   var isChrome = !!window.chrome && !!window.chrome.webstore;
       if (!isChrome) {
            alert('Disculpe, esta aplicación no es apoyada en el navegador suyo. Haga el favor de bajar y instalar el navegador Google Chrome desde https://www.google.com/chrome/browser/desktop/');
            window.open('https://www.google.com/chrome/browser/desktop/', '_blank');
        }
    }
    
    /* Initialize the sync button */
    connectSyncButton() {
	   $('#sync-viz').click(function() {
        addSpinner('#spinnerDestination');
		updatePlantData(visualize);
	   });
       
	   $('#sync-table').click(function(){
        addSpinner('#spinnerDestination');
        updatePlantData(settable);
	   });
    }
    
    /*Initializes the visualization with default settings */
    initViz(){
        connectSyncButton();
  	    addSpinner('#spinnerDestination');
        updatePlantData(visualize);
    }
    
    constructor(
		private dataService: DataService,
		private route: ActivatedRoute) {
	}
}
