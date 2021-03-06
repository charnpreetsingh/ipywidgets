// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

export * from "./manager-base";
export * from "./utils";
export * from "./widget";
export * from "./widget_layout";
export * from "./widget_style";
export * from "./widget_link";
export * from "./widget_bool";
export * from "./widget_button";
export * from "./widget_box";
export * from "./widget_image";
export * from "./widget_color";
export * from "./widget_date";
export * from "./services-shim";
export * from "./widget_int";
export * from "./widget_float";
export * from "./widget_controller";
export * from "./widget_selection";
export * from "./widget_selectioncontainer";
export * from "./widget_string";

export
const version = (require('../package.json') as any).version;
