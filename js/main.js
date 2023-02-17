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
        icon : "res/icons/info.png",
    },

    {
        id : "endpoint_selection",
        text : "End Point Selection",
        icon : "res/icons/add.svg",
    },

    {
        id : "vrf_selection",
        text : "VRF Selection",
        icon : "res/icons/add.svg",
    },

    {
        id : "topology_selection",
        text : "Topology Selection",
        icon : "res/icons/hub.svg",
    }
]

let wizard = new Wizard("Create BGP", wizardConfig, wizardItems);
let generalAttributes = new GeneralAttributesPage("general_attributes", wizard.getCellById("general_attributes"));
let endPointSelection = new WizardPage("endpoint_selection", wizard.getCellById("endpoint_selection"));
let topologySelection = new TopologySelection("topology_selection", wizard.getCellById("topology_selection"));
let vrfSelection = new VRFConfiguration("vrf_selection", wizard.getCellById("vrf_selection"));
wizard.setItem(generalAttributes);
wizard.setItem(endPointSelection);
wizard.setItem(topologySelection);
wizard.setItem(vrfSelection);

