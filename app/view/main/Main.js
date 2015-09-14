/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app17.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'app17.view.main.MainModel',
        'app17.view.accordion.AccordionPanel',
        'app17.view.anchor.AnchorPanel',
        'app17.view.border.BorderPanel',
        'app17.view.card.CardPanel',
        'app17.view.fit.FitPanel',
        'app17.view.hbox.HBoxPanel',
        'app17.view.vbox.VBoxPanel',
        'app17.view.table.TablePanel'        
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 5,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
	    {
	        title: 'Layout Accordion',
	        iconCls: 'fa-home',
	        layout: {
	        	type: 'border'
	        },
	        items: [
	        	{
	            	xtype: 'accordionpanel',
	            	region:'center'
	        	}
	        ]
	    },  
	    {
	        title: 'Layout anchor',
	        iconCls: 'fa-home',
	        layout:{
	        	type:'border'
	        },
	        items: [
	        	{
	            	xtype: 'anchorpanel',
	            	region:'center'
	        	}
	        ]
	    }, 
	    {
	        title: 'Layout Border',
	        iconCls: 'fa-home',
	        layout:{
	        	type: 'border'
	        },
	        items: [
	        	{
	            	xtype: 'borderpanel',
	            	region:'center'
	        	}
	        ]
	    },
	    {
	        title: 'Layout Card',
	        iconCls: 'fa-home',
	        layout:{
	        	type: 'border'
	        },
	        items: [
	        	{
	            	xtype: 'cardpanel',
	            	region:'center'
	        	}
	        ]
	    }, 
	    {
	        title: 'Layout Fit',
	        iconCls: 'fa-home',
	        layout:{
	        	type: 'border'
	        },
	        items: [
	        	{
	            	xtype: 'fitpanel',
	            	region:'center'
	        	}
	        ]
	    }, 
	    {
	        title: 'Layout HBox',
	        iconCls: 'fa-home',
	        layout:{
	        	type: 'border'
	        },
	        items: [
	        	{
	            	xtype: 'hboxpanel',
	            	region:'center'
	        	}
	        ]
	    }, 
	    {
	        title: 'Layout Table',
	        iconCls: 'fa-home',
	        layout:{
	        	type: 'border'
	        },
	        items: [
	        	{
	            	xtype: 'tablepanel',
	            	region:'center'
	        	}
	        ]
	    }, 
	    {
	        title: 'Layout VBox',
	        iconCls: 'fa-home',
	        layout:{
	        	type: 'border'
	        },
	        items: [
	        	{
	            	xtype: 'vboxpanel',
	            	region:'center'
	        	}
	        ]
	    }
	]
});
