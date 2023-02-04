function appRibbonOnClickHandler(itemId) {
    if (itemId == "add_node") {
        appNodeAdditionWindow.show();
    }
}

function appNodeAdditionFormOnButtonClickHandler(name) {
    if (name == "proceed") {
        const ipAddress = appNodeAdditionForm.getItemValue("ip");
        appNodeAdditionWindow.progressOn();
        if (ipAddress) {
            appNodeAdditionWindowStatusBar.setText("Add a node by specifying the IP address");
            const requestBody = {
                ip: ipAddress
            };
            fetch(`${BASE_URL}/addnode`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    // reset the values and close the window
                    appNodeAdditionWindow.progressOff();
                    appNodeAdditionForm.setItemValue("ip", "");
                    appNodeAdditionWindow.hide();
                })
                .catch(err => {
                    console.log(err);
                    appNodeAdditionWindow.progressOff();
                    appNodeAdditionForm.setItemValue("ip", "");
                    appNodeAdditionWindow.hide();
                })

        } else {
            appNodeAdditionWindowStatusBar.setText("Please provide a valid IP address");
            appNodeAdditionWindow.progressOff();
        }
    }
}