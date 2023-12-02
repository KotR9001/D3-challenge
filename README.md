# D3-challenge
Data Journalism<br />
Link: https://kotr9001.github.io/D3-challenge/D3_data_journalism/index.html
<br />
Carried out an assignment to investigate the relationships between health and financial variables. Utilized D3 to allow transitions
with respect to dot positions on a scatter plot based on user selections.<br />
<br />
-First, defined SVG and chart dimensions.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/fb5a7838-9323-4c6d-b191-1156fc0e4a07)<br />
-Next, created a SVG element as well as a chart group inside of it.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/e4d96c5e-7e6e-4cf9-94ad-77bb5acbbc1c)<br />
-Then, used D3 to read in data from a CSV file, and created scaling functions to convert the data ranges to the right heights and
widths.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/a20ff0ac-b30e-4a42-aaae-179e295b4205)<br />
-Then created axes.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/8fab3100-b30d-46ad-b458-29373e1307c4)<br />
-After that, appended groups to the svg, created axis classes for each, and called the axes by them.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/763c4dfc-5e04-4f50-aa2c-661798359f82)<br />
-Appended dots to each of these groups, passing the circle locations to the appropriate scaling functions.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/60a92ab5-39f7-4367-9500-d8a9a94def01)<br />
-Appended state abbreviations text to each of the groups, passing the circle locations to the appropriate scaling functions.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/bf1eba05-832e-4689-8584-e0163044ddb1)<br />
-Appended axis titles to the left and bottom of the chart (all of the axes were present, while only the data for one XY axis pair
was to be plotted at any time).<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/8c163c04-9082-451c-bee1-b6669d3ae6e9)<br />
-Finally, set the initial axis colors to differentiate the axes that were selected vs those that weren't.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/2e805f9a-6d64-4589-9a10-d46ae84d0608)<br />
<br />
-As a bonus, utlized transitions on axis click to allow users to select the XY axis pairs they wanted such that the circle positions
would adjust to reflect the data.<br />
![image](https://github.com/KotR9001/D3-challenge/assets/57807780/abd7605d-2ab6-44ef-833c-a17e212f826a)<br />
