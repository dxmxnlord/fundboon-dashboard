const navigation = {
	items: [
		{
		    id: 'actions',
		    title: 'Navigation',
		    type: 'group',
		    icon: 'icon-navigation',
		    children: [
		        {
		            id: 'dashboard',
		            title: 'Dashboard',
		            type: 'item',
		            url: '/admin/dashboard',
		            icon: 'feather icon-home',
		        },
		        {
		            id: 'profile',
		            title: 'Profile',
		            type: 'item',
		            url: '/admin/profile',
		            icon: 'feather icon-user',
				},
				{
		            id: 'application',
		            title: 'Application',
		            type: 'item',
		            url: '/admin/application',
		            icon: 'feather icon-camera',
		        }
				
		    ]
		},
	],
};

export default navigation;