import { Movie } from "@/types/types";
import axios from "axios";
import Image from "next/image";

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
};

export const getStaticParams = async () => {
  const res = await axios.get(url, options);
  const data = await res.data;
  const slugs = data.results.map((movie: Movie) => ({
    params: {
      slug: movie.title.split(" ").join("-"),
    },
  }));
  return slugs;
};

const fecthSingleMovie = async (slug: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${slug}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await res.data;
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log("Error fetching movies:", error);
  }
};

const SingleProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const movie = await fecthSingleMovie(slug);

  return (
    <>
      <section className="py-14 md:px-20 px-2">
        <div className="w-full h-52 rounded-lg overflow-hidden relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title ? movie?.title : "Movie poster"}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold pb-10">{movie?.title}</h1>
      </section>
    </>
  );
};

export default SingleProductPage;
