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

// initialize app ribbon
function initializeAppTopologyRibbon() {
    appRibbon = appLayout.attachRibbon(APP_RIBBON_CONFIG);
    appRibbon.attachEvent("onClick", appRibbonOnClickHandler);
}

// initialize app graph
function initializeAppTopologyGraph() {
    appGraph = cytoscape({
        container: document.getElementById("graph")
    })
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