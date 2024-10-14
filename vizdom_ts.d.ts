/* tslint:disable */
/* eslint-disable */
/**
*/
export function run(): void;
/**
*/
export enum CompressionMode {
  None = 0,
  Brotli = 1,
}
/**
*/
export enum ElemStatus {
/**
* The element was unchanged
*/
  Unchanged = 0,
/**
* The element was modified
*/
  Modified = 1,
/**
* The element was added
*/
  Added = 2,
/**
* The element was removed
*/
  Removed = 3,
}
/**
*/
export enum Curve {
/**
* Faster, with good asthetics.
*/
  Monotonic = 0,
/**
* Fastest, but worst asthetics.
*/
  Straight = 1,
/**
* Slow, but decent asthetics.
*/
  SimpleQuadratic = 2,
/**
* Slowest, but best asthetics.
*/
  AdaptiveBezier = 3,
}
/**
*/
export enum ArrowHead {
/**
* Render arrowheads.
*/
  Normal = 0,
/**
* Do not render any arrow heads. Overlaps with [`FfiDir::None`](super::FfiDir::None).
*/
  None = 1,
}
/**
*/
export enum LabelPos {
/**
* Position a label in the middle of the edge path.
*/
  C = 0,
/**
* Position a label to the left of the edge path.
*/
  L = 1,
/**
* Position a label to the right of the edge path.
*/
  R = 2,
}
/**
*/
export enum RankDir {
/**
* Top to bottom
*/
  TB = 0,
/**
* Bottom to top
*/
  BT = 1,
/**
* Left to right
*/
  LR = 2,
/**
* Right to left
*/
  RL = 3,
}
/**
*/
export enum EdgeStyle {
/**
* Render a solid outline for an edge shape.
*/
  Solid = 0,
/**
* Render a dashed edge path and shape
*/
  Dashed = 1,
/**
* Render a dotted edge path and shape.
*/
  Dotted = 2,
}
/**
*/
export enum VertexStyle {
/**
* Render a solid outline for a vertex shape.
*/
  Solid = 0,
/**
* Render a dashed outline for a vertex shape.
*/
  Dashed = 1,
/**
* Render a dotted outline for a vertex shape.
*/
  Dotted = 2,
}
/**
*/
export enum NodeType {
/**
* A 'normal' graph node.
*/
  Normal = 0,
/**
* A 'cluster' node can hold child nodes.
*/
  Cluster = 1,
}
/**
*/
export enum Dir {
/**
* Draw an arrowhead in the forward (expected) direction.
*/
  Forward = 0,
/**
* Draw an arrowhead in the backwards direction.
*/
  Back = 1,
/**
* Draw an arrowhead in both directions.
*/
  Both = 2,
/**
* Do not draw any arrow heads. Overlaps with [`FfiArrowHead::None`](super::FfiArrowHead::None).
*/
  None = 3,
}
/**
*/
export enum Shape {
/**
* A rectangle shape.
*/
  Rectangle = 0,
/**
* A square shape.
*/
  Square = 1,
/**
* A circle shape.
*/
  Circle = 2,
/**
* An ellipse shape.
*/
  Ellipse = 3,
/**
* An equilateral triangle shape.
*/
  Triangle = 4,
/**
* A diamond shape.
*/
  Diamond = 5,
/**
* A plaintext shape. Acts like an invisible rectangle.
*/
  Plaintext = 6,
/**
* An underline shape. Acts like an invisible rectangle with only the
* bottom edge.
*/
  Underline = 7,
}

export interface IEdgeLayout {
    /**
     * The bounding box width for the edge's shape.
     *
     * You can optionally supply this value (along with `shape_h`) if you only
     * want layout coordinates. This is useful if you are using a separate
     * rendering engine and do not require vizdom's auto render capability.
     */
    shape_w?: number;
    /**
     * The bounding box height for the edges's shape.
     *
     * You can optionally supply this value (along with `shape_w`) if you only
     * want layout coordinates. This is useful if you are using a separate
     * rendering engine and do not require vizdom's auto render capability.
     */
    shape_h?: number;
    /**
     * The edge's weight. Defaults to `1`. Minimum value is `0`.
     *
     * A higher number results in straighter edges in hierarchical layouts.
     */
    weight?: number;
    /**
     * The edge's minimum length. Defaults to `1`.
     *
     * A higher number results longer edges. Minimum value is `1`.
     */
    minlen?: number;
    /**
     * The position of the rendered label along the edge. Defaults to
     * `LabelPos.C`.
     */
    label_pos?: LabelPos;
}



