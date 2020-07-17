import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from '../common/sample-base';
import { getDatasource, infiniteData } from './data';

// custom code start
const SAMPLE_CSS = `
.image {
        position: absolute;
        background-repeat: no-repeat;
        background-image: url('src/grid/images/spinner.gif');
        background-position: center;
        width: 16px;
        height: 28px;
    }

    .e-bigger .image {
        height: 36px;
    }
    
    #popup {
        position: absolute;
        background-color: transparent;
        display: none;
        z-index: 100;
    }
    .div-button{
        margin: 5px 5px 5px 0;
    }`;
// custom code end
export class InfiniteScrolling extends SampleBase<{}, {}> {
    public grid: GridComponent;
    public data: Object[] =[];
    public onclick() {
        if (!this.data.length) {
            getDatasource();
            this.grid.dataSource = this.data = infiniteData;
        }
    }
    render() {   
        return (
            <div className='control-pane'>
                <div className='control-section'>
                    <style>
                        {SAMPLE_CSS}
                    </style>
                    <div className='div-button'>
                        <ButtonComponent cssClass={'e-info'} onClick={this.onclick.bind(this)}>Load 100K Data</ButtonComponent>
                        <span id="popup">
                            <span id="gif" className="image"></span>
                        </span>
                    </div>
                    <GridComponent dataSource={[]} enableInfiniteScrolling={true} height={400} pageSettings={{ pageSize: 50 }}
                        ref={g => this.grid = g}>
                        <ColumnsDirective>
                            <ColumnDirective field='FIELD1' headerText='Player Name' width='130' ></ColumnDirective>
                            <ColumnDirective field='FIELD2' headerText='Year' width='100' ></ColumnDirective>
                            <ColumnDirective field='FIELD3' headerText='Stint' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD4' headerText='TMID' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD5' headerText='LGID' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD6' headerText='GP' width='120' ></ColumnDirective>
                            <ColumnDirective field='FIELD7' headerText='GS' width='120' ></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[InfiniteScroll]} />
                    </GridComponent>
                </div>
                <div id="action-description">
                    <p>This sample demonstrates the Grid component with the infinite scrolling feature.
    </p>
                </div>
                <div id='description'>
                    <p>
                    The Grid Infinite scrolling, allows to load data in lazy loading concept,
                    which means the buffer data is loaded only when the scrollbar reaches the end of the scroller.
                    To enable Infinite scrolling, set <code><a target="_blank" className="code"
                            href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#enableinfinitescrolling">
                            enableInfiniteScrolling </a></code> property as true.
                    </p>
                    <p>
                        Note: The <code><a target="_blank" className="code"
                            href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#height">
                            height</a></code> property must be defined when enabling <code><a target="_blank" className="code"
                                href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#enableinfinitescrolling">
                                enableInfiniteScrolling </a></code>.
                    </p>
                    <p>
                    This sample demonstrates the Grid component with the infinite scrolling feature.
                    </p>
                    <p style={{ fontWeight: 500 }}>Injecting Module:</p>
                    <p>Grid component features are segregated into individual feature-wise modules.
                         To use InfiniteScrolling feature, we need to inject <code>InfiniteScroll</code> module into the <code>services</code>.</p>
                </div>
            </div>
        )
    }
}