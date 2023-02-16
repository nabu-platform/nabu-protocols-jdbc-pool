Vue.view("dynamic-table", {
	props: {
		records: {
			type: Array,
			required: true
		},
		childComponents: {
			type: Object,
			required: false
		}
	},
	computed: {
		columns: function() {
			var columns = [];
			this.records.forEach(function(x) {
				Object.keys(x).forEach(function(key) {
					if (columns.indexOf(key) < 0) {
						columns.push(key);
					}
				})
			});
			return columns;
		}
	},
	methods: {
		getChildComponents: function() {
			return [{
				title: "Table",
				name: "table",
				component: "table"
			}, {
				title: "Table Column",
				name: "table-column",
				component: "table-column"
			}, {
				title: "Table Row",
				name: "table-row",
				component: "table-row"
			}, {
				title: "Header Typography",
				name: "typography-header",
				component: "content"
			}, {
				title: "Body Typography",
				name: "typography-body",
				component: "content"
			}];
		}
	}
})