export interface IEdgeRender {
    /**
     * The bounding box text width for the edges's label.
     *
     * This field is typically set automatically and can change the way the
     * rendered glyphs appear inside an edge. In most (if not all) cases, this
     * should be left alone.
     */
    text_w?: number;
    /**
     * The bounding box text height for the edges's label.
     *
     * This field is typically set automatically and can change the way the
     * rendered glyphs appear inside an edge. In most (if not all) cases, this
     * should be left alone.
     */
    text_h?: number;
    /**
     * The stroke width of the edge path. Defaults to `1`.
     */
    pen_width?: number;
    /**
     * The size of the font to render the text label. Defaults to `16`.
     */
    font_size?: number;
    /**
     * The style of an edges's path. Defaults to `EdgeStyle.None`.
     */
    style?: EdgeStyle;
    /**
     * The edges's shape. Defaults to `Shape.Plaintext`.
     */
    shape?: Shape;
    /**
     * The curve algorithm to use. Defaults to `Curve.Monotonic`.
     */
    curve?: Curve;
    /**
     * An enum representing to render an arrow head on the edge's ends or not.
     */
    arrow_head?: ArrowHead;
    /**
     * The direction of the arrow along the edge's path.
     *
     * This is useful for hierarchical graphs where defining an edge's "src ->
     * tgt" vs "tgt -> src" relationship has an effect on a layout. In some cases,
     * it is more visually appealing to use `Dir.Back`.
     */
    dir?: Dir;
    /**
     * The edges's path color. Defaults to `black`.
     *
     * The string values can be one of the following (case insensitive):
     *
     * 1. One of the names from the [SVG
     *    colors](https://graphviz.org/doc/info/colors.html#svg)
     * 2. RGB and RGBA hex values. i.e. "#ff00ff" or "#FF00FF00"
     * 3. HSV and HSVA values comma or space delimited. i.e. "0.123 0.456 0.789"
     *    or "0.123,0.456,0.789,0.000"
     */
    color?: string;
    /**
     * The edges's font color. Defaults to `black`.
     *
     * The string values can be one of the following (case insensitive):
     *
     * 1. One of the names from the [SVG
     *    colors](https://graphviz.org/doc/info/colors.html#svg)
     * 2. RGB and RGBA hex values. i.e. "#ff00ff" or "#FF00FF00"
     * 3. HSV and HSVA values comma or space delimited. i.e. "0.123 0.456 0.789"
     *    or "0.123,0.456,0.789,0.000"
     */
    font_color?: string;
    /**
     * The edge's shape color. Defaults to `white`.
     *
     * The string values can be one of the following (case insensitive):
     *
     * 1. One of the names from the [SVG
     *    colors](https://graphviz.org/doc/info/colors.html#svg)
     * 2. RGB and RGBA hex values. i.e. "#ff00ff" or "#FF00FF00"
     * 3. HSV and HSVA values comma or space delimited. i.e. "0.123 0.456 0.789"
     *    or "0.123,0.456,0.789,0.000"
     */
    fill_color?: string;
    /**
     *  The edges's ID. Optional.
     *
     *  An optional ID that uniquely identifies this edge. This field is used in
     *  one case:
     *
     *  1. The graph 'diff', functionality uses this value to determine if a
     *     vertex/edge has been modified.
     */
    id?: string;
    /**
     * The edges's label. Optional.
     *
     * This value is not required to be unique.
     */
    label?: string;
    /**
     * A tooltip label. Optional.
     *
     * A tooltip is shown when hovering over the SVG.
     */
    tooltip?: string;
}



export interface IEdge {
    layout?: IEdgeLayout;
    render?: IEdgeRender;
}



export type EdgeSet = (Edge: IEdge) => IEdge;



export interface IGraphLayout {
    /**
     * The number of pixels between each rank in the layout. Default `50.0`.
     *
     * In top-to-bottom (`RankDir.TB`) layouts, this can be thought of the row
     * spacing.
     */
    rank_sep?: number;
    /**
     * The number of pixels that separate nodes horizontally in the layout.
     * Default `50.0`.
     */
    node_sep?: number;
    /**
     * The number of pixels that separate edges horizontally in the layout.
     * Default `20.0`.
     */
    edge_sep?: number;
    /**
     * The number of pixels to use as a margin around the left and right of the
     * graph. Default `10.0`.
     */
    margin_x?: number;
    /**
     * The number of pixels to use as a margin around the top and bottom of the
     * graph. Default `10.0`.
     */
    margin_y?: number;
    /**
     * The direction for how ranks are computed. Default `RankDir.TB`.
     */
    rank_dir?: RankDir;
}



