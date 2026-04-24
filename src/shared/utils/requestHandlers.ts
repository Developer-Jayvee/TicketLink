import axiosClient from "../../feature/configs/axios.client"

interface RequestConfigInterface {
    endpoint : string;
};
interface PostRequestInterface<T> extends RequestConfigInterface{
    payload: T;
}
interface GetRequestInterface<T> extends RequestConfigInterface {
    urlParams ?: string;
    payload ?: T;
}
interface DeleteRequestInterface extends RequestConfigInterface {
    paramID : string;
}
export default function RequestHandler(){
    const postRequest = async <T,R>({ endpoint , payload } : PostRequestInterface<T>) :Promise<R>  => {
        return await axiosClient.post(endpoint,payload)
         .then( response => response)
         .catch( error => error);
    }

    const getRequest = async <T> ({ endpoint , urlParams = "", payload } : GetRequestInterface<T>) => {
        return await axiosClient.get(endpoint.concat(urlParams),{
            params:payload ?? {}
        })
        .then( response => response)
        .catch( error => alert(`Error found in ${error}`));
    }

    const getAllRequest = async ({ endpoint} : RequestConfigInterface) => {
        return await axiosClient.get(endpoint)
        .then( response => response)
        .catch( error => alert(`Error found in ${error}`));
    }

    const deleteRequest = async ({ endpoint , paramID} : DeleteRequestInterface) => {
        return await axiosClient.delete(`${endpoint}?${paramID}`)
        .then( response => response)
        .catch( error => alert(`Error found in ${error}`));
    }
    return {
        postRequest,
        getRequest,
        getAllRequest,
        deleteRequest
    }
}