import { ComponentType } from "@angular/cdk/portal";

export interface DataGridItemsColumn{
    displayName : string;
    dataIndex? : string;
    renderer? : RenderComponent;
    headerStyles?: Style;
    columnStyles?: Style;
    actionColumn?:  AppActionColumn[];
    actionMenuColumn?: AppActionColumn[];
}

export interface Style {
    [key : string] : string
}

export interface RenderComponent{
    component: ComponentType<any>;
    input?: {[key: string] : string};
    output?: {[key: string] : string};
}

export interface AppActionColumn{
    link?: string;
    icon?: string | ((record: any, value: any) => string);
    text?: string;
    tooltip?: string | ((record: any, value: any) => string);
    color?: string | ((record: any, value: any) => string);
    type?: 'link' | 'button';
    shouldDisable?: (record: any, value: any) => boolean;
    shouldHide?: (record: any, value: any) => boolean;
    // on click use for listen click event . if add this attribute for link will not work vice-versa .
    onClick?: (record: any, value: any) => void;
}   