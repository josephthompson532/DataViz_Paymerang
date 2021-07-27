#DataViz_Paymerang

I first moved the given json data into a json file as well as created a js file for charts and an index.html file. Then I added the initial imports for d3 and kendo. From here I used d3.json to read the json file and loop over the json data while aggregating the remittances into a total_amount field within payment. I looped through once more and created a list of dictionaries holding the total_amount of each payment as well as a list of vendor names.

Once I had collected the data I needed into proper data structures for kendo, I created a bar graph to display the payment information. I felt a bar chart was the best choice here because the data is very simple and the only thing that really needed to be shown was the amount of each payment as well as the name of the vendor.
