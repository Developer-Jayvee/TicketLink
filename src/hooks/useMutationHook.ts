import { useMutation } from "@tanstack/react-query";

type MethodList = "POST" | "GET" | "DELETE" | "PUT" | "PATCH";
interface UseMutationInterface {
  endpoint: string;
  path : string;
  type : MethodList;
  contentType ?: Record<string,string>;
}
export default function useMutationHook<T>({
  endpoint,
  path,
  type,
  contentType = { 'Content-Type': 'application/json' }
}: UseMutationInterface) {
  return useMutation({
    mutationFn: (formData: T) =>
      fetch(path + endpoint, {
        method: type,
        body: JSON.stringify(formData),
        headers: contentType,
      })
  });
}
