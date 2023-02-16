<template id="dynamic-table">
	<table class="is-table" :class="getChildComponentClasses('table')">
		<thead>
			<tr>
				<th v-for="column in columns">
					<span class="is-content is-typography" :class="getChildComponentClasses('typography-header')">{{column}}</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="is-table-column" v-for="record in records" :class="getChildComponentClasses('table-row')">
				<td class="is-table-row" v-for="column in columns" :class="getChildComponentClasses('table-column')">
					<span class="is-content is-typography" :class="getChildComponentClasses('typography-body')">{{record[column]}}</span>
				</td>
			</tr>
		</tbody>
	</table>
</template>