Ext.define(
	'app17.view.card.CardPanel',
	{
		extend: 'Ext.panel.Panel',
		title:'Card Panel',
		defaults: {
        	bodyStyle: 'padding:15px'
    	},
    	xtype: 'cardpanel',
    	itemId:'cardpanel',
    	layout: {
	        type: 'card'
    	},
    	items:
    	[
    		{
    			xtype: 'usuarioform',
    			title:'One form',    			
    			collapsible: true
    		},
    		{
    			xtype: 'usuarioform',
    			title:'Two form',    			
    			collapsible: true
    		},
    		{
    			xtype: 'usuarioform',
    			title:'Three form',
    			collapsible: true
    		}
    	],
    	tbar: [
    		{
        		text: 'Next',
        		handler: function(){
        				var elems = Ext.ComponentQuery.query('#cardpanel');
        				var layout=null;
        				var main=null;
				        for (var i in elems) {
							try {
								layout = elems[i].getLayout();
							} catch(ex) {
							}
							try {
								main= elems[i];
							} catch(ex) {
							}
							if (Ext.isEmpty(main) != true) {
								break;
							}
							if (Ext.isEmpty(layout) != true) {
								break;
							}
						}
						var active=main.items.indexOf(layout.getActiveItem());        				
            			++active;
            			active=active%parseInt(main.items.length);
            			layout.setActiveItem(active);
            			active = main.items.indexOf(layout.getActiveItem());
            			//console.log(main.items);
        		}
    		}
    	]
	}
);