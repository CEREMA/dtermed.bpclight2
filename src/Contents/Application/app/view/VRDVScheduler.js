App.view.define('VRDVScheduler', {
    extend: "Ext.window.Window",
    alias: 'widget.VRDVScheduler',
    initComponent: function() {
        this.width = 1024;
        this.height = 660;

        this.layout = {
            type: 'vbox'
        };

        this.bbar = [
        ];

        this.tbar = [
        ];
		
        this.defaults = {
            split: true
        };

        this.items = [
			{
				xtype: "schedulergrid",
				flex: 1,
				width: "100%",
			    startDate     : new Date(),
				endDate       : new Date(),
				startTime     : 8,
				endTime       : 18,
				
                resourceStore : App.resourcestore.create({
					data:[        
							{ Id : 'r0', Name : 'Unassigned', Color : '#000' }
						 ]
				}),
                
				eventStore    : App.eventstore.create({
					fields:[],
					data:[]
				}),
                
				style         : 'border: 1px solid #d0d0d0;',

				showTodayLine : true,
    			calendarColumnClass : 'App.column.Day',
				calendarViewPreset   : 'week',
				mode                 : 'calendar',
				eventResizeHandles   : 'end',
				eventBodyTemplate    : '{Name}',
				snapToIncrement      : true,
				highlightCurrentTime : true,
				calendarTimeAxisCfg  : {
        			height : 30
    			}
                
			}
		];

        this.callParent();
    }
});