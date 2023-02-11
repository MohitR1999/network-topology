/**
 * Creates a new window with a set of configurations
 * @param {String} title Title of the wizard
 * @param {Object} config Set of configuration options for the window
 * @param config.id The id of the window
 * @param config.x The X position of the window
 * @param config.y The Y position of the window
 * @param config.width The width of the window
 * @param config.height The height of the window
 * @param {Object[]} items Array of items to be added in the sidebar as well as carousel
 * @param {String} items[].id Unique ID of the item to be added
 * @param {String} items[].text Text which will be displayed in the sidebar
 * @param {String} items[].icon Icon path of the item to be added
 * @param {Object} layout Optional DHTMLX Layout object, if a layout is already being used
 */
function Wizard(title, config, items, layout) {
    let _self = this;
    this.title = title;
    this.wizardWindow = null;
    if (!config.width) {
        config.width = window.innerWidth * 0.9;
    }

    if (!config.height) {
        config.height = window.innerHeight * 0.9;
    }

    if (!config.x) {
        config.x = 10;
    }

    if (!config.y) {
        config.y = 10;
    }

    if (!config.id) {
        config.id = `${config.width}|${config.height}|${config.x}|${config.y}`;
    }

    if (layout) {
        // We have a layout already so we can use it to create the window to optimize performance
        this.wizardWindow = layout.dhxWins.createWindow(config.id, config.x, config.y, config.width, config.height);
    } else {
        // create a new window
        let wizardWindows = new dhtmlXWindows();
        this.wizardWindow = wizardWindows.createWindow(config.id, config.x, config.y, config.width, config.height);
    }
    // set the title of the window
    this.wizardWindow.setText(this.title);
    // create a sidebar as well
    this.sidebar = this.wizardWindow.attachSidebar({
        template : "tiles",
        single_cell : "true"
    });
    this.sidebar.addItem(items);
    // attach a carousel that is always visible
    this.carousel = this.sidebar.cells().attachCarousel({
        effect : "slide"
    });
    for(let i = 0; i < items.length; i++) {
        this.carousel.addCell(items[i].id, i);
    }

    // navigate to the first cell in carousel
    this.carousel.goFirst();
    this.sidebar.cells(items[0].id).setActive(true);
    
    // create a datastore for the wizard
    this.datastore = new dhtmlXDataStore();
    
    this.sidebar.attachEvent("onSelect", function(id, lastId) {
        _self.carousel.cells(id).setActive(true);
    });
    
    this.carousel.attachEvent("onSelect", function(id) {
        _self.sidebar.cells(id).setActive(true);
    });

    this.wizardWindow.center();
}
/**
 * Appends an element in the last of the wizard
 * @param {Object} itemObject
 * @param itemObject.id The id of the item to be added
 * @param itemObject.text The text to be displayed 
 * @param itemObject.icon The icon to be displayed 
 */
Wizard.prototype.appendItem = function(itemObject) {
    this.sidebar.addItem(itemObject);
}