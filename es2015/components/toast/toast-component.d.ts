import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { NavParams } from '../../navigation/nav-params';
import { ViewController } from '../../navigation/view-controller';
/**
 * @hidden
 */
export declare class ToastCmp implements AfterViewInit {
    _viewCtrl: ViewController;
    _config: Config;
    _elementRef: ElementRef;
    d: {
        message?: string;
        cssClass?: string;
        duration?: number;
        showCloseButton?: boolean;
        closeButtonText?: string;
        dismissOnPageChange?: boolean;
        position?: string;
        onClick?: (alert: any) => {};
        onClickBackground?: (alert: any) => {};
    };
    descId: string;
    dismissTimeout: number;
    enabled: boolean;
    hdrId: string;
    id: number;
    constructor(_viewCtrl: ViewController, _config: Config, _elementRef: ElementRef, params: NavParams, renderer: Renderer);
    ngAfterViewInit(): void;
    ionViewDidEnter(): void;
    cbClick(): void;
    msgCLick(): void;
    clickBackground(): void;
    dismiss(role: string): Promise<any>;
}
