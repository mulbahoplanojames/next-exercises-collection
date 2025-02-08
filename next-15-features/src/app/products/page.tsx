import { Movie } from "@/types/types";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data fetching in Next JS 15",
  description: "Data fetching, using Next JS 15 New Features",
};

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
};

const fetchMovies = async () => {
  try {
    const res = await axios.get(url, options);
    const data = await res.data;
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log("Error fetching movies:", error);
  }
};

const Products = async () => {
  const movies = await fetchMovies();
  return (
    <>
      <section className="py-10 px-20">
        <h1 className="text-3xl font-bold pb-10">Movies List</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {movies ? (
            movies.map((movie: Movie) => (
              <Link
                href={`/products/${encodeURIComponent(
                  movie.title.split(" ").join("-")
                )}`}
                className="w-full"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto mb-3"
                />
                <div className="flex justify-between items-center pb-3">
                  <p>{movie.release_date}</p>
                  <h2>{movie.title}</h2>
                </div>
              </Link>
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
