// Layout initialization
function initializeAppLayout() {
    appLayout = new dhtmlXLayoutObject({
        parent : APP_PARENT_DIV,
        pattern : APP_PATTERN,
    });
    appSideCell = appLayout.cells("a");
    appGraphCell = appLayout.cells("b");
    appLayout.setSeparatorSize(0, 0);
}

// initialize app side cell
function initializeAppSideCell() {
    appSideCell.hideHeader();
    appSideCell.setWidth(350);
}

// initialize app graph cell
function initializeAppGraphCell() {
    appGraphCell.hideHeader();
}