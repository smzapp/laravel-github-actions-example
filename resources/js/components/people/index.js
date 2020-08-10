
import ListPeople from './ListPeople';
import ItemPerson from './ItemPeople';

export default[
	{
		path:'/people?page=:page',
		component: ListPeople,
		name: 'people.paginate',
		meta:{
			title: 'Paginate'
		},
	},
	{
		path: '/people',
		component: ListPeople,
		name: 'people.list',
		meta: {
	      title: 'People List', 
	    }
	},
	{
		path: '/people/:id',
		component: ItemPerson,
		name: 'people.item',
		meta: {
			title: 'Person'
		}
	}
];