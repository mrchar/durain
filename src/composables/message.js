export function useMessages() {
  const messages = useStorage("messages", []);
  return {
    messages,
  };
}

export default {
  useMessages,
};
