/**
 * Sample for 100 percent Stacked Area series
 */
import * as React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, ILoadedEventArgs, ChartTheme, SeriesDirective, Inject, Tooltip, DateTime,Highlight, StackingAreaSeries, Legend,
} from '@syncfusion/ej2-react-charts';
import { SampleBase } from '../common/sample-base';
import { Browser } from '@syncfusion/ej2-base';
export let data = [
  { x: new Date(2000, 0, 1), y: 0.61, y1: 0.03, y2: 0.48, y3: 0.23 },
  { x: new Date(2001, 0, 1), y: 0.81, y1: 0.05, y2: 0.53, y3: 0.17 },
  { x: new Date(2002, 0, 1), y: 0.91, y1: 0.06, y2: 0.57, y3: 0.17 },
  { x: new Date(2003, 0, 1), y: 1, y1: 0.09, y2: 0.61, y3: 0.2 },
  { x: new Date(2004, 0, 1), y: 1.19, y1: 0.14, y2: 0.63, y3: 0.23 },
  { x: new Date(2005, 0, 1), y: 1.47, y1: 0.2, y2: 0.64, y3: 0.36 },
  { x: new Date(2006, 0, 1), y: 1.74, y1: 0.29, y2: 0.66, y3: 0.43 },
  { x: new Date(2007, 0, 1), y: 1.98, y1: 0.46, y2: 0.76, y3: 0.52 },
  { x: new Date(2008, 0, 1), y: 1.99, y1: 0.64, y2: 0.77, y3: 0.72 },
  { x: new Date(2009, 0, 1), y: 1.7, y1: 0.75, y2: 0.55, y3: 1.29 },
  { x: new Date(2010, 0, 1), y: 1.48, y1: 1.06, y2: 0.54, y3: 1.38 },
  { x: new Date(2011, 0, 1), y: 1.38, y1: 1.25, y2: 0.57, y3: 1.82 },
  { x: new Date(2012, 0, 1), y: 1.66, y1: 1.55, y2: 0.61, y3: 2.16 },
  { x: new Date(2013, 0, 1), y: 1.66, y1: 1.55, y2: 0.67, y3: 2.51 },
  { x: new Date(2014, 0, 1), y: 1.67, y1: 1.65, y2: 0.67, y3: 2.61 },
];
const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }`;
export class StackedArea100 extends SampleBase<{}, {}> {
  render() {
    return (
      <div className="control-pane">
        <style>{SAMPLE_CSS}</style>
        <div className="control-section">
          <ChartComponent
            id="charts"
            style={{ textAlign: 'center' }}
            primaryXAxis={{ valueType: 'DateTime', majorGridLines: { width: 0 }, minimum: new Date(1999, 0, 1), maximum: new Date(2015, 0, 1), interval: 1, labelFormat: 'y', edgeLabelPlacement: 'Shift' }}
            width={Browser.isDevice ? '100%' : '75%'}
            legendSettings={{enableHighlight: true}}
            chartArea={{ border: { width: 0 } }}
            load={this.load.bind(this)}
            primaryYAxis={{ title: 'Amount of sales in €', majorGridLines: { width: 0 }, rangePadding: 'None', interval: 20 }}
            title="Sales by Payment Mode"
            loaded={this.onChartLoad.bind(this)}
            tooltip={{ enable: true }}
          >
            <Inject services={[StackingAreaSeries, DateTime, Tooltip, Legend, Highlight]} />
            <SeriesCollectionDirective>
              <SeriesDirective dataSource={data} xName="x" yName="y"  name="Bank-Transfer" opacity={1} type="StackingArea100" border={{ width: 0.5, color: '#ffffff' }}></SeriesDirective>
              <SeriesDirective dataSource={data} xName="x" yName="y1" name="Credit Card" opacity={1} type="StackingArea100" border={{ width: 0.5, color: '#ffffff' }}></SeriesDirective>
              <SeriesDirective dataSource={data} xName="x" yName="y2" name="Debit Card" opacity={1} type="StackingArea100" border={{ width: 0.5, color: '#ffffff' }}></SeriesDirective>
              <SeriesDirective dataSource={data} xName="x" yName="y3" name="Cash" type="StackingArea100" opacity={1} border={{ width: 0.5, color: '#ffffff' }}></SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>
                    <div style={{ float: 'right', marginRight: '10px' }}>Source: &nbsp;
                         <a href="https://www.gov.uk/" target='_blank'>www.gov.uk</a>
                    </div>
                </div>
                <div id="action-description">
                <p>
                This React 100% Stacked Area Chart example visualizes the amount of sales by payment mode  with default 100% stacked area series. A legend in the sample shows information about the series.
            </p>
                </div>
                <div id="description">
                    <p>
                    In this example, you can see how to render and configure the 100% stacked area chart. This chart visualizes data with y-values stacked, ensuring that the cumulative proportion of each stacked element always totals 100%.
                    </p>
                    <br></br>
                    <p><b>Injecting Module</b></p>
                    <p>
                        Chart component features are segregated into individual feature-wise modules. To use 100% stacking area series, we need to inject
                        <code>StackingAreaSeries</code> module into <code>services</code>.
                    </p>
                    <p>
                    More information about area type series can be found in this &nbsp;
                        <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/chart/chart-types/#area-charts">documentation section</a>.
                    </p>
                </div>
            </div>
        )
    }
    public onChartLoad(args: ILoadedEventArgs): void {
        let chart: Element = document.getElementById('charts');
        chart.setAttribute('title', '');

    };
        
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark") as ChartTheme;
    };
        
}