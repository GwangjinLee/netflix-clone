import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchMovieGenre = async () => {
    return await api.get("/genre/movie/list");
};

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: "movie-genre",
        queryFn: fetchMovieGenre,
        select: data => data.data.genres,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });
};