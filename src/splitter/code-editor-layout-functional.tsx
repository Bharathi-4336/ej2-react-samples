import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SampleBase, updateSampleSection } from '../common/sample-base';
import { SplitterComponent, PanesDirective, PaneDirective, Splitter } from '@syncfusion/ej2-react-layouts';
import './code-editor.component.css';

/**
 *  Sample for code editor layout
 */

const imgStyle = {
    width: "20%",
    margin: "0 auto"
}

const paneImg = {
    margin: "auto auto 5px"
}

const lastPaneStyle = {
    padding: "auto auto 20px"
}

function CodeEditor(){
    
    React.useEffect(() => {
        updateSampleSection();
    }, [])

    let splitterInstance: SplitterComponent;

    let innerSplitterInstance: SplitterComponent;

    let paneSize = "53%";

    let minimumSize = "30%";

    function bottomPaneContent(): JSX.Element {
        return(
            <div className="splitter-editor-content">
                <h3 className="h3">Preview of sample</h3>
                <div className="splitter-image">
                    <img className="img1" src="https://ej2.syncfusion.com/demos/src/listview/images/albert.png" style={imgStyle} />
                </div>
            </div>
        )
    };
    function firstPaneContent(): JSX.Element {
        return(
            <div className="splitter-editor-content">
                <h3 className="h3">HTML</h3>
                <div className="code-preview">
                    &lt;<span>!DOCTYPE html&gt;</span>
                    <div>&lt;<span>html&gt;</span></div>
                    <div>&lt;<span>body &gt;</span></div>
                    &lt;<span>div</span> id="custom-image"&gt;
        <div style={paneImg}>&lt;<span>img</span> src="src/albert.png"&gt;</div>
                    <div>&lt;<span>div</span>&gt;</div>
                    <div>&lt;<span>/body&gt;</span></div>
                    <div>&lt;<span>/html&gt;</span></div>
                </div>
            </div>
        );
    };

    function secondPaneContent(): JSX.Element {
        return(
            <div className="splitter-editor-content">
                <h3 className="h3">CSS</h3>
                <div className="code-preview">
                    <span>img &#123; </span>
                    <div id="code-text">margin:<span>0 auto;</span></div>
                    <div id="code-text">display:<span>flex;</span></div>
                    <div id="code-text">height:<span>70px;</span></div>
                    <span> &#125; </span>
                </div>
            </div>
        );
    };
    function thirdPaneContent(): JSX.Element {
        return(
            <div className="splitter-editor-content">
            <h3 className="h3">JavaScript</h3>
                <div className="code-preview">
                    <span>var</span> image = document.getElementById("custom-image");
                    <div>image.addEventListener("click", function() &#123; </div>
                    <div style={lastPaneStyle}> Code block for click action </div>
                    <span> &#125; </span>
                </div>
            </div>
        );
    };

    function innerSplitterElement(): JSX.Element {
        return(
            <SplitterComponent id="codeEditor" ref={(splitter) => { innerSplitterInstance = splitter }}>
            <PanesDirective>
                <PaneDirective size='29%' min='23%' content = {firstPaneContent} />
                <PaneDirective size='20%' min='15%' content = {secondPaneContent} />
                <PaneDirective size='35%' min='35%' content = {thirdPaneContent} />
            </PanesDirective>
            </SplitterComponent>
        );
    };


        return (
            <div id="target" className="control-section code-editor" >
                <SplitterComponent id="splitter2" height="400px" orientation="Vertical" ref={(splitter) => { splitterInstance = splitter }} >
                    <PanesDirective>
                        <PaneDirective content={innerSplitterElement.bind(this)} >
                        </PaneDirective>
                        <PaneDirective size={paneSize} min={minimumSize} content={bottomPaneContent}>
                        </PaneDirective>
                    </PanesDirective>
                </SplitterComponent>
                <div id="action-description">
                    <p>
                        This example demonstrates the splitter control that is used to design code editor-like application using multiple panes.
                        You can resize its panes vertically as well as horizontally.
                    </p>
                </div>
                <div id="description">
                    <p>
                        The Splitter is used to design code editor-like application using multiple panes.
                        In this code editor layout, display HTML, CSS, and JavaScript (JS) code as horizontal panes at the top and output of 
                        sample at the bottom pane.
                    </p>
                </div>
            </div>
        );

}
export default CodeEditor;