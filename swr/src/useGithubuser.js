import useSWR, {mutate} from 'swr';
import {useCallback} from "react";

const fetcher = (url) => {
    return fetch(url).then((res) => res.json())
}

export const useGithubUser = (username) => {
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR(username !== '' ? `https://api.github.com/users/${username}` : null, fetcher)
                // ^^^ swr -2
    const refetch = useCallback(() => {
        mutate();
    //    ^^^ swr-3
    }, [mutate]);

    return {
        data: data,
        error: error,
        loading: isLoading,
        refetch: refetch
    };
};

