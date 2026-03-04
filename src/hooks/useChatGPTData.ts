import { useEffect, useState } from "react";

export function useChatGPTData<T>() {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    function handler(event: MessageEvent) {
      if (event.data?.type === "tool_data") {
        setData(event.data.payload);
      }
    }

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return data;
}