export interface IGraphRender {
    /**
     *  The graphs's ID. Optional.
     *
     *  An optional ID that uniquely identifies this graph.
     */
    id?: string;
    /**
     * The graphs's label. Optional.
     *
     * This value is not required to be unique.
     */
    label?: string;
    /**
     * A tooltip label. Optional.
     *
     * A tooltip is shown when hovering over the SVG.
     */
    tooltip?: string;
    /**
     * The graphs's background color. Defaults to `transparent`.
     *
     * The string values can be one of the following (case insensitive):
     *
     * 1. One of the names from the [SVG
     *    colors](https://graphviz.org/doc/info/colors.html#svg)
     * 2. RGB and RGBA hex values. i.e. "#ff00ff" or "#FF00FF00"
     * 3. HSV and HSVA values comma or space delimited. i.e. "0.123 0.456 0.789"
     *    or "0.123,0.456,0.789,0.000"
     */
    bg_color?: string;
}



export interface IGraph {
    layout?: IGraphLayout;
    render?: IGraphRender;
}



export type GraphSet = (graph: IGraph) => IGraph;



export interface IJsonPosition {
    graph: IJsonGraphPosition;
    nodes: IJsonVertexPosition[];
    edges: IJsonEdgePosition[];
}



export interface IJsonGraphPosition {
    id: string;
    label: string;
    rank_dir: RankDir;
    width: number;
    height: number;
}



export interface IJsonVertexPosition {
    id: string;
    label: string;
    shape: Shape;
    pen_width: number;
    font_size: number;
    node_type: NodeType;
    elem_status: ElemStatus;
    rank?: number;
    order?: number;
    x: number;
    y: number;
    width: number;
    height: number;
}



export interface IJsonPointPosition {
    x: number;
    y: number;
}



export interface IJsonEdgePosition {
    id: string;
    label: string;
    shape: Shape;
    pen_width: number;
    font_size: number;
    elem_status: ElemStatus;
    x: number;
    y: number;
    width: number;
    height: number;
    points: IJsonPointPosition[];
}



export interface IOptions {
    /**
     *  If true, automatically compute the bounding box of the node/edge shape and
     *  text. Defaults to `true`.
     */
    compute_bounding_box?: boolean;
}



export interface IVizOptions {
    /**
     *  The unique `client_id` that identifies your organization.
     */
    client_id: string;
    /**
     *  The unique `client_scret` that authenticates this library to your
     *  organization.
     */
    client_secret: string;
    /**
     *  The unique `graph_id` that identifies which graph to update.
     */
    graph_id: string;
    /**
     *  An optional key that uniquely defines a version of the graph. Providing
     *  this value will enable the ability to see historical changes between
     *  versions.
     */
    version_key?: string;
    /**
     *  An optional parameter to enable debug messages.
     */
    debug?: boolean;
}



export interface IVertexLayout {
    /**
     * The bounding box width for the vertex's shape.
     *
     * You can optionally supply this value (along with `shape_h`) if you only
     * want layout coordinates. This is useful if you are using a separate
     * rendering engine and do not require vizdom's auto render capability.
     */
    shape_w?: number;
    /**
     * The bounding box height for the vertex's shape.
     *
     * You can optionally supply this value (along with `shape_w`) if you only
     * want layout coordinates. This is useful if you are using a separate
     * rendering engine and do not require vizdom's auto render capability.
     */
    shape_h?: number;
}



