define( [

	'jquery',
	'qlik',
	'ng!$q',
	'ng!$http'


], function ($, qlik, $q, $http) {
    'use strict';
	//Define the current application
	var app = qlik.currApp();
	

	
    // *****************************************************************************
    // Dimensions & Measures
    // *****************************************************************************
    // var dimensions = {
        // uses: "dimensions",
        // min: 0,
        // max: 1
    // };

    // var measures = {
        // uses: "measures",
        // min: 0,
        // max: 1
    // };

    // *****************************************************************************
    // Appearance Section
    // *****************************************************************************
    // var appearanceSection = {
        // uses: "settings"
    // };
	
	// *****************************************************************************
    // Misc Section
    // *****************************************************************************

	
	//Create a function that returns a list of the sheets in the application
	var getSheetList = function (){
		var defer = $q.defer();

		app.getAppObjectList( function ( data ) {
			var sheets = [];
			var sortedData = _.sortBy( data.qAppObjectList.qItems, function ( item ) {
				return item.qData.rank;
			} );
			_.each( sortedData, function ( item ) {
				sheets.push( {
					value: item.qInfo.qId,
					label: item.qMeta.title
				} );
			} );
			return defer.resolve( sheets );
		} );

		return defer.promise;
	};

	
	// create sheet list
	var sheetList = {
		type: "string",
		component: "dropdown",
		label: "Select the destination sheet",
		ref: "selectedSheet",
		options: function () {
			return getSheetList().then( function ( items ) {
				return items;
			} );
		}
	};
	
	
	
	// create timer list
	var timeDelay = {
		type:"number",
		component: "dropdown",
		label: "Select time delay before moving to next sheet",
		ref:"timeDelay",
		defaultValue: 20000,
		options:[{
				value: 5000,
				label: "5 seconds"
				},{
				value: 10000,
				label: "10 seconds"
				},{
				value: 15000,
				label: "15 seconds"
				},{
				value: 20000,
				label: "20 seconds"
				},{
				value: 25000,
				label: "25 seconds"
				},{
				value: 30000,
				label: "30 seconds"
				},{
				value: 60000,
				label: "1 minute"
				}
				]		
	};
	
	
	
	
	
	// identify which variables from above will be shown in right hand options window. 
	var Options = {
		type:"items",
		label:"Options",
		items: {
			timeDelay:timeDelay,
			sheetList:sheetList
		}
	
	};
    // *****************************************************************************
    // Main property panel definition
    // ~~
    // Only what's defined here will be returned from properties.js
    // *****************************************************************************
	  
	//******************************************************************************
		
    return {
        type: "items",
        component: "accordion",
        items: {
            //Default Sections
			//dimensions: dimensions,
            //measures: measures,
            //appearance: appearanceSection,

			//Custom Sections
			Options: Options
			//MyColorPicker: MyColorPicker
			//miscSettings: miscSettings

        }
    };

} 

);
