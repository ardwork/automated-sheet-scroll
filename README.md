# automated-sheet-scroll
A Qlik Sense extension allowing users to set an automated scroll through different sheets by setting a timer delay 
and a next sheet to each of the sheets they wish to present. Simple and controllable.

Instructions:
1. add the extension object 'auto sheet scroll' to each sheet you wish to be part of your automated presentation
(this extention object will appear as a blank section so keep it small and out of the way of your visualisations).
2. On each sheet update the settings; time delay until change and the sheet you wish to change to.
3. setup all sheets in a loop, i.e. the last sheet points back to the first one, if you wish to display a continuous loop

Example QVF:
please explore the example QVF included to see how simple this is to set up


