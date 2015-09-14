Ext.define(
	'app17.view.accordion.AccordionPanel',
	{
		extend: 'Ext.panel.Panel',
		title:'Accordion Panel',
		defaults: {
        	bodyStyle: 'padding:15px'
    	},
    	xtype: 'accordionpanel',
    	layout: {
	        type: 'accordion',
	        titleCollapse: true,
	        animate: true,
	        activeOnTop: true
    	},
    	items:
    	[
    		{
    			xtype: 'usuarioform',
    			itemId: 'one',
    			title:'One form',
    			collapsible:true
    		},
    		{
    			xtype: 'usuarioform',
    			itemId: 'two',
    			title:'Two form',
    			collapsible:true
    		},
    		{
    			xtype: 'usuarioform',
    			itemId: 'three',
    			title:'Three form',
    			collapsible:true
    		}
    	]
	}
);
