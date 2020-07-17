/**
 * Sample for custom content
 */
import * as ReactDOM from 'react-dom';
import * as React from "react";
import {
    ProgressBarComponent, ProgressBarAnnotationsDirective, ProgressBarAnnotationDirective, Inject,
    ProgressAnnotation, ILoadedEventArgs, ProgressTheme, IProgressValueEventArgs
} from '@syncfusion/ej2-react-progressbar';
import { SampleBase } from '../common/sample-base';
import { EmitType } from '@syncfusion/ej2-base';


const SAMPLE_CSS = `
        .control-fluid {
		padding: 0px !important;
        }
   #control-container {
        padding: 0px !important;
    }

    #reLoad {
        border-radius: 4px;
        text-transform: capitalize;
        margin-top: 3%;
    }

    #full-background_Circulartrack {
        opacity: 1 !important;
    }
    .reload-btn {
        text-align: center;
    }
    #reLoad {
        border-radius: 4px;
        text-transform: capitalize;
        margin-top: 3%;
    }
    `;

export class ProgressBarRadius extends SampleBase<{}, {}> {

    private fullBackground: ProgressBarComponent;
    private outerRadius: ProgressBarComponent;
    private onRadius: ProgressBarComponent;
    private pie: ProgressBarComponent;
    private replayClick(): void {
        this.fullBackground.refresh();
        this.outerRadius.refresh();
        this.onRadius.refresh();
        this.pie.refresh();
    }
    private content1: string = '<div id="point1" style="font-size:20px;font-weight:bold;color:#ffffff;fill:#ffffff"><span>60%</span></div>';
    private progressLoad: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs) => {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast') as ProgressTheme;
        if (args.progressBar.element.id === 'full-background') {
            switch (selectedTheme) {
                case 'material':
                    args.progressBar.trackColor = '#e91e63';
                    break;
                case 'fabric':
                    args.progressBar.trackColor = '#0078D6';
                    break;
                case 'bootstrap':
                    args.progressBar.trackColor = '#317ab9';
                    break;
                case 'highcontrast':
                    args.progressBar.trackColor = '#FFD939';
                    args.progressBar.progressColor = '#000000';
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:20px;font-weight:bold;color:#000000;fill:#ffffff"><span>60%</span></div>';
                    break;
                default:
                    args.progressBar.trackColor = '#007bff';
                    break;
            }
        }
    }

    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className="control-section">
                    <div className="row" style={{ marginTop: '8%', marginLeft: '8%' }}>
                        <div className="col-lg-3 col-md-3 col-sm-3" style={{ alignContent: 'center' }}>
                            <ProgressBarComponent id="full-background" ref={progress1 => this.fullBackground = progress1}
                                type='Circular'
                                width='160px'
                                height='160px'
                                cornerRadius='Round'
                                enableRtl={false}
                                radius='100%'
                                innerRadius='190%'
                                progressThickness={10}
                                trackThickness={80}
                                progressColor='white'
                                value={60}
                                animation={{
                                    enable: true,
                                    duration: 2000,
                                    delay: 0,
                                }}
                                load={this.progressLoad.bind(this)}
                            >
                                <Inject services={[ProgressAnnotation]} />
                                <ProgressBarAnnotationsDirective>
                                    <ProgressBarAnnotationDirective content={this.content1}>
                                    </ProgressBarAnnotationDirective>
                                </ProgressBarAnnotationsDirective>

                            </ProgressBarComponent>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3" style={{ alignContent: 'center' }}>
                            <ProgressBarComponent id="outer-radius" ref={progress2 => this.outerRadius = progress2}
                                type='Circular'
                                width='160px'
                                height='160px'
                                value={90}
                                innerRadius='72'
                                progressThickness={8}
                                cornerRadius='Round'
                                animation={{
                                    enable: true,
                                    duration: 2000,
                                    delay: 0,
                                }}
                                load={this.progressLoad.bind(this)}
                            >
                            </ProgressBarComponent>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3" style={{ alignContent: 'center' }}>
                            <ProgressBarComponent id="on-radius" ref={progress3 => this.onRadius = progress3}
                                type='Circular'
                                width='160px'
                                height='160px'
                                value={90}
                                trackThickness={3}
                                progressThickness={8}
                                animation={{
                                    enable: true,
                                    duration: 2000,
                                    delay: 0,
                                }}
                                load={this.progressLoad.bind(this)}
                            >
                            </ProgressBarComponent>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3" style={{ alignContent: 'center' }}>
                            <ProgressBarComponent id="pie" ref={progress4 => this.pie = progress4}
                                type='Circular'
                                width='160px'
                                height='160px'
                                value={70}
                                enablePieProgress={true}
                                animation={{
                                    enable: true,
                                    duration: 2000,
                                    delay: 0,
                                }}
                                load={this.progressLoad.bind(this)}
                            >
                            </ProgressBarComponent>

                        </div>
                    </div>
                    <div id="replay-progressbar" style={{ marginTop: '2%', marginLeft: '45.5%' }}><button onClick={this.replayClick.bind(this)} id="reLoad" className="e-control e-btn e-lib e-outline e-primary">Reload</button></div>
                </div>
                <div id="action-description">
                    <p>
                       This sample illustrates a circular progress bar with customization options like radius, inner-radius, pie progress, track and progress thickness.
                </p>
                </div>
                <div id="description">
                    <p>
                       This demo for Essential JS2 Progress Bar control shows the customizing options for radius, inner-radius, pie progress, track and progress thickness.
                    </p>
                </div>
            </div>
        )
    }
}