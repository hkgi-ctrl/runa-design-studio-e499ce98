import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Bundle all source-tree files at build time as raw strings.
const sourceFiles = import.meta.glob(
  [
    "/src/**/*",
    "/public/**/*",
    "/*.{json,js,ts,mjs,cjs,md,html,yml,yaml}",
    "/.prettierrc",
    "/.prettierignore",
    "/.github/**/*",
  ],
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

export function DownloadCodebaseButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      const root = zip.folder("runa-design")!;
      for (const [path, content] of Object.entries(sourceFiles)) {
        const rel = path.replace(/^\//, "");
        root.file(rel, content);
      }
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `runa-design-${new Date().toISOString().slice(0, 10)}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to generate ZIP", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={loading}
      variant="outline"
      size="sm"
      className="border-turquoise/40 text-turquoise hover:bg-turquoise/10 hover:text-turquoise"
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Download className="mr-2 h-4 w-4" />
      )}
      {loading ? "A preparar…" : "Download codebase"}
    </Button>
  );
}