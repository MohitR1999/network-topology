class GeneralAttributesPage extends WizardPage {
    /**
     * Returns an object of General Attributes page
     * @param {String} id Unique id of the wizard page 
     * @param {String} text title of the wizard page to be displayed in the sidebar
     * @param {String} icon icon to be used in the sidebar
     * @param {String} parent ID of the HTML element that would contain all the content of the wizard page
     * @param {Function} next Validation function to be run on clicking next
     * @param {Function} previous Optional function to be run on clicking previous
     */
    constructor(id, text, icon, parent, next, previous) {
        super(id, text, icon, parent, next, previous);
        this.layout = new dhtmlXLayoutObject(parent, "7I");
    }
}