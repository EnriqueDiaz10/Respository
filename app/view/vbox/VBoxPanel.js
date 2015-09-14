Ext.define(
	'app17.view.vbox.VBoxPanel',
	{
		extend: 'Ext.panel.Panel',
		title:'VBox Panel',
		defaults: {
        	bodyStyle: 'padding:15px'
    	},
    	xtype: 'vboxpanel',
    	layout: {
	        type: 'vbox',
	        align: 'stretch'
    	},
    	items:
    	[
    		{
    			xtype: 'usuarioform',
    			title:'One form',    			
    			collapsible: true,
    			flex:1
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