export interface IVertexRender {
    /**
     * The bounding box text width for the vertex's label.
     *
     * This field is typically set automatically and can change the way the
     * rendered glyphs appear inside a node. In most (if not all) cases, this
     * should be left alone.
     */
    text_w?: number;
    /**
     * The bounding box text height for the vertex's label.
     *
     * This field is typically set automatically and can change the way the
     * rendered glyphs appear inside a node. In most (if not all) cases, this
     * should be left alone.
     */
    text_h?: number;
    /**
     * The stroke width of the vertex's border. Defaults to `1`.
     */
    pen_width?: number;
    /**
     * The size of the font to render the text label. Defaults to `16`.
     */
    font_size?: number;
    /**
     * The vertex's outline style. Defaults to `VertexStyle.None`.
     */
    style?: VertexStyle;
    /**
     * The vertex's shape. Defaults to `Shape.Rectangle`.
     */
    shape?: Shape;
    /**
     * The vertex's color. Defaults to `black`.
     *
     * The string values can be one of the following (case insensitive):
     *
     * 1. One of the names from the [SVG
     *    colors](https://graphviz.org/doc/info/colors.html#svg)
     * 2. RGB and RGBA hex values. i.e. "#ff00ff" or "#FF00FF00"
     * 3. HSV and HSVA values comma or space delimited. i.e. "0.123 0.456 0.789"
     *    or "0.123,0.456,0.789,0.000"
     */
    color?: string;
    /**
     * The vertex's font color. Defaults to `black`.
     *
     * The string values can be one of the following (case insensitive):
     *
     * 1. One of the names from the [SVG
     *    colors](https://graphviz.org/doc/info/colors.html#svg)
     * 2. RGB and RGBA hex values. i.e. "#ff00ff" or "#FF00FF00"
     * 3. HSV and HSVA values comma or space delimited. i.e. "0.123 0.456 0.789"
     *    or "0.123,0.456,0.789,0.000"
     */
    font_color?: string;
    /**
     * The vertex's outline color. Defaults to `white`.
     *
     * The string values can be one of the following (case insensitive):
     *
     * 1. One of the names from the [SVG
     *    colors](https://graphviz.org/doc/info/colors.html#svg)
     * 2. RGB and RGBA hex values. i.e. "#ff00ff" or "#FF00FF00"
     * 3. HSV and HSVA values comma or space delimited. i.e. "0.123 0.456 0.789"
     *    or "0.123,0.456,0.789,0.000"
     */
    fill_color?: string;
    /**
     *  The vertex's ID. Optional.
     *
     *  An optional ID that uniquely identifies this vertex. This field is used in
     *  two cases:
     *
     *  1. If no label was provided, the tooltip uses this value
     *  2. The graph 'diff', functionality uses this value to determine if a
     *     vertex/edge has been modified.
     */
    id?: string;
    /**
     * The vertex's label. Optional.
     *
     * This value is not required to be unique.
     */
    label?: string;
    /**
     * A tooltip label. Optional.
     *
     * A tooltip is shown when hovering over the SVG.
     */
    tooltip?: string;
}



export interface IVertex {
    layout?: IVertexLayout;
    render?: IVertexRender;
}



export type VertexSet = (vertex: IVertex) => IVertex;


