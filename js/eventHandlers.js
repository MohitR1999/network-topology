function appRibbonOnClickHandler(itemId) {
    if (itemId == "add_node") {
        appNodeAdditionWindow.show();
    } 
}

function appNodeAdditionFormOnButtonClickHandler(name) {
    if (name == "proceed") {
        const ipAddress = appNodeAdditionForm.getItemValue("ip");
        if (ipAddress) {
            appNodeAdditionWindowStatusBar.setText("Add a node by specifying the IP address");
            const requestBody = {
                ip : ipAddress
            };
            console.log(requestBody);
    
            // reset the values and close the window
            appNodeAdditionForm.setItemValue("ip", "");
            appNodeAdditionWindow.hide();
        } else {
            appNodeAdditionWindowStatusBar.setText("Please provide a valid IP address");
        }
    }
}