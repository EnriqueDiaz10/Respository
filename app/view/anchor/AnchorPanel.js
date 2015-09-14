Ext.define(
	'app17.view.anchor.AnchorPanel',
	{
		extend: 'Ext.panel.Panel',
		title:'Anchor Panel',
		defaults: {
        	bodyStyle: 'padding:15px'
    	},
    	xtype: 'anchorpanel',
    	layout: {
	        type: 'anchor'
    	},
    	items:
    	[
    		{
    			xtype: 'usuarioform',
    			itemId: 'one',
    			title:'One form',
    			anchor: '75% 50%'
    		},
    		{
    			xtype: 'usuarioform',
    			itemId: 'two',
    			title:'Two form',
    			anchor: '100% 50%'
    		}
    	]
	}
);