////////////////////////////////////////////////////
//Version: 	1.0.0
//Author:  	Richard Byard
//Usage:	Automated sheet scroll extension scripts
//Date:		13 April 2016
////////////////////////////////////////////////////

define( [
        // Load the properties.js file using requireJS
        // Note: If you load .js files, omit the file extension, otherwhise
        // requireJS will not load it correctly 
		'jquery',
		'qlik' ,
        './properties/properties' //,
//		'./properties/initialProperties',
		/***********************
		This is used to reference specific CSS V2.0 upwards.
		QlikSense set the CSS class qv-object-[extension name] on your visualizations 
		and your CSS rules should be prefixed with that.
		************************/
//		'css!./automated-sheet-scroll.css'  
		
    ],
	
    function ( $, qlik, props/*, initProps, styleSheet*/) {
        'use strict';	
		//Inject Stylesheet into header of current document
//		$( '<style>' ).html(styleSheet).appendTo( 'head' );

        return {

			//Define the properties tab - these are defined in the properties.js file
             definition: props,
			
			//Define the data properties - how many rows and columns to load.
//			 initialProperties: initProps,
			
			//Not sure if there are any other options available here.
			  snapshot: {cantTakeSnapshot: true
			 }, 
			
			
			 
			 
//************************ ACTION ***********************************************
			//paint function creates the visualisation. - this one makes a very basic table with no selections etc.
            paint: function ( $element , layout ) {
				
				$element.empty();

				
				var selectedSheet = layout.selectedSheet;
				
				console.log('Sheet selected', selectedSheet);
				
				var timeDelay = layout.timeDelay;
				
				console.log('Time delay selected', timeDelay);
				
				if (qlik.navigation.getMode() != 'edit' ) {	
								
						setTimeout(function() {qlik.navigation.gotoSheet(selectedSheet);}, timeDelay);
								
						};
				
						
			}
			
        }
    }
);













