Ext.define(
	'app17.view.fit.FitPanel',
	{
		extend: 'Ext.panel.Panel',
		title:'Fit Panel',
		defaults: {
        	bodyStyle: 'padding:15px'
    	},
    	xtype: 'fitpanel',
    	layout: {
	        type: 'fit'
    	},
    	items:
    	[
    		{
    			xtype: 'usuarioform',
    			title:'One form',    			
    			collapsible: true
    		}
    	]
	}
);