const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { InnerBlocks } = wp.blockEditor;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, ToggleControl, DateTimePicker } = wp.components;

/**
 * MOJBLOCKS: Schedule
 *
 * Schedule content to appear or disappear
 */
registerBlockType('mojblocks/scheduled', {
    title: __('Scheduled section', 'mojblocks'),
    description: __( 'Schedule a' ),
    icon: "clock",
    category: 'mojblocks',
    keywords: [ __( 'schedule' )],
    attributes: {
        controlTriggerDate: {
            type: 'string',
        //     default: new Date().toDateString()
        },
        controlShowOrHide: {
            type: 'boolean'
        },
        scheduledClassName: {
            type: 'string'
        }
    },

    edit: props => {
        const {
            setAttributes,
            attributes: {
                controlTriggerDate,
                controlShowOrHide
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ scheduledClassName: className });

        var details = getDetails(timeConverter(controlTriggerDate).time, timeConverter(controlTriggerDate).date, controlShowOrHide, timeConverter(controlTriggerDate).compare);

        return ([
            <InspectorControls>
                <PanelBody
                        title="Scheduling"
                        initialOpen={true}
                >
                    <PanelRow>
                        <ToggleControl
                            label="Remove or Reveal"
                            help={
                                controlShowOrHide
                                    ? controlTriggerDate 
                                        ? 'Content will appear after ' + timeConverter(controlTriggerDate).full
                                        : 'Content will appear after the selected time'
                                    : controlTriggerDate
                                        ? 'Content will be removed after ' + timeConverter(controlTriggerDate).full
                                        : 'Content will be removed after the selected time'
                           }
                            checked={controlShowOrHide}
                            onChange={newControlShowOrHide => setAttributes({ controlShowOrHide: newControlShowOrHide }) }
                        />
                    </PanelRow>
                    <DateTimePicker
                        currentDate={ controlTriggerDate }
                        onChange={newControlTriggerDate => setAttributes({ controlTriggerDate: newControlTriggerDate })}
                    />
                
                </PanelBody>
            </InspectorControls>,
            
            <div className={'scheduled-block scheduled-block--' + details.class + ' ' + className}>
                <div className="scheduled-block-warning-text">
                    {details.warning}
                </div>
                <InnerBlocks
                />
            </div>
        ])
      },

    // When using InnerBlocks with dynamic blocks, you need to return the content.
    save: () => {
        return <InnerBlocks.Content />;
    }
});

function timeConverter(datetime) {
    if (!datetime) {
        var a = new Date;
    } else {
        var a = new Date(Date.parse(datetime));
    }
    let now = new Date;
    if (now > a) {
        var compare = "past"; // Now is later than a
    } else {
        var compare = "future"; // Now is earlier than a
    }
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = String(a.getMonth() + 1).padStart(2, '0');
    let monthName = months[a.getMonth()];
    let day = a.getDate();
    let hour = String(a.getHours()).padStart(2, '0');
    let min = String(a.getMinutes()).padStart(2, '0');
    let sec = String(a.getSeconds()).padStart(2, '0');
    let data = {
        full:day+" "+monthName+" "+year+", "+hour+":"+min, 
        date:day+" "+monthName+" "+year, 
        time:hour+":"+min,
        logical:year+month+String(day).padStart(2, '0')+hour+min,
        sec:sec,
        compare:compare
    };
    return data;
}

function getDetails(triggerTime, triggerDate, showOrHide, comparison) {
    if (showOrHide && comparison == "future") {
        return {
            warning:"Currently hidden - will appear at " + triggerTime + " on " + triggerDate,
            class:"hidden"
        }
    }
    if (!showOrHide && comparison == "future") {
        return {
            warning:"Currently displayed - will be removed at " + triggerTime + " on " + triggerDate,
            class:"shown"
        }
    }
    if (showOrHide && comparison == "past") {
        return {
            warning:"Currently displayed - but was hidden before " + triggerTime + " on " + triggerDate,
            class:"shown"
        }
    }
    if (!showOrHide && comparison == "past") {
        return {
            warning:"Currently hidden - but was shown before " + triggerTime + " on " + triggerDate,
            class:"hidden"
        }
    }
}
