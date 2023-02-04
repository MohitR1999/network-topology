// Layout initialization
function initializeAppLayout() {
    appLayout = new dhtmlXLayoutObject({
        parent: APP_PARENT_DIV,
        pattern: APP_PATTERN,
    });
    appSideCell = appLayout.cells("a");
    appGraphCell = appLayout.cells("b");
    appLayout.setSeparatorSize(0, 0);
}

// initialize app side cell
function initializeAppSideCell() {
    appSideCell.hideHeader();
    appSideCell.setWidth(300);
}

// initialize app graph cell
function initializeAppGraphCell() {
    appGraphCell.hideHeader();
    appGraphCell.attachObject("graph");
}

// initialize app ribbon
function initializeAppRibbon() {
    appRibbon = appLayout.attachRibbon(APP_RIBBON_CONFIG);
    appRibbon.attachEvent("onClick", appRibbonOnClickHandler);
}

// initialize app graph
function initializeAppGraph() {
    appGraph = cytoscape({
        container: document.getElementById("graph")
    })
}

// initialize node addition window
function initializeAppNodeAdditionWindow() {
    appNodeAdditionWindow = appLayout.dhxWins.createWindow("app_add_node", 300, 100, 500, 500);
    appNodeAdditionWindow.setText("Add a node");
    appNodeAdditionWindowStatusBar = appNodeAdditionWindow.attachStatusBar({
        text : "Add a node by specifying the IP address",
        height : 35
    });
    appNodeAdditionWindow.attachEvent("onClose", function(win) {
        appNodeAdditionWindow.hide();
    });
    appNodeAdditionWindow.hide();
}