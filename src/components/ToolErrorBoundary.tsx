import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  toolName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ToolErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ToolErrorBoundary caught an error:", error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-[400px] flex flex-col items-center justify-center p-6 text-center bg-[var(--card)] border border-[var(--border)] rounded-2xl mx-auto my-8 max-w-2xl">
          <div className="p-4 rounded-full bg-red-500/10 mb-4">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-[var(--text)] mb-2">
            {this.props.toolName || "Tool"} Unavailable
          </h2>
          <p className="text-gray-500 mb-6 max-w-md">
            We encountered a problem loading this tool. It might be a network issue or missing dependency.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={this.handleRetry}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Page
            </button>
          </div>
          {import.meta.env.DEV && this.state.error && (
            <div className="mt-8 p-4 bg-black/50 rounded-lg text-left w-full overflow-auto max-h-40">
              <code className="text-xs text-red-300 font-mono whitespace-pre-wrap">
                {this.state.error.message}
              </code>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ToolErrorBoundary;
