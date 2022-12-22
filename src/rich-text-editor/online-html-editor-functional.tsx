/**
 * Rich Text Editor overview sample
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import { RichTextEditorComponent, Toolbar, Inject, Image, Link, HtmlEditor } from '@syncfusion/ej2-react-richtexteditor';
import { QuickToolbar, Table, ToolbarSettingsModel, ToolbarType, Count } from '@syncfusion/ej2-react-richtexteditor';
import { createElement } from '@syncfusion/ej2-base';
import { updateSampleSection } from '../common/sample-base';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import './online-html-editor.css';
function OnlineHtmlEditor() {
    React.useEffect(() => {
        updateSampleSection();
    }, [])
    let rteObj: RichTextEditorComponent;
    // Rich Text Editor items list
    const items: string[] = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
        'Outdent', 'Indent', '|',
        'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
    ];
    //Rich Text Editor ToolbarSettings
    const toolbarSettings: ToolbarSettingsModel = {
        items: items,
        type: ToolbarType.Expand,
        enableFloating: false
    };
    let myCodeMirror;
    let srcArea: HTMLTextAreaElement;
    let textArea: HTMLTextAreaElement;
    function onCreate(): void {
        updateValue();
        textArea = rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
        srcArea = document.querySelector('.source-code');
        if (srcArea) {
            srcArea.addEventListener('keyup', updateHtmlValue);
        }
    }
    function updateHtmlValue(): void {
        textArea.innerHTML = myCodeMirror.getValue();
    }
    function onChange(): void {
        updateValue();
    }
    function onResizing(): void {
        rteObj.refreshUI();
    }
    function updateValue(): void {
        let mirrorView: HTMLElement = document.querySelector('#src-view');
        if (!mirrorView) {
            mirrorView = createElement('div', {
                className: 'e-content'
            });
            mirrorView.id = 'src-view';
            let srcCodeElement: HTMLElement = document.querySelector('.source-code');
            if (srcCodeElement) {
                srcCodeElement.appendChild(mirrorView);
            }
            mirrorView.innerHTML = '';
            mirrorView.style.display = 'block';
        }
        let srcViewEle: HTMLElement = document.querySelector('#src-view');
        let codemirrorEle: HTMLElement = document.querySelector('.CodeMirror-wrap');
        if (codemirrorEle) {
            codemirrorEle.remove();
        }
        if (rteObj.value) {
            renderCodeMirror(srcViewEle, rteObj.value);
        }
    }
    function renderCodeMirror(mirrorView: HTMLElement, content: string): void {
        myCodeMirror = CodeMirror(mirrorView, {
            value: content,
            lineNumbers: true,
            mode: 'text/html',
            lineWrapping: true,
        });
    }
    function content1(): JSX.Element {
        return (
            <div className="content">
                <RichTextEditorComponent id='defaultRTE' ref={(richtexteditor) => { rteObj = richtexteditor }}
                    toolbarSettings={toolbarSettings} height='447px' saveInterval={1} showCharCount={true} maxLength={5000}
                    created={onCreate.bind(this)} change={onChange.bind(this)} actionComplete={updateValue.bind(this)}>
                    <h3>Welcome to the HTML real-time live editor!</h3>
                    <p>Create and edit the valid HTML code simply! You don't worry about the HTML syntax to format your text content. The WYSIWYG editor (left side view) provided the toolbar to make format text and insert images, tables, and more options.</p>
                    <h4>Don't worry about syntax</h4>
                    <p>The content editing works bi-directional, you can write the HTML code on the right-side view (code view), and changes will reflect in the WYSIWYG editor.</p>
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table, Count]} />
                </RichTextEditorComponent>
            </div>
        );
    };
    function content2(): JSX.Element {
        return (
            <div className="heading right">
                <h6 className="title"><b>HTML SOURCE</b></h6>
                <div className="splitter-default-content source-code pane2" contentEditable={true}></div>
            </div>
        );
    };
    return (
        <div className="control-pane">
            <div className='control-section onlineEditor'>
                <div id="rte-online-sample-view">
                    <SplitterComponent height='450px' width='100%' resizing={onResizing.bind(this)}>
                        <PanesDirective>
                            <PaneDirective resizable={true} size='50%' min="60px" cssClass='pane1' content={content1.bind(this)} ></PaneDirective>
                            <PaneDirective cssClass='pane2' content={content2.bind(this)}></PaneDirective>
                        </PanesDirective>
                    </SplitterComponent>
                </div>
            </div>
            <div id="action-description">
                <p>The online HTML editor sample demonstrates how to create LIVE editing scenario with real-world applications
                    using JavaScript Rich Text Editor. Most of the control features are enabled in this sample to edit the
                    content quickly.</p>
                <p>You can edit the source code and content also parallelly. The source code is formatted using the code mirror
                    library.</p>
            </div>

            <div id="description">
                <p>This sample explains how to create a live HTML editor application using Rich Text Editor.</p>
            </div>
        </div>
    );
}
export default OnlineHtmlEditor;

