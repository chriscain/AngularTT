myApp.service('rowService', function() {

	var treeRows = [];
	var allTalents = [];

	return {
		generateRows: function(rows, columns){

			for (var i = 0; i < rows; i++)
			{
				//push our first row object onto the array of row objects
				treeRows[i] = {

					row_num: i,
					columns: []
				};
				for (var j = 0; j < columns; j++)
				{
					var col = {
						pointsIn: 0,
						maxPoints: '1',
						imageURL: 'http://demandbaselabs.com/ga/images/delete-icon.png',
						talentName: 'Untitled ' + (allTalents.length + 1),
						description: 'My Beautiful Description',
						row_id: i + 1,
						col_id: j + 1,
						disabled: false,
						per: 1,
						prereq: 'None'
					};
					treeRows[i].columns.push(col);
					allTalents.push(col);
				}
			}
		},

		addRow: function(columns){
			treeRows.push({
				columns: []
			});
			var lastIndex = treeRows.length - 1;
			for (var j = 0; j < columns; j++)
			{
				var col = {
					pointsIn: 0,
					maxPoints: 1,
					imageURL: 'http://demandbaselabs.com/ga/images/delete-icon.png',
					talentName: 'Untitled ' + (allTalents.length+1),
					row_id: lastIndex + 1,
					col_id: j + 1,
					disabled: false,
					per: 1,
					prereq: 'None'
				};
				treeRows[lastIndex].columns.push(col);
				allTalents.push(col);
			}
		},

		removeRow: function() {
			treeRows.pop();
		},
		treeRows: treeRows,
		talents: allTalents
	};
});