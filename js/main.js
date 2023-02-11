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
    },

    {
        id : "endpoint_selection",
        text : "End Point Selection",
        icon : "res/icons/add.svg"
    },

    {
        id : "topology_selection",
        text : "Topology Selection",
        icon : "res/icons/hub.svg"
    }
]

let wizard = new Wizard("Create BGP", wizardConfig, wizardItems);

