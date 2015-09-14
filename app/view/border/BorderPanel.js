Ext.define(
	'app17.view.border.BorderPanel',
	{
		extend: 'Ext.panel.Panel',
		title:'Border Panel',
		defaults: {
        	bodyStyle: 'padding:15px'
    	},
    	xtype: 'borderpanel',
    	layout: {
	        type: 'border'
    	},
    	items:
    	[
    		{
    			xtype: 'usuarioform',
    			itemId: 'one',
    			title:'One form',
    			region: 'center',
    			collapsible: true
    		},
    		{
    			xtype: 'usuarioform',
    			itemId: 'two',
    			title:'Two form',
    			region: 'south',
    			height: 300,
    			collapsible: true,
    			collapsed: true
    		},
    		{
    			xtype: 'usuarioform',
    			itemId: 'three',
    			title:'Three form',
    			region: 'east',
    			width: 400,
    			collapsible: true
    		}
    	]
	}
);