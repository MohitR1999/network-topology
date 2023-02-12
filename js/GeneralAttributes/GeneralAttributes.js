class GeneralAttributesPage extends WizardPage {
    /**
     * Returns an object of General Attributes page
     * @param {String} id Unique ID of the page 
     * @param {Object} parent HTML element that would contain all the content of the wizard page
     */
    constructor(id, parent) {
        super(id, parent);
        this.layout = new dhtmlXLayoutObject(parent, "1C");
        this.contentCell = this.layout.cells("a");
        this.contentCell.hideHeader();
    }
}