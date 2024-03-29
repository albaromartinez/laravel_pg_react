
export interface IMovie{
    status: string;
    data: string[];
}

export interface IMovieState{
    movies:any,
    statusMessage: string,
    errorMessage: string,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean
}