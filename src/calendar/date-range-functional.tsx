import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { updateSampleSection } from '../common/sample-base';
import { CalendarComponent, ChangedEventArgs } from '@syncfusion/ej2-react-calendars';
import './daterange-style.css';

function Range() {
    React.useEffect(() => {
        updateSampleSection();
    }, [])
    const minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 7);
    const maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 27);

    function onchange(args: ChangedEventArgs): void {
        /*Displays selected date in the label*/
        (document.getElementById('date_label') as HTMLElement).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
    }

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className='calendar-control-section' style={{ overflow: 'auto' }}>
                    <CalendarComponent id="calendar" min={minDate} max={maxDate} change={onchange}></CalendarComponent>
                    <label id='date_label'>Selected Value:</label>
                </div>
            </div>
            <div id="action-description">
                <p>
                    In the following sample, a specific date ranges from 7th to 27th of a month has been set to select from the Calendar. All the other dates are out of range and <code>restricted</code> to set or select.
                </p>
            </div>
            <div id='description'>
                Date Range sample illustrates the date selection within a specific range in a calendar by using min and max properties.
                Here, the date selection range was resricted within  a range from 7th to 27th days in a month.
                <p>
                    More information on the calendar instantiation can be found in this <a target='_blank'
                            href='https://ej2.syncfusion.com/react/documentation/calendar/date-range/'>documentation</a> section.
                </p>
            </div>
        </div>
    )
}
export default Range;