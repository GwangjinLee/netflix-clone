import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = async ({keyword,page}) => {
    return keyword ? await api.get(`/search/movie?query=${keyword}&page=${page}`) : await api.get(`/movie/popular?page=${page}`);
};

export const useSearchMovieQuery = ({keyword, page}) => {
    return useQuery({
        queryKey: ['movie-search', {keyword, page}],
        queryFn: ()=>fetchSearchMovie({keyword, page}),
        select: (response)=>response.data
    });
};