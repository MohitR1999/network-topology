function initializeAppSideBar() {
    appSideBar = new dhtmlXSideBar(APP_SIDEBAR_CONFIG);
}

// Layout initialization
function initializeAppTopologyLayout() {
    appLayout = appSideBar.cells("topology_view").attachLayout({
        pattern: APP_PATTERN,
    });
    appSideCell = appLayout.cells("a");
    appGraphCell = appLayout.cells("b");
    appLayout.setSeparatorSize(0, 0);
}

// initialize manage nodes layout
function initializeAppManageNodesLayout() {
    appManageNodesLayout = appSideBar.cells("manage_nodes").attachLayout({
        pattern: APP_MANAGE_NODES_PATTERN,
    });
    appManageNodesBodyCell = appManageNodesLayout.cells("a");
}

// initialize manage nodes layout
function initializeAppManageTlLayout() {
    appManageTlLayout = appSideBar.cells("manage_tl").attachLayout({
        pattern: APP_MANAGE_NODES_PATTERN,
    });
}

// initialize manage nodes layout
function initializeAppManageServicesLayout() {
    appManageServicesLayout = appSideBar.cells("manage_services").attachLayout({
        pattern: APP_MANAGE_NODES_PATTERN,
    });
}

// initialize app side cell
function initializeAppTopologySideCell() {
    appSideCell.hideHeader();
    appSideCell.setWidth(300);
}

// initialize app graph cell
function initializeAppTopologyGraphCell() {
    appGraphCell.hideHeader();
    appGraphCell.attachObject("graph");
}

// initialize manage nodes body cell
function initializeAppManageNodesBodyCell() {
    appManageNodesBodyCell.hideHeader();
}

// initialize manage nodes ribbon
function initializeAppManageNodesRibbon() {
    appManageNodesRibbon = appManageNodesLayout.attachRibbon(APP_MANAGE_NODES_RIBBON_CONFIG);
    appManageNodesRibbon.attachEvent("onClick", appManageNodesRibbonOnClickHandler);
}

// initialize app ribbon
function initializeAppTopologyRibbon() {
    appRibbon = appLayout.attachRibbon(APP_TOPOLOGY_VIEW_RIBBON_CONFIG);
    appRibbon.attachEvent("onClick", appRibbonOnClickHandler);
}

// initialize app graph
function initializeAppTopologyGraph() {
    appGraph = cytoscape({
        container: document.getElementById("graph")
    })
}

// initialize manage nodes grid
function initializeAppManageNodesGrid() {
    appManageNodesGrid = appManageNodesBodyCell.attachGrid();
    appManageNodesGrid.setHeader(APP_MANAGE_NODES_GRID_PROPS.columns.map(element => element.value).join(","));
    appManageNodesGrid.attachHeader(APP_MANAGE_NODES_GRID_PROPS.columns.map(element => element.filter).join(","));
    appManageNodesGrid.setColumnIds(APP_MANAGE_NODES_GRID_PROPS.columns.map(element => element.id).join(","));
    appManageNodesGrid.setInitWidths(APP_MANAGE_NODES_GRID_PROPS.columns.map(element => element.width).join(","));
    appManageNodesGrid.init();
    appManageNodesGrid.sync(appManageNodesGridDataStore);
}

// initialize manage nodes grid datastore
function initializeAppManageNodesGridDataStore() {
    appManageNodesGridDataStore = new dhtmlXDataStore();
}

// initialize node addition window
function initializeAppNodeAdditionWindow() {
    appNodeAdditionWindow = appLayout.dhxWins.createWindow("app_add_node", APP_NODE_ADDITION_WINDOW_PROPS.X, APP_NODE_ADDITION_WINDOW_PROPS.Y, APP_NODE_ADDITION_WINDOW_PROPS.WIDTH, APP_NODE_ADDITION_WINDOW_PROPS.HEIGHT);
    appNodeAdditionWindow.setText("Add a node");
    appNodeAdditionWindowStatusBar = appNodeAdditionWindow.attachStatusBar({
        text : "Add a node by specifying the IP address",
        height : 35
    });
    appNodeAdditionWindow.attachEvent("onClose", function(win) {
        appNodeAdditionForm.setItemValue("ip", "");
        appNodeAdditionWindow.hide();

    });
    appNodeAdditionWindow.center();
    appNodeAdditionWindow.hide();
}

// initialize node addition form
function initializeAppNodeAdditionForm() {
    appNodeAdditionForm = appNodeAdditionWindow.attachForm();
    appNodeAdditionForm.loadStruct(APP_NODE_ADDITION_FORM_CONFIG);
    appNodeAdditionForm.enableLiveValidation(true);
    appNodeAdditionForm.attachEvent("onButtonClick", appNodeAdditionFormOnButtonClickHandler);
}