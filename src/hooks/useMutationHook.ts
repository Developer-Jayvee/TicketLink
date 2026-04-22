import { useMutation } from "@tanstack/react-query";

type MethodList = "POST" | "GET" | "DELETE" | "PUT" | "PATCH";
interface UseMutationInterface {
  endpoint: string;
  type : MethodList;
  contentType : Record<string,string>;
}
export default function useMutationHook<T>({
  endpoint,
  type,
  contentType
}: UseMutationInterface) {
  return useMutation({
    mutationFn: (formData: T) =>
      fetch(import.meta.env.VITE_AUTH_SERVER + endpoint, {
        method: type,
        body: JSON.stringify(formData),
        headers: contentType,
      })
  });
}
