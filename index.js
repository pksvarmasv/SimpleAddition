//=======================================================
// Copyright (C) 2022, 2023, JANBAV.
// Author : Sudhir Varma
//=======================================================


var helpInfoArray= ["This section will teach you step by step how to add two numbers. For example: \n\n	1234 + 5678 \n",
		"Simple Addition \n\n This teaches you step by step how to add two numbers. For exmple: \n\n	1234 + 5678 \n",
		"Simple Addition \n\n This teaches you step by step how to add two numbers. For exmple: \n\n	1234 + 5678 \n",
		"Simple Addition \n\n This teaches you step by step how to add two numbers. For exmple: \n\n	1234 + 5678 \n"]; 

var	focused_element;
document.getElementById("helpInfo").addEventListener("blur", loseFocus);


function displayHelpInfo(txt) 
{
//	focused_element = document.activeElement;
	rect = focused_element.getBoundingClientRect();
	
	let hlpInfo = document.getElementById("helpInfo");
	let h = 100; ////screen.height;
	let w = 100; ///// screen.width;

	hlpInfo.style.visibility = "visible";

////	hlpinfo.style.position = 'relative';
////		hlpinfo.style.top = '10px';/// rect.top;
	////hlpinfo.style.left = '100px'; //// rect.left + 10;

////	hlpInfo.setAttribute("rows", h/20);
	hlpInfo.setAttribute("cols", w/2);
	hlpInfo.style.display = "block";
///	hlpInfo.setAttribute("hidden", "false")
    hlpInfo.style.height = 'auto';
	hlpInfo.value = txt;		
    hlpInfo.style.height = hlpInfo.scrollHeight + 'px';	
}
function loseFocus() {
	focused_element.focus();
// Shift+tab is working, but not tab. We probably want tab to go back to button, as well. 
}

function simpleAdditionInfo()
{
//	displayHelpInfo("Simple Addition \n");
	focused_element = document.activeElement;
	displayHelpInfo(helpInfoArray[0]);
	document.getElementById("helpInfo").focus();
}

function simpleSubtractionInfo()
{
	displayHelpInfo("Simple Subtraction\n");
}

function simpleMultiplicationInfo()
{
	displayHelpInfo("Simple Multiplication\n");
}

function polynomialDivisionInfo()
{
	displayHelpInfo("Polynomial Division\n");
}

function syntheticDivisionInfo()
{
	displayHelpInfo("Synthetic division \n");
}


function matrixAdditionInfo()
{
	displayHelpInfo("Matrix Addition\n");
}


// Creating tables, textarea etc., can be in a common .js file. So all sections with look consistent
// Create a settings button to change background, text size, contrast, .... Or use Windows/browser's settings???

// search for "javascript clickeable grid"
// How to Draw on a Canvas with Javascript,   Drawing on Canvas with Mouse Events | Javascript Bangla Tutorials
// Java Tutorial - Creating a Minesweeper - Part 03 (Box grid and mouse interaction)
// Multiplayer Tic-Tac-Toe Game in Python
// Mount devices vertically so we can have more resoultion in the X-axis. If we rotoate the board 90 deg, then Y resolution will be more// 
// but the software/GUI should know the board rotated 
//        | | | | | | 
//        | | | | | | 
///       | | | | | |
//  Also special mounting brackets to hold the sensor vertically. The mounters can also be used as pin. The bottom will support the sensor.
// Top will protrude like a pin/ball with smaller surface area than the sensor surface.
// Can the sensore be mounted horizontally but with padding(foam) between them so ones vibration does not affect the next. Then bring the 
// mounting pins up and then bend them to keep them closer? That way we can have more resolution. 

///// <textarea id="helpInfo" name="helpInfo" rows="0" cols="0" style="display:none;">
//// <textarea id="helpInfo" name="helpInfo" rows="0" cols="0">

// Help box should be dynmaically created and floating. On first time create the control. Then keep repositioning depending on where the 
// current click was. 