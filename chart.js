console.log(seriesData)


$("#chart").kendoChart({
    title: {
        text: "Customer Payments by Vendor"
    },
    dataSource: {
        data: seriesData
    },
    series: [{
        field: "sales"
    }],
    valueAxis: [{
        labels: {
            format: "{0:C}"
        }
    }],
    categoryAxis: [{
        categories: vendorNames,
        labels: {
            rotation: -45,
        }
    }]
});