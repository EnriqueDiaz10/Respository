Ext.define(
	'app17.view.table.TablePanel',
	{
		extend: 'Ext.panel.Panel',
		title:'Table Panel',
		defaults: {
        	bodyStyle: 'padding:15px'
    	},
    	xtype: 'tablepanel',
    	layout: {
	        type: 'table',
	        columns: 3
    	},
    	items:
    	[
    		{
    			xtype: 'usuarioform',
    			title:'One form',    			
    			collapsible: true,
    			rowspan: 3
    		},
    		{
    			xtype: 'usuarioform',
    			title:'Two form',    			
    			collapsible: true,
    			colspan: 1
    		},
    		{
    			xtype: 'usuarioform',
    			title:'Three form',
    			collapsible: true,
    			colspan: 1
    		},
    		{
    			xtype: 'usuarioform',
    			title:'One form',    			
    			collapsible: true,
    			rowspan: 1
    		},
    		{
    			xtype: 'usuarioform',
    			title:'Two form',    			
    			collapsible: true,
    			rowspan: 1
    		},
    		{
    			xtype: 'usuarioform',
    			title:'Three form',
    			collapsible: true,
    			colspan: 1
    		}
    	]
	}
);