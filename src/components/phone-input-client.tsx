import { useEffect, useState, type ComponentType } from "react";
import type PhoneInputType from "react-phone-input-2";

type PhoneInputProps = React.ComponentProps<typeof PhoneInputType>;

function isValidComponent(
  value: unknown,
): value is ComponentType<PhoneInputProps> {
  return typeof value === "function";
}

export function PhoneInputClient(props: PhoneInputProps) {
  const [Component, setComponent] = useState<ComponentType<PhoneInputProps> | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      import("react-phone-input-2"),
      import("react-phone-input-2/lib/style.css"),
      import("./phone-input-client.css"),
    ])
      .then(([mod]) => {
        if (!mounted) return;
        const raw = mod as Record<string, unknown>;
        const candidate: unknown =
          typeof mod === "function"
            ? mod
            : isValidComponent(raw?.default)
              ? raw?.default
              : isValidComponent((raw?.default as Record<string, unknown>)?.default)
                ? (raw?.default as Record<string, unknown>)?.default
                : raw?.PhoneInput ?? null;
        if (isValidComponent(candidate)) {
          setComponent(() => candidate);
        } else {
          // eslint-disable-next-line no-console
          console.warn("react-phone-input-2 did not export a valid component", raw);
        }
        setReady(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.warn("Failed to load react-phone-input-2", err);
        if (mounted) setReady(true);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (!ready || !Component) {
    const inputProps = props.inputProps as React.InputHTMLAttributes<HTMLInputElement> | undefined;
    return (
      <input
        type="tel"
        id={inputProps?.id}
        name={inputProps?.name}
        placeholder={typeof props.placeholder === "string" ? props.placeholder : undefined}
        className={props.inputClass}
        readOnly
      />
    );
  }

  return <Component {...props} />;
}
