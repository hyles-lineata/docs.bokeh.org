"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var action_tool_1 = require("./action_tool");
var icons_1 = require("../../../styles/icons");
var RedoToolView = /** @class */ (function (_super) {
    tslib_1.__extends(RedoToolView, _super);
    function RedoToolView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedoToolView.prototype.connect_signals = function () {
        var _this = this;
        _super.prototype.connect_signals.call(this);
        this.connect(this.plot_view.state_changed, function () { return _this.model.disabled = !_this.plot_view.can_redo(); });
    };
    RedoToolView.prototype.doit = function () {
        this.plot_view.redo();
    };
    RedoToolView.__name__ = "RedoToolView";
    return RedoToolView;
}(action_tool_1.ActionToolView));
exports.RedoToolView = RedoToolView;
var RedoTool = /** @class */ (function (_super) {
    tslib_1.__extends(RedoTool, _super);
    function RedoTool(attrs) {
        var _this = _super.call(this, attrs) || this;
        _this.tool_name = "Redo";
        _this.icon = icons_1.bk_tool_icon_redo;
        return _this;
    }
    RedoTool.initClass = function () {
        this.prototype.default_view = RedoToolView;
        this.override({
            disabled: true,
        });
    };
    RedoTool.__name__ = "RedoTool";
    return RedoTool;
}(action_tool_1.ActionTool));
exports.RedoTool = RedoTool;
RedoTool.initClass();