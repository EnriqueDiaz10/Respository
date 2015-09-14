Ext.define(
	'app17.view.hbox.HBoxPanel',
	{
		extend: 'Ext.panel.Panel',
		title:'HBox Panel',
		defaults: {
        	bodyStyle: 'padding:15px'
    	},
    	xtype: 'hboxpanel',
    	layout: {
	        type: 'hbox',
	        align: 'stretch'
    	},
    	items:
    	[
    		{
    			xtype: 'usuarioform',
    			title:'One form',    			
    			collapsible: true,
    			flex:2
    		},
    		{
    			xtype: 'usuarioform',
    			title:'Two form',    			
    			collapsible: true,
    			flex:1
    		},
    		{
    			xtype: 'usuarioform',
    			title:'Three form',
    			collapsible: true,
    			flex:1
    		}
    	]
	}
);