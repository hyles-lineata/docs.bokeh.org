import { TextInput, TextInputView } from "./text_input";
import * as p from "../../core/properties";
export declare class AutocompleteInputView extends TextInputView {
    model: AutocompleteInput;
    protected _open: boolean;
    protected menu: HTMLElement;
    render(): void;
    protected _update_completions(completions: string[]): void;
    protected _show_menu(): void;
    protected _hide_menu(): void;
    protected _menu_click(event: MouseEvent): void;
    _keydown(_event: KeyboardEvent): void;
    _keyup(event: KeyboardEvent): void;
}
export declare namespace AutocompleteInput {
    type Attrs = p.AttrsOf<Props>;
    type Props = TextInput.Props & {
        completions: p.Property<string[]>;
    };
}
export interface AutocompleteInput extends AutocompleteInput.Attrs {
}
export declare class AutocompleteInput extends TextInput {
    properties: AutocompleteInput.Props;
    constructor(attrs?: Partial<AutocompleteInput.Attrs>);
    static initClass(): void;
}