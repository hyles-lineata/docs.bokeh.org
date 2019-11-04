import { Annotation, AnnotationView } from "./annotation";
import { LegendItem } from "./legend_item";
import { Orientation, LegendLocation, LegendClickPolicy } from "../../core/enums";
import * as visuals from "../../core/visuals";
import * as mixins from "../../core/property_mixins";
import * as p from "../../core/properties";
import { Signal0 } from "../../core/signaling";
import { Class } from "../../core/class";
import { Size } from "../../core/layout";
import { BBox } from "../../core/util/bbox";
import { Context2d } from "../../core/util/canvas";
export declare class LegendView extends AnnotationView {
    model: Legend;
    visuals: Legend.Visuals;
    protected max_label_height: number;
    protected text_widths: {
        [key: string]: number;
    };
    cursor(_sx: number, _sy: number): string | null;
    readonly legend_padding: number;
    connect_signals(): void;
    compute_legend_bbox(): BBox;
    interactive_bbox(): BBox;
    interactive_hit(sx: number, sy: number): boolean;
    on_hit(sx: number, sy: number): boolean;
    render(): void;
    protected _draw_legend_box(ctx: Context2d, bbox: BBox): void;
    protected _draw_legend_items(ctx: Context2d, bbox: BBox): void;
    protected _get_size(): Size;
}
export declare namespace Legend {
    type Attrs = p.AttrsOf<Props>;
    type Props = Annotation.Props & {
        orientation: p.Property<Orientation>;
        location: p.Property<LegendLocation | [number, number]>;
        label_standoff: p.Property<number>;
        glyph_height: p.Property<number>;
        glyph_width: p.Property<number>;
        label_height: p.Property<number>;
        label_width: p.Property<number>;
        margin: p.Property<number>;
        padding: p.Property<number>;
        spacing: p.Property<number>;
        items: p.Property<LegendItem[]>;
        click_policy: p.Property<LegendClickPolicy>;
    } & mixins.LabelText & mixins.InactiveFill & mixins.BorderLine & mixins.BackgroundFill;
    type Visuals = Annotation.Visuals & {
        label_text: visuals.Text;
        inactive_fill: visuals.Fill;
        border_line: visuals.Line;
        background_fill: visuals.Fill;
    };
}
export interface Legend extends Legend.Attrs {
}
export declare class Legend extends Annotation {
    properties: Legend.Props;
    default_view: Class<LegendView>;
    item_change: Signal0<this>;
    constructor(attrs?: Partial<Legend.Attrs>);
    initialize(): void;
    static initClass(): void;
    get_legend_names(): string[];
}