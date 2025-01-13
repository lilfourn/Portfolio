export declare namespace SplineNamespace {
  interface SplineViewerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    url?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': SplineNamespace.SplineViewerProps;
    }
  }
}
