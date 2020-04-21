	// set up drop downs anywhere in the body of the page. I think the bottom of the page is better.. 
	// but you can experiment with effect on loadtime.
	if (mtDropDown.isSupported()) {

		//==================================================================================================
		// create a set of dropdowns
		//==================================================================================================
		// the first param should always be down, as it is here
		//
		// The second and third param are the top and left offset positions of the menus from their actuators
		// respectively. To make a menu appear a little to the left and bottom of an actuator, you could use
		// something like -5, 5
		//
		// The last parameter can be .topLeft, .bottomLeft, .topRight, or .bottomRight to inidicate the corner
		// of the actuator from which to measure the offset positions above. Here we are saying we want the 
		// menu to appear directly below the bottom left corner of the actuator
		//==================================================================================================
		var ms = new mtDropDownSet(mtDropDown.direction.down, -210, 0, mtDropDown.reference.bottomLeft);

		//==================================================================================================
		// create a dropdown menu
		//==================================================================================================
		// the first parameter should be the HTML element which will act actuator for the menu
		//==================================================================================================
	   
		

		var menu2 = ms.addMenu(document.getElementById("menu2"));

		menu2.addItem("- PC/OEM", "#.htm");
		menu2.addItem("- Retail Software", "#.htm");
		menu2.addItem("- B2B Software ", "/#.htm/");
		menu2.addItem("- Consumer Electronics/Wireless", "/#.htm/");
	//==================================================================================================

		//==================================================================================================
		// add a sub-menu
		//==================================================================================================
		// to add a sub menu to an existing menu object, call it's addMenu method and pass it the item from
		// the parent menu which should act as it's actuator. To add a submenu to the fourth item of a menu
		// called "theMenu", you would do theMenu.addMenu(theMenu.items[3])
		//==================================================================================================
		//var subMenu1 = menu2.addMenu(menu2.items[0]);
		//subMenu1.addItem("· Finished Products", "");
		//subMenu1.addItem("· API", "http:");
		//subMenu1.addItem("· Herbals", "");

      

		

		// menu : ABOUT LUPIN
		var menu3 = ms.addMenu(document.getElementById("menu3"));
		
		
		
		menu3.addItem("- CD/DVD Replication", "/#/"); // send no URL if nothing should happen onclick
		menu3.addItem("- CD-R and DVD-R Duplication", "/#/"); // send no URL if nothing should happen onclick
		menu3.addItem("- Print and Packaging", "#");
		menu3.addItem("- Assembly and Distribution", "/#/"); // send no URL if nothing should happen onclick
		menu3.addItem("- Industry Applications", "/#/"); // send no URL if nothing should happen onclick
				//==================================================================================================

		//==================================================================================================
		// add a sub-menu
		//==================================================================================================
		// to add a sub menu to an existing menu object, call it's addMenu method and pass it the item from
		// the parent menu which should act as it's actuator. To add a submenu to the fourth item of a menu
		// called "theMenu", you would do theMenu.addMenu(theMenu.items[3])
		//==================================================================================================
		//var subMenu1 = menu3.addMenu(menu3.items[0]);
		//subMenu1.addItem("· Finished Products", "");
		//subMenu1.addItem("· API", "http:");
		//subMenu1.addItem("· Herbals", "");

		
		//var subMenu1 = menu3.addMenu(menu3.items[1]);
		//subMenu1.addItem("· Finished Products", "");
		//subMenu1.addItem("· API", "http:");
		//subMenu1.addItem("· Herbals", "");

        //var subMenu1 = menu3.addMenu(menu3.items[2]);
		//subMenu1.addItem("· Finished Products", "");
		//subMenu1.addItem("· API", "http:");
		//subMenu1.addItem("· Herbals", "");


		// menu
		var menu4 = ms.addMenu(document.getElementById("menu4"));
		menu4.addItem("- Services Overview", "/login/");
		menu4.addItem("- CD/DVD Replication", "/kb/");
		menu4.addItem("- Component Sourcing", "/contact/");
		menu4.addItem("- Kitting and Assembly", "/contact/");
		menu4.addItem("- Fulfillment", "/contact/");
		menu4.addItem("- Warehousing and Distribution", "/contact/");
		menu4.addItem("- Returns", "/contact/");
		menu4.addItem("- Contact Center Services", "/contact/");

		// menu
		//var menu4 = ms.addMenu(document.getElementById("menu4"));
		//menu4.addItem("- Employment", "http://www.bdjokhakar.com/opportunities/employment/");
		//menu4.addItem("- Referral Program", "http://www.bdjokhakar.com/opportunities/referral_program/");
		//menu4.addItem("- Partnerships", "http://www.bdjokhakar.com/opportunities/partnerships/");
				
		 //menu : Company
		var menu5 = ms.addMenu(document.getElementById("menu5"));
		menu5.addItem("- Zomax Advantages", "/company/");
		menu5.addItem("- Program Management", "/contact/");
		menu5.addItem("- Visibility & Enabling Technologies", "/clients/");
		menu5.addItem("- End-to-End Solutions", "/success/");
		menu5.addItem("- Release Management", "/success/");
		menu5.addItem("- Global Footprint", "/success/");
		menu5.addItem("- Industry Expertise", "/success/");
		menu5.addItem("- Multi-Channel Distribution", "/success/");
		menu5.addItem("- Scalability and Quick-turn", "/success/");
		
		// menu : News
		var menu6 = ms.addMenu(document.getElementById("menu6"));
		menu6.addItem("- Customer Login", "company/");
		menu6.addItem("- Templates and Specifications", "contact/");
		
		 //menu : Company
		var menu7 = ms.addMenu(document.getElementById("menu7"));
		menu7.addItem("- Company Overview", "/company/");
		menu7.addItem("- Meet the Team", "/contact/");
		menu7.addItem("- Facilities", "/clients/");
		menu7.addItem("- Partners", "/success/");
		menu7.addItem("- In the News", "/success/");
		menu7.addItem("- Careers", "/success/");
		menu7.addItem("- Contact Us", "/success/");

		//==================================================================================================
		// write drop downs into page
		//==================================================================================================
		// this method writes all the HTML for the menus into the page with document.write(). It must be
		// called within the body of the HTML page.
		//==================================================================================================
		mtDropDown.renderAll();
	}
