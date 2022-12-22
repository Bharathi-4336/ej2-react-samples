/**
 * Sample for stripline
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLineSettingsModel,
    Legend, Category, LineSeries, Tooltip, ILoadedEventArgs, StripLine, ChartTheme
} from '@syncfusion/ej2-react-charts';
import { PropertyPane } from '../common/property-pane';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { updateSampleSection } from '../common/sample-base';
let xAxisStripLine: StripLineSettingsModel[] = [
    {
        start: -1, end: 1.5, text: 'Winter', color: 'url(#winter)',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
        border: { width: 0 }, rotation: -90, visible: true
    }, {
        start: 1.5, end: 3.5, text: 'Summer', color: 'url(#summer)',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
        border: { width: 0 }, rotation: -90, visible: true
    }, {
        start: 3.5, end: 4.5, text: 'Spring', color: 'url(#spring)',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
        border: { width: 0 }, rotation: -90, visible: true
    }, {
        start: 4.5, end: 5.5, text: 'Autumn', color: 'url(#autumn)',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
        border: { width: 0 }, rotation: -90, visible: true
    }, {
        start: 5.5, end: 7, text: 'Winter', color: 'url(#winter)',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
        border: { width: 0 }, rotation: -90, visible: true
    }, {
        startFromAxis: true, size: 2, isSegmented: true, segmentStart: 22.5, text: 'Average Temperature',
        segmentEnd: 27.5, visible: false, color: '#fc902a',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 }, rotation: 0
    }, {
        start: 3.5, size: 3, isSegmented: true, segmentStart: 22.5, text: 'Average Temperature',
        segmentEnd: 27.5, visible: false, color: '#fc902a',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 }, rotation: 0
    }, {
        start: 1.5, size: 2, isSegmented: true, segmentStart: 32.5, text: 'High Temperature',
        segmentEnd: 37.5, visible: false, color: '#ff512f',
        textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 }, rotation: 0
    }]
export let data: any[] = [
    { x: 'Sun', y: 25 }, { x: 'Mon', y: 27 }, { x: 'Tue', y: 33 }, { x: 'Wed', y: 36 },
    { x: 'Thu', y: 26 }, { x: 'Fri', y: 27.5 }, { x: 'Sat', y: 23 }];
const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }
     #winter stop {
         stop-color: #4ca1af;
     }
 
     #winter stop[offset="0"] {
         stop-color: #c4e0e5;
     }
 
     #winter stop[offset="1"] {
         stop-color: #4ca1af;
     }
 
     #summer stop {
         stop-color: #ffa751;
     }
 
     #summer stop[offset="0"] {
         stop-color: #ffe259;
     }
 
     #summer stop[offset="1"] {
         stop-color: #ffa751;
     }
 
     #spring stop {
         stop-color: #1d976c;
     }
 
     #spring stop[offset="0"] {
         stop-color: #93f9b9;
     }
 
     #spring stop[offset="1"] {
         stop-color: #1d976c;
     }
 
     #autumn stop {
         stop-color: #603813;
     }
 
     #autumn stop[offset="0"] {
         stop-color: #b29f94;
     }
 
     #autumn stop[offset="1"] {
         stop-color: #603813;
     }`;

function Stripline() {
    React.useEffect(() => {
        updateSampleSection();
    }, [])
    let chartInstance: ChartComponent;
    let dropElement: DropDownListComponent;
    let droplist: { [key: string]: Object }[] = [
        { value: 'Vertical' },
        { value: 'Horizontal' },
        { value: 'Segment' }
    ];
    let loaded: EmitType<ILoadedEventArgs>;
    function change(): void {
        chartInstance.series[0].fill = 'white';
        chartInstance.series[0].marker.fill = 'black';
        chartInstance.series[0].marker.border.color = 'white';
        for (let i: number = 0; i < 3; i++) {
            chartInstance.primaryYAxis.stripLines[i].visible = false;
        }
        if (dropElement.value === 'Vertical') {
            for (let i: number = 0; i <= 7; i++) {
                chartInstance.primaryXAxis.stripLines[i].visible = !chartInstance.primaryXAxis.stripLines[i].isSegmented;
            }
        } else if (dropElement.value === 'Horizontal') {
            for (let i: number = 0; i < 3; i++) {
                chartInstance.primaryYAxis.stripLines[i].visible = true;
            }
            for (let i: number = 0; i <= 7; i++) {
                chartInstance.primaryXAxis.stripLines[i].visible = false;
            }
        } else {
            for (let i: number = 0; i <= 7; i++) {
                chartInstance.primaryXAxis.stripLines[i].visible = chartInstance.primaryXAxis.stripLines[i].isSegmented;
            }
            chartInstance.series[0].fill = 'black';
            chartInstance.series[0].marker.fill = 'white';
            chartInstance.series[0].marker.border.color = 'black';
        }
        chartInstance.refresh();
    };
    return (
        <div className='control-pane'>
            <style>
                {SAMPLE_CSS}
            </style>

            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="winter" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient id="summer" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient id="spring" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient id="autumn" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" />
                        <stop offset="1" />
                    </linearGradient>
                </defs>
            </svg>
            <div className='control-section row'>
                <div className='col-md-8'>
                    <ChartComponent id='charts' ref={chart => chartInstance = chart}
                        primaryXAxis={{
                            valueType: 'Category', majorGridLines: { width: 0 },
                            stripLines: xAxisStripLine,  majorTickLines: {width : 0},
                            minorTickLines: {width: 0}
                        }}
                        load={load.bind(this)}
                        primaryYAxis={{
                            minimum: 10, maximum: 40, interval: 5,
                            lineStyle: { color: '#808080' }, labelFormat: '{value} °C', rangePadding: 'None',
                            stripLines: [
                                {
                                    start: 30, end: 40, text: 'High Temperature', color: '#ff512f', visible: false,
                                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 },
                                }, {
                                    start: 20, end: 30, text: 'Average Temperature', color: '#fc902a', visible: false,
                                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 },
                                }, {
                                    start: 10, end: 20, text: 'Low Temperature', visible: false,
                                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 }, color: '#f9d423'
                                }
                            ]
                        }}
                        tooltip={{
                            enable: true
                        }}
                        legendSettings={{ visible: false }}
                        loaded={onChartLoad.bind(this)}
                        title='Weather Report'>
                        <Inject services={[LineSeries, Category, Legend, Tooltip, StripLine]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} xName='x' yName='y' width={2} fill='white'
                                type='Line' name='Weather' marker={{ visible: true, width: 10, height: 10, border: { width: 2, color: 'white' }, fill: '#666666' }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
                <div className='col-md-4 property-section'>
                    <PropertyPane title='Properties'>
                        <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                            <tr style={{ height: '50px' }}>
                                <td style={{ width: '60%' }}>
                                    <div>StripLine Types:</div>
                                </td>
                                <td style={{ width: '40%' }}>
                                    <div>
                                        <DropDownListComponent width={120} id="selmode" style={{ "width": "auto" }} change={change.bind(this)} ref={d => dropElement = d} dataSource={droplist} fields={{ text: 'value', value: 'value' }} value="Vertical" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </PropertyPane>
                </div>
            </div>
            <div id="action-description">
                <p>
                    This sample highlights certain range in an axis by using stripline feature.
                </p>
            </div>
            <div id="description">
                <p>
                    In this example, you can see how to render and configure the stripline charts. You can use stripline by enable the
                    <code>visible</code> property. Striplines are rendered in the specified
                    <code>start</code> and
                    <code>end</code> range and you can add more than one stripline for an axis.
                </p>
                <p>
                    Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
                </p>
                <br></br>
                <p><b>Injecting Module</b></p>
                <p>
                    Chart component features are segregated into individual feature-wise modules. To use strip line feature, we need to inject
                    <code>StripLine</code> module using
                    <code>Chart.Inject(StripLine)</code> method.

                </p>
                <p>
                    More information on the strip line can be found in this <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
                </p>
            </div>
        </div>
    )
    function onChartLoad(args: ILoadedEventArgs): void {
        document.getElementById('charts').setAttribute('title', '');
    };
    function load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark") as ChartTheme;
    };
}
export default Stripline;