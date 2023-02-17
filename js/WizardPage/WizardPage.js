class WizardPage {
    /**
     * Returns a wizard page
     * @param {String} id ID of the wizard page
     * @param {Wizard} parentWizard Parent Wizard
     */
    constructor(id, parentWizard) {
        this.id = id;
        this.parentWizard = parentWizard;
    }

    /**
     * Validation function for the wizard page, to be overridden by respective pages
     * @returns {Boolean} whether the validation was successful or not
     */
    next() {
        return true;
    }

    /**
     * Function to be called when previous button is clicked
     * @returns {Boolean} whether we can navigate to the previous page or not
     */
    previous() {
        return true;
    }
}