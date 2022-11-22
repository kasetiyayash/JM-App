import { getTrendingMovies } from "@/store/dashboard/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Trending from "@/components/Trending";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.dashboard);

  console.log(data, "Data");

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  return (
    <div>
      <p className="w-full p-4 text-2xl"># Trending</p>
      <Trending data={data} />
    </div>
  );
}
