var seriesData = []
var vendorNames = []

d3.json("data.json").then(myjson => {
    myjson.forEach((dataObject) => {
    var total = 0;
    var remittances = dataObject.payment.remittance;
    if (Array.isArray(remittances)) {
        remittances.forEach((innerObject) => {
            total = total + innerObject.amount;
        })
    } else {
        total = total + remittances.amount
    }
    dataObject.payment.total_amount = Math.round(total * 100, 2) / 100;

    })

    myjson.forEach((dataObject) => {
        var mydict = {}
        mydict["sales"] = dataObject.payment.total_amount
        vendorNames.push(dataObject.payment.vendor.name)
        seriesData.push(mydict)
    })

    $("#chart").kendoChart({
        title: {
            text: "Customer Payments by Vendor"
        },
        dataSource: {
            data: seriesData
        },
        series: [{
            labels: {
                visible: true,
                format: "{0:C}"
            },
            field: "sales",
            color: "maroon"
        }],
        valueAxis: [{
            labels: {
                format: "{0:C}"
            },
            minorGridLines: {
                visible: false
            }
        }],
        categoryAxis: [{
            categories: vendorNames,
            labels: {
                rotation: -45,
            }
        }]
    })
})

