<h2>Qlik Sense Automated Sheet Scroll / Jump</h2>
<br>
<br>
A Qlik Sense extension allowing users to set an automated scroll through different sheets by setting a timer delay and a next sheet to each of the sheets they wish to present. Simple and controllable.
<br>
<br>
<br>
<h3>Instructions:</h3>
1. add the extension object 'auto sheet scroll' to each sheet you wish to be part of your automated presentation (this extention object will appear as a blank section so keep it small and out of the way of your visualisations).
<br>
<br>
2. On each sheet update the settings; time delay until change and the sheet you wish to change to.
<br>
<br>
3. setup all sheets in a loop, i.e. the last sheet points back to the first one, if you wish to display a continuous loop
<br>
<br>
<br>
<h3>Example QVF:</h3>
please explore the example QVF included to see how simple this is to set up. 
The object is in the top left hand corner of each sheet.
It is setup to loop through all 3 sheets continuously with a 10 second delay each time.
<br>
<br>
<br>
<h3>Testing</h3>
Tested with Qlik Sense 2.2.3

