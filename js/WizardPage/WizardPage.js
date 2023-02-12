class WizardPage {
    /**
     * 
     * @param {String} id Unique id of the wizard page 
     * @param {String} text title of the wizard page to be displayed in the sidebar
     * @param {String} icon icon to be used in the sidebar
     * @param {String} parent ID of the HTML element that would contain all the content of the wizard page
     * @param {Function} next Validation function to be run on clicking next
     * @param {Function} previous Optional function to be run on clicking previous
     */
    constructor(id, text, icon, parent, next, previous) {
        this.id = id;
        this.text = text;
        this.icon = icon;
        this.parent = parent;
        this.next = next;
        this.previous = previous;
    }
}