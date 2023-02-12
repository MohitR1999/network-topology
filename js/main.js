// initialize side bar
initializeAppSideBar();

// Initialize layout
initializeAppTopologyLayout();

// initialize manage nodes page
initializeAppManageNodesLayout();

// initialize manage TLs page
initializeAppManageTlLayout();

// initialize manage services page
initializeAppManageServicesLayout();

// initialize side cell
initializeAppTopologySideCell();

// intialize graph cell
initializeAppTopologyGraphCell();

// initialize manage nodes body cell
initializeAppManageNodesBodyCell();

// initialize ribbon
initializeAppTopologyRibbon();

// initialize manage nodes ribbon
initializeAppManageNodesRibbon();

// initialize graph
initializeAppTopologyGraph();

// initialize manage nodes grid datastore
initializeAppManageNodesGridDataStore();

// initialize topology view side cell
initializeAppTopologyViewNodesGrid();

// initialize manage nodes grid
initializeAppManageNodesGrid();

// initialize node addition window
initializeAppNodeAdditionWindow();

// initialize node addition form
initializeAppNodeAdditionForm();


/**
 * Population logic starts here
 */
populateAppManageNodesDataStore();
populateAppTopologyViewGraph();

const wizardConfig = {
    id : "createBGP",
}

const wizardItems = [
    {
        id : "general_attributes",
        text : "General Attributes",
        icon : "res/icons/add_circle.svg",
        parent : "general_attributes"
    },

    {
        id : "endpoint_selection",
        text : "End Point Selection",
        icon : "res/icons/add.svg",
        parent : "endpoint_selection"
    },

    {
        id : "topology_selection",
        text : "Topology Selection",
        icon : "res/icons/hub.svg",
        parent : "topology_selection"
    }
]

let wizard = new Wizard("Create BGP", wizardConfig, wizardItems);
let generalAttributesCell = wizard.getCellById("general_attributes");
let generalAttributesPage = new GeneralAttributesPage("", "", "", generalAttributesCell, () => {
    console.log("General Attributes next");
    return true;
}, () => {
    console.log("General Attributes previous");
});