/**
*/
export class DirectedGraph {
  free(): void;
/**
* @param {IGraph | undefined} [data]
* @param {IVizOptions | undefined} [opts]
*/
  constructor(data?: IGraph, opts?: IVizOptions);
/**
* Returns the Vizdom options used for constructing the graph
* @returns {OVizOptions}
*/
  opts(): OVizOptions;
/**
* @param {IVizOptions | undefined} [opts]
*/
  set_opts(opts?: IVizOptions): void;
/**
* @returns {GraphWeakRef}
*/
  attrs(): GraphWeakRef;
/**
* @param {IVertex | undefined} [data]
* @param {IOptions | undefined} [opts]
* @returns {VertexWeakRef}
*/
  new_vertex(data?: IVertex, opts?: IOptions): VertexWeakRef;
/**
* @param {VertexWeakRef} source
* @param {VertexWeakRef} target
* @param {IEdge | undefined} [data]
* @param {IOptions | undefined} [opts]
* @returns {EdgeWeakRef}
*/
  new_edge(source: VertexWeakRef, target: VertexWeakRef, data?: IEdge, opts?: IOptions): EdgeWeakRef;
/**
* Produces a positioned graph [`PositionedDirectedGraph`] containing
* coordinates and points suitable for rendering.
* @returns {PositionedDirectedGraph}
*/
  layout(): PositionedDirectedGraph;
/**
* Uploads the graph's current state to your vizdom account specified by
* `IVizOptions` in the graph's construction.
*
* Returns immediately if there were no credentials specified.
* @returns {Promise<any>}
*/
  upload(): Promise<any>;
}
/**
*/
export class DotDirectedGraph {
  free(): void;
/**
* @returns {PositionedDotDirectedGraph}
*/
  layout(): PositionedDotDirectedGraph;
}
/**
*/
export class DotGraph {
  free(): void;
/**
* @param {IVizOptions | undefined} [opts]
* @returns {DotDirectedGraph}
*/
  to_directed(opts?: IVizOptions): DotDirectedGraph;
}
/**
*/
export class DotParser {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} input
* @returns {DotGraph}
*/
  parse(input: string): DotGraph;
}
/**
*/
export class DotUndirectedGraph {
  free(): void;
}
/**
*/
export class EdgeRef {
  free(): void;
}
/**
*/
export class EdgeWeakRef {
  free(): void;
/**
* @returns {VertexWeakRef}
*/
  source(): VertexWeakRef;
/**
* @returns {VertexWeakRef}
*/
  target(): VertexWeakRef;
/**
* @param {EdgeSet} f
*/
  set(f: EdgeSet): void;
/**
* @returns {any}
*/
  to_json(): any;
}
/**
*/
export class GraphRef {
  free(): void;
}
/**
*/
export class GraphWeakRef {
  free(): void;
/**
* @param {GraphSet} f
*/
  set(f: GraphSet): void;
/**
* @returns {any}
*/
  to_json(): any;
}
/**
*/
export class IntoUnderlyingByteSource {
  free(): void;
/**
* @param {ReadableByteStreamController} controller
*/
  start(controller: ReadableByteStreamController): void;
/**
* @param {ReadableByteStreamController} controller
* @returns {Promise<any>}
*/
  pull(controller: ReadableByteStreamController): Promise<any>;
/**
*/
  cancel(): void;
/**
*/
  readonly autoAllocateChunkSize: number;
/**
*/
  readonly type: string;
}
/**
*/
export class IntoUnderlyingSink {
  free(): void;
/**
* @param {any} chunk
* @returns {Promise<any>}
*/
  write(chunk: any): Promise<any>;
/**
* @returns {Promise<any>}
*/
  close(): Promise<any>;
/**
* @param {any} reason
* @returns {Promise<any>}
*/
  abort(reason: any): Promise<any>;
}
/**
*/
export class IntoUnderlyingSource {
  free(): void;
/**
* @param {ReadableStreamDefaultController} controller
* @returns {Promise<any>}
*/
  pull(controller: ReadableStreamDefaultController): Promise<any>;
/**
*/
  cancel(): void;
}
/**
*/
export class Json {
  free(): void;
/**
* @returns {string}
*/
  to_string(): string;
/**
* @returns {string}
*/
  to_string_pretty(): string;
/**
* @returns {IJsonPosition}
*/
  to_obj(): IJsonPosition;
}
/**
*/
export class OVizOptions {
  free(): void;
/**
*/
  client_id: string;
/**
*/
  client_secret: string;
/**
*/
  debug?: boolean;
/**
*/
  graph_id: string;
/**
*/
  version_key?: string;
}
/**
*/
export class PositionedDirectedGraph {
  free(): void;
/**
* @returns {Svg}
*/
  to_svg(): Svg;
/**
* @returns {Json}
*/
  to_json(): Json;
}
/**
*/
export class PositionedDotDirectedGraph {
  free(): void;
/**
* @returns {Svg}
*/
  to_svg(): Svg;
/**
* @returns {Json}
*/
  to_json(): Json;
}
/**
*/
export class Svg {
  free(): void;
/**
* @returns {string}
*/
  to_string(): string;
}
/**
*/
export class Transport {
  free(): void;
/**
*/
  constructor();
/**
* Uploads the serialized graph data to your vizdom account with an
* associated compression mode.
* @param {Uint8Array} data
* @param {CompressionMode} mode
* @param {OVizOptions} opts
* @returns {Promise<string>}
*/
  upload(data: Uint8Array, mode: CompressionMode, opts: OVizOptions): Promise<string>;
}
/**
*/
export class Util {
  free(): void;
/**
* This utility is best used for visualizing the difference between two
* input graphs. Afterward, both graphs can be positioned (layout) and
* rendered.
*
* NOTE: This irreversibly mutates the underlying graphs.
* @param {DirectedGraph} first
* @param {DirectedGraph} other
*/
  static diff(first: DirectedGraph, other: DirectedGraph): void;
}
/**
*/
export class VertexRef {
  free(): void;
}
/**
*/
export class VertexWeakRef {
  free(): void;
/**
* @param {VertexSet} f
*/
  set(f: VertexSet): void;
/**
* @returns {any}
*/
  to_json(): any;
}
