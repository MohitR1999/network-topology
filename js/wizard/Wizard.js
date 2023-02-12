class Wizard {
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
     * @param {String} items[].parent Parent div of the object to be added
     * @param {Object} layout Optional DHTMLX Layout object, if a layout is already being used
     */
    constructor(title, config, items, layout) {
        const _self = this;
        this.title = title;
        this.wizardWindow = null;
        this._itemsMap = items.reduce((accumulator, current) => {
            let object = current;
            accumulator[`${current.id}`] = {...current};
            return accumulator;
        }, {});
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
        this.wizardWindow.center();
        // create a datastore for the wizard
        this.datastore = new dhtmlXDataStore();
        // create a sidebar as well
        this.sidebar = this.wizardWindow.attachSidebar({
            template: "tiles",
            single_cell: "true"
        });
        this.sidebar.addItem(items);
        this.sidebar.cells(items[0].id).setActive(true);
        // attach a carousel that is always visible
        this.contentLayout = this.sidebar.cells().attachLayout({
            pattern: "2E",
        });
        this.contentLayout.setSeparatorSize(0, 0);
        this.navigationCell = this.contentLayout.cells("b");
        this.contentCell = this.contentLayout.cells("a");
        this.contentCarousel = this.contentCell.attachCarousel();
        this.contentCarousel.hideControls();
        for(let i = 0; i < items.length; i++) {
            this.contentCarousel.addCell(items[i].id, i);
            this.contentCarousel.cells(items[i].id).attachHTMLString(`<p>${items[i].text}</p>`)
        }
        
        this.navigationCell.hideHeader();
        this.navigationCell.setHeight(50);
        this.contentCell.hideHeader();
        const navigationFormStructure = [
            {
                type : "block", list : [
                    {
                        type : "button", name : "previous", value : "◄ Previous"
                    },

                    {
                        type : "newcolumn"
                    },

                    {
                        type : "button", name : "next", value : "Next ►", offsetLeft : 10
                    },
                ]    
            }
        ]
        this.navigationForm = this.navigationCell.attachForm(navigationFormStructure);
        this.navigationForm.attachEvent("onButtonClick", function(name) {
            let currentId = _self.contentCarousel.getActiveId();
            let currentObject = _self._itemsMap[currentId];
            if (name == "next") {
                if (currentObject.next()) {
                    _self.sidebar.goToNextItem(false);
                    _self.contentCarousel.goNext();
                }
            } else if (name == "previous") {
                if (currentObject.previous()) {
                    _self.sidebar.goToPrevItem(false);
                    _self.contentCarousel.goPrev();
                }
            }
        });
        this.sidebar.attachEvent("onBeforeSelect", function(id, lastId) {
            return false;
        });
    }
    /**
     * Appends an element in the last of the wizard
     * @param {Object} itemObject
     * @param itemObject.id The id of the item to be added
     * @param itemObject.text The text to be displayed
     * @param itemObject.icon The icon to be displayed
     */
    appendItem(itemObject) {
        this.sidebar.addItem(itemObject);
    }

    /**
     * Returns a cell by the given id
     * @param {String} cellId 
     * @returns {Object} The cell object
     */
    getCellById(cellId) {
        if (cellId) {
            return this.contentCarousel.cells(cellId);
        } else return null;
    }

    /**
     * Sets the next and previous function of the page object
     * @param {Object} pageObject The page object 
     * @param {String} pageObject.id The page object's id 
     * @param {Function} pageObject.next The page object's next function 
     * @param {Function} pageObject.previous The page object's previous function
     */
    setItem(pageObject) {
        this._itemsMap[pageObject.id].next = pageObject.next;
        this._itemsMap[pageObject.id].previous = pageObject.previous;
    }
}
