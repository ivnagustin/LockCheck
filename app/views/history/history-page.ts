import { NavigatedData, Page } from '@nativescript/core';
import { HistoryViewModel } from './history-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HistoryViewModel